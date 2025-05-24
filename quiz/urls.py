# [파일 설명]
# 퀴즈 관련 API(결과 저장, 결과 조회 등)의 URL 패턴을 정의.

# quiz/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('save_result/', views.save_quiz_result, name='save_quiz_result'),
    path('my_results/', views.my_results, name='my_results'),  # 추가
    path('create_user_quiz/', views.create_user_quiz, name='create_user_quiz'),
    path('get_quiz/<int:quiz_id>/', views.get_quiz, name='get_quiz'),
    path('submit_answer/', views.submit_answer, name='submit_answer'),
    path('ranking/', views.ranking_view, name = 'ranking'),
    path('', views.index_view, name='index'),
]
