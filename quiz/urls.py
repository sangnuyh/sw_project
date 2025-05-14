# quiz/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('save_result/', views.save_quiz_result, name='save_result'),
    path('my_results/', views.my_results, name='my_results'),  # 추가
]
