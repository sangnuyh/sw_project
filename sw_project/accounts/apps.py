# [파일 설명]
# accounts 앱 설정 클래스 정의. Django가 앱을 인식할 때 사용하는 설정.

from django.apps import AppConfig


class AccountsConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'accounts'
