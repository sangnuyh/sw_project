# config/urls.py
# [파일 설명]
# 프로젝트 전역의 URL 패턴을 정의. 각 앱의 urls.py와 연결함.

from django.contrib import admin
from django.urls import path, include
from accounts import views as accounts_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('quiz/', include('quiz.urls')),
    path('', accounts_views.home, name='home'),  # ✅ home 뷰로 연결
]