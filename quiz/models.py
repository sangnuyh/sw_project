# [파일 설명]
# 사용자의 퀴즈 결과를 저장하는 QuizResult 모델 정의 파일.

from django.db import models
from django.contrib.auth.models import User

class QuizResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    category = models.CharField(max_length=100)
    difficulty = models.CharField(max_length=50)
    score = models.IntegerField()
    total = models.IntegerField()
    played_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.category} ({self.score}/{self.total})"
