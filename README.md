[Django 종합 퀴즈 앱 - DB 심지승 담당]

📌 현재까지 구현된 기능
1. Django 기반 회원가입 / 로그인 / 로그아웃 기능 구현 완료 (accounts 앱)
2. 로그인한 사용자가 퀴즈를 푼 결과를 DB에 저장할 수 있도록 백엔드 뷰 구성 완료
3. 퀴즈 결과는 QuizResult 모델에 저장됨 (카테고리, 난이도, 점수, 날짜 포함)
4. 로그인한 사용자는 /quiz/my_results/ 에서 본인의 퀴즈 기록 확인 가능

- home.html은 현재 임시로 로그인 후 이동하는 웹페이지를 만든 것 입니다. account/views.py 의 맨 및에 있는 코드의 return값을 로그인 후 이동할 페이지로 지정해주시면 됩니다.

📎 백엔드 저장용 API 정보 (JS와 연동 필요)
- URL: /quiz/save_result/
- Method: POST
- Required Fields:
  - category (str): ex) "it"
  - difficulty (str): ex) "easy"
  - score (int)
  - total (int)
- Notes: 로그인 필수 / 비로그인 시 홈으로 리디렉션

📄 QuizResult 모델 정보
- 위치: quiz/models.py
- 구조:
    class QuizResult(models.Model):
        user = models.ForeignKey(User, on_delete=models.CASCADE)
        category = models.CharField(max_length=100)
        difficulty = models.CharField(max_length=50)
        score = models.IntegerField()
        total = models.IntegerField()
        played_at = models.DateTimeField(auto_now_add=True)

👀 사용자 기록 보기 기능 (나중에 퀴즈관련 코드를 통해 연결 필요)
- URL: /quiz/my_results/
- 템플릿: templates/quiz/my_results.html
- 정렬: played_at 기준 내림차순

⚠️ 현재 JS 연동 상태
- 퀴즈 결과를 백엔드로 전송하는 기능은 아직 구현되지 않음
- JS 개발자가 결과를 저장하는 API에 POST 요청해야 DB에 기록됨
