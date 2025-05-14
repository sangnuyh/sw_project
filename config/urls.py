# config/urls.py

from django.contrib import admin
from django.urls import path, include
from accounts import views as accounts_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('accounts.urls')),
    path('quiz/', include('quiz.urls')),
    path('', accounts_views.home, name='home'),  # ✅ home 뷰로 연결
]