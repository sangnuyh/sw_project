# accounts/forms.py
# [파일 설명]
# 한글화를 위한 코드
# 사용자 입력을 위한 커스텀 폼을 정의하는 파일. (현재 기본 UserCreationForm 등 활용 가능)

from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User

class CustomUserCreationForm(UserCreationForm):
    username = forms.CharField(label="아이디")
    password1 = forms.CharField(label="비밀번호", widget=forms.PasswordInput)
    password2 = forms.CharField(label="비밀번호 확인", widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ("username",)

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self.error_messages.update({
            'password_mismatch': '비밀번호가 일치하지 않습니다.',
        })
