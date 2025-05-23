### 🎯 종합 퀴즈 웹 서비스

## 개요
Django 기반의 카테고리별 퀴즈 시스템

## 주요 기능
- 회원가입 및 로그인
- 카테고리/난이도 기반 문제
- 퀴즈 결과 저장 및 기록 확인
- 사용자 설정 (BGM, 효과음)
- 사용자 지정 문제 모드

## 팀원
| 이름 | 역할 |
|------|------|
| 남상현 | JS 로직, 문제 구성 |
| 심지승 | DB, 회원/결과 기능 |
| 최예도 | 디자인 및 UI |
| 이연주 | 관리자 기능, 발표 |

## 실행 방법
```bash
git clone ...
cd sw_project
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
