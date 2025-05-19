# [파일 설명]
# 배포 시 사용되는 웹 서버용 진입점 (WSGI). 주로 Gunicorn, uWSGI 등이 사용.
# 따로 코딩 x

"""
WSGI config for config project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/5.2/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'config.settings')

application = get_wsgi_application()
