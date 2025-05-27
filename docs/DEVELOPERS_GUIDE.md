# 👨‍💻 개발자 가이드

## 1. 실행 환경
- Python 3.10 이상
- Django 5.2.1
- SQLite3 사용

## 2. 프로젝트 구조
| 앱 | 설명 |
|----|------|
| accounts | 사용자 로그인/회원가입 |
| quiz     | 문제 데이터, 결과 저장 |
| config   | Django 전체 설정 |
| static   | 정적 요소 집합 (css, js, audio) |
| docs     | 관리자, 이용자 md  |

## 3. 주요 경로
- `/accounts/login/` → 로그인
- `/quiz/save_result/` → 결과 저장 (POST)
- `/user_quizzes/` → 사용자 문제 목록
- `/accounts/index/` → 메인 화면

## 4. 기여 방법
- main 브랜치 → 절대 직접 push 금지
- 기능 단위 브랜치 생성 후 PR 요청
