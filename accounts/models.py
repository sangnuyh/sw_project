# [파일 설명]
# 사용자 관련 모델 정의 공간. (현재 기본 User 모델 사용 중이라 비어있을 수 있음)

from django.db import models
from django.contrib.auth.models import User

class QuizHistory(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=20)
    question = models.TextField()
    user_answer = models.CharField(max_length=200)
    correct_answer = models.CharField(max_length=200)
    is_correct = models.BooleanField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.username} - {self.category} - {self.created_at}"
