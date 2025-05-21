# accounts/urls.py
# [파일 설명]
# accounts 앱의 URL 라우팅을 정의. login, signup, logout 경로 포함.

from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('login/', views.login_view, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('signup/', views.signup_view, name='signup'),
]
