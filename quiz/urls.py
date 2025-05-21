# [파일 설명]
# 퀴즈 관련 API(결과 저장, 결과 조회 등)의 URL 패턴을 정의.

# quiz/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('save_result/', views.save_quiz_result, name='save_result'),
    path('my_results/', views.my_results, name='my_results'),  # 추가
]
