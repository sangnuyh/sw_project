# quiz/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .models import QuizResult

@login_required
def save_quiz_result(request):
    if request.method == 'POST':
        category = request.POST.get('category')
        difficulty = request.POST.get('difficulty')
        score = int(request.POST.get('score'))
        total = int(request.POST.get('total'))

        QuizResult.objects.create(
            user=request.user,
            category=category,
            difficulty=difficulty,
            score=score,
            total=total
        )

        return redirect('home')  # 퀴즈 끝난 후 이동할 페이지
    else:
        return redirect('home')
    
@login_required
def my_results(request):
    results = QuizResult.objects.filter(user=request.user).order_by('-played_at')
    return render(request, 'quiz/my_results.html', {'results': results})