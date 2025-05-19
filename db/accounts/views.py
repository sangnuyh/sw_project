# [파일 설명]
# 사용자 로그인, 회원가입, 로그아웃 기능을 처리하는 뷰 함수들이 정의되어 있음.

from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from .forms import CustomUserCreationForm # 한글화된 새로운 폼 사용

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
    return redirect('login')

@login_required
def home(request):
    return render(request, 'accounts/home.html')
