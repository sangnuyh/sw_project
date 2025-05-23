# [파일 설명]
# 퀴즈 결과 저장, 퀴즈 기록 조회 기능을 처리하는 뷰 함수들이 정의됨.

# quiz/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from django.http import JsonResponse
from .models import QuizResult

@login_required
def save_quiz_result(request):
    if request.method == 'POST':
        try:
            category = request.POST.get('category')
            difficulty = request.POST.get('difficulty')
            score = int(request.POST.get('score'))
            total = int(request.POST.get('total'))

            quiz_result = QuizResult.objects.create(
                user=request.user,
                category=category,
                difficulty=difficulty,
                score=score,
                total=total
            )

            return JsonResponse({
                'status': 'success',
                'message': '퀴즈 결과가 저장되었습니다.',
                'result_id': quiz_result.id
            })
        except Exception as e:
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
    results = QuizResult.objects.filter(user=request.user).order_by('-played_at')
    return render(request, 'quiz/my_results.html', {'results': results})