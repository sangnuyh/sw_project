# [파일 설명]
# 사용자 로그인, 회원가입, 로그아웃 기능을 처리하는 뷰 함수들이 정의되어 있음.

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import CustomUserCreationForm # 한글화된 새로운 폼 사용
from django.http import JsonResponse
from .models import QuizHistory
from django.db.models import Count
from django.db.models.functions import TruncDate

# 회원가입
def signup(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = CustomUserCreationForm()
    return render(request, 'accounts/signup.html', {'form': form})

# 로그인
def login_view(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            return redirect('home') 
        else:
            return render(request, 'accounts/login.html', {'error': '아이디 또는 비밀번호가 올바르지 않습니다다'})
    return render(request, 'accounts/login.html')

# 로그아웃
def logout_view(request):
    logout(request)
    return redirect('index')

def index(request):
    return render(request, 'accounts/index.html')

@login_required
def save_quiz_result(request):
    if request.method == 'POST':
        data = request.POST
        QuizHistory.objects.create(
            user=request.user,
            category=data.get('category'),
            difficulty=data.get('difficulty'),
            question=data.get('question'),
            user_answer=data.get('user_answer'),
            correct_answer=data.get('correct_answer'),
            is_correct=data.get('is_correct') == 'true'
        )
        return JsonResponse({'status': 'success'})
    return JsonResponse({'status': 'error'}, status=400)

@login_required
def my_quiz_history(request):
    # 카테고리별 통계
    category_stats = QuizHistory.objects.filter(user=request.user).values('category').annotate(
        total=Count('id'),
        correct=Count('id', filter=models.Q(is_correct=True))
    ).order_by('category')

    # 최근 퀴즈 기록
    recent_quizzes = QuizHistory.objects.filter(user=request.user).order_by('-created_at')[:10]

    # 날짜별 통계
    daily_stats = QuizHistory.objects.filter(user=request.user).annotate(
        date=TruncDate('created_at')
    ).values('date').annotate(
        total=Count('id'),
        correct=Count('id', filter=models.Q(is_correct=True))
    ).order_by('-date')[:7]

    context = {
        'category_stats': category_stats,
        'recent_quizzes': recent_quizzes,
        'daily_stats': daily_stats,
    }
    return render(request, 'accounts/my_quiz_history.html', context)

