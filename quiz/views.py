# [파일 설명]
# 퀴즈 결과 저장, 퀴즈 기록 조회 기능을 처리하는 뷰 함수들이 정의됨.

# quiz/views.py

from django.db.models import Max, Min #점수가 같을 시 시간순으로 정렬렬
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import QuizResult, UserQuiz, UserQuizOption
import json

@login_required
def save_quiz_result(request):
    if request.method == 'POST':
        try:
            print("\n=== 퀴즈 결과 저장 시작 ===")

            if request.content_type == 'application/json':
                data = json.loads(request.body.decode('utf-8'))
            else:
                data = request.POST  # FormData는 여기서 처리

            category = data.get('category')
            difficulty = data.get('difficulty')
            score = int(data.get('score'))
            total = int(data.get('total'))
            question = data.get('question', '')  # 없으면 빈 문자열
            user_answer = data.get('user_answer', '')
            correct_answer = data.get('correct_answer', '')
            duration = int(data.get('duration') or 0)

            # 로그 출력 생략 가능

            quiz_result = QuizResult.objects.create(
                user=request.user,
                category=category,
                difficulty=difficulty,
                score=score,
                total=total,
                question=question,
                user_answer=user_answer,
                correct_answer=correct_answer,
                duration=duration
            )

            return JsonResponse({
                'status': 'success',
                'message': '퀴즈 결과가 저장되었습니다.',
                'result_id': quiz_result.id
            })
        except Exception as e:
            import traceback
            print("=== 퀴즈 결과 저장 실패 ===")
            print("에러 발생:", str(e))
            print("상세 에러:", traceback.format_exc())
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)

    return JsonResponse({'status': 'error', 'message': '잘못된 요청입니다.'}, status=400)
    
@login_required
def my_results(request):
    print("=== 내 기록 조회 시작 ===")
    results = QuizResult.objects.filter(user=request.user).order_by('-played_at')
    print(f"조회된 결과 수: {results.count()}")
    for result in results:
        print(f"결과 ID: {result.id}")
        print(f"카테고리: {result.category}")
        print(f"난이도: {result.difficulty}")
        print(f"문제: {result.question}")
        print(f"사용자 답변: {result.user_answer}")
        print(f"정답: {result.correct_answer}")
        print(f"점수: {result.score}")
        print("---")
    print("=== 내 기록 조회 완료 ===")
    return render(request, 'quiz/my_results.html', {'results': results})

@login_required
def create_user_quiz(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            print("Received data:", data)
            print("User:", request.user)
            
            # 문제 생성
            quiz = UserQuiz.objects.create(
                creator=request.user,
                category=data['category'],
                difficulty=data['difficulty'],
                question=data['question']
            )
            print("Created quiz:", quiz)
            print("Quiz ID:", quiz.id)
            print("Quiz creator:", quiz.creator)
            print("Quiz category:", quiz.category)
            print("Quiz difficulty:", quiz.difficulty)
            print("Quiz question:", quiz.question)
            
            # 보기 생성
            for i, option in enumerate(data['options']):
                option_obj = UserQuizOption.objects.create(
                    quiz=quiz,
                    content=option,
                    is_correct=(i == int(data['correctAnswer']))
                )
                print(f"Created option {i}:", option_obj)
            
            return JsonResponse({'status': 'success', 'message': '문제가 성공적으로 등록되었습니다.'})
        except Exception as e:
            print("Error:", str(e))
            import traceback
            print("Traceback:", traceback.format_exc())
            return JsonResponse({'status': 'error', 'message': str(e)}, status=400)
    
    return JsonResponse({'status': 'error', 'message': '잘못된 요청입니다.'}, status=400)

@login_required
def user_quizzes(request):
    # 모든 사용자가 만든 문제를 가져오기
    quizzes = UserQuiz.objects.all().order_by('-created_at')
    
    # 카테고리별로 퀴즈 그룹화
    quizzes_by_category = {}
    difficulty_order = {'easy': 0, 'medium': 1, 'hard': 2}  # 난이도 정렬 순서 정의
    
    for quiz in quizzes:
        category_display = quiz.get_category_display()
        if category_display not in quizzes_by_category:
            quizzes_by_category[category_display] = []
        quizzes_by_category[category_display].append(quiz)
    
    # 각 카테고리 내에서 난이도 순으로 정렬
    for category in quizzes_by_category:
        quizzes_by_category[category].sort(key=lambda x: difficulty_order[x.difficulty])
    
    return render(request, 'accounts/user_quizzes.html', {'quizzes_by_category': quizzes_by_category})

@login_required
def get_quiz(request, quiz_id):
    try:
        quiz = UserQuiz.objects.get(id=quiz_id)
        options = quiz.options.all()
        return JsonResponse({
            'question': quiz.question,
            'category': quiz.get_category_display(),
            'difficulty': quiz.get_difficulty_display(),
            'options': [{'content': option.content} for option in options]
        })
    except UserQuiz.DoesNotExist:
        return JsonResponse({'error': '퀴즈를 찾을 수 없습니다.'}, status=404)

@login_required
def submit_answer(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            quiz_id = data.get('quiz_id')
            user_answer = int(data.get('answer'))
            
            quiz = UserQuiz.objects.get(id=quiz_id)
            correct_option = quiz.options.filter(is_correct=True).first()
            user_answer_text = list(quiz.options.all())[user_answer].content
            
            is_correct = user_answer == list(quiz.options.all()).index(correct_option)
            
            # 퀴즈 결과 저장
            QuizResult.objects.create(
                user=request.user,
                category=quiz.get_category_display(),
                difficulty=quiz.get_difficulty_display(),
                score=1 if is_correct else 0,
                total=1,
                question=quiz.question,
                user_answer=user_answer_text,
                correct_answer=correct_option.content
            )
            
            return JsonResponse({
                'correct': is_correct,
                'correct_answer': correct_option.content
            })
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=400)
    return JsonResponse({'error': '잘못된 요청입니다.'}, status=400)

def index_view(request):
    return render(request, 'accounts/index.html')


@login_required
def ranking_view(request):
    category = request.GET.get('category', 'it')
    difficulty = request.GET.get('difficulty', 'easy')

    top_scores = (
        QuizResult.objects
        .filter(category=category, difficulty=difficulty)
        .annotate(
            best_score=Max('score'),
            best_time=Min('duration')  # 같은 점수일 때 빠른 사람
        )
        .order_by('-best_score', 'best_time')[:10]
    )

    CATEGORY_DISPLAY = {
    'it': 'IT',
    'history': '역사',
    'sports': '스포츠',
    'commonSense': '상식',
    'proverb': '속담',
    'literature' : '문학',
    'art' : '예술',
    'economy' : '경제'
    }

    DIFFICULTY_DISPLAY = {
    'easy': '이지',
    'medium': '노말',
    'hard': '하드'
    }

    return render(request, 'quiz/ranking.html', {
    'top_scores': top_scores,
    'category': category,
    'difficulty': difficulty,
    'category_name': CATEGORY_DISPLAY.get(category, category),
    'difficulty_name': DIFFICULTY_DISPLAY.get(difficulty, difficulty)
})