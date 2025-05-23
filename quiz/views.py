# [파일 설명]
# 퀴즈 결과 저장, 퀴즈 기록 조회 기능을 처리하는 뷰 함수들이 정의됨.

# quiz/views.py

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
            data = json.loads(request.body)
            print("받은 데이터:", data)
            
            category = data.get('category')
            difficulty = data.get('difficulty')
            score = int(data.get('score'))
            total = int(data.get('total'))
            question = data.get('question', '')
            user_answer = data.get('user_answer', '')
            correct_answer = data.get('correct_answer', '')

            print("\n저장할 데이터 상세:")
            print(f"카테고리: {category}")
            print(f"난이도: {difficulty}")
            print(f"점수: {score}")
            print(f"총 문제 수: {total}")
            print(f"문제: {question}")
            print(f"사용자 답변: {user_answer}")
            print(f"정답: {correct_answer}")

            quiz_result = QuizResult.objects.create(
                user=request.user,
                category=category,
                difficulty=difficulty,
                score=score,
                total=total,
                question=question,
                user_answer=user_answer,
                correct_answer=correct_answer
            )

            print(f"\n저장된 결과 ID: {quiz_result.id}")
            print("=== 퀴즈 결과 저장 완료 ===\n")

            return JsonResponse({
                'status': 'success',
                'message': '퀴즈 결과가 저장되었습니다.',
                'result_id': quiz_result.id
            })
        except Exception as e:
            print("\n=== 퀴즈 결과 저장 실패 ===")
            print(f"에러 발생: {str(e)}")
            import traceback
            print("상세 에러:", traceback.format_exc())
            print("=== 퀴즈 결과 저장 실패 ===\n")
            return JsonResponse({
                'status': 'error',
                'message': str(e)
            }, status=400)
    return JsonResponse({
        'status': 'error',
        'message': '잘못된 요청입니다.'
    }, status=400)
    
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