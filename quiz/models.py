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
    question = models.TextField(default='')
    user_answer = models.TextField(default='')
    correct_answer = models.TextField(default='')

    def __str__(self):
        return f"{self.user.username} - {self.category} ({self.score}/{self.total})"

class Category(models.Model):
    name = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.name

class Question(models.Model):
    DIFFICULTY_CHOICES = [
        ('E', '이지'),
        ('N', '노말'),
        ('H', '하드'),
    ]
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    difficulty = models.CharField(max_length=1, choices=DIFFICULTY_CHOICES)
    text = models.TextField()
    explanation = models.TextField()

    def __str__(self):
        return f"{self.category} {self.get_difficulty_display()}"

class Choice(models.Model):
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='choices')
    text = models.CharField(max_length=200)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text

class UserQuiz(models.Model):
    DIFFICULTY_CHOICES = [
        ('easy', '쉬움'),
        ('medium', '보통'),
        ('hard', '어려움'),
    ]
    
    CATEGORY_CHOICES = [
        ('it', 'IT'),
        ('sports', '스포츠'),
        ('literature', '문학'),
        ('art', '예술'),
        ('economy', '경제'),
        ('proverb', '속담/사자성어'),
        ('history', '역사'),
        ('commonSense', '상식'),
    ]

    creator = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_quizzes')
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    difficulty = models.CharField(max_length=10, choices=DIFFICULTY_CHOICES)
    question = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.creator.username}의 {self.get_category_display()} 문제"

class UserQuizOption(models.Model):
    quiz = models.ForeignKey(UserQuiz, on_delete=models.CASCADE, related_name='options')
    content = models.TextField()
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.quiz.question}의 보기: {self.content}"