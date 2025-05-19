const quizData = {
  it: [
    {
      question: "컴퓨터에서 데이터를 저장하는 장치는 무엇인가?",
      options: ["CPU", "RAM", "하드 디스크", "모니터"],
      answer: "하드 디스크",
      difficulty: "easy"
    },
    {
      question: "인터넷에서 웹 페이지를 검색하는 프로그램은?",
      options: ["웹 브라우저", "스프레드시트", "워드 프로세서", "데이터베이스"],
      answer: "웹 브라우저",
      difficulty: "easy"
    },
    {
      question: "엑셀에서 셀에 데이터를 입력할 때 사용하는 키는?",
      options: ["Enter", "Shift", "Ctrl", "Alt"],
      answer: "Enter",
      difficulty: "easy"
    },
    {
      question: "운영체제의 주요 기능 중 하나는?",
      options: ["하드웨어 관리", "그래픽 디자인", "게임 실행", "음악 재생"],
      answer: "하드웨어 관리",
      difficulty: "easy"
    },
    {
      question: "네트워크에서 컴퓨터를 식별하는 고유한 주소는?",
      options: ["IP 주소", "웹 주소", "이메일 주소", "전화번호"],
      answer: "IP 주소",
      difficulty: "easy"
    },
    {
      question: "데이터베이스에서 데이터를 저장하는 기본 단위는?",
      options: ["필드", "레코드", "테이블", "쿼리"],
      answer: "테이블",
      difficulty: "easy"
    },
    {
      question: "프로그래밍에서 변수를 선언하는 목적은?",
      options: ["데이터 저장", "화면 출력", "키보드 입력", "파일 삭제"],
      answer: "데이터 저장",
      difficulty: "easy"
    },
    {
      question: "엑셀에서 셀의 값을 더하는 함수는?",
      options: ["SUM", "AVERAGE", "COUNT", "MAX"],
      answer: "SUM",
      difficulty: "easy"
    },
    {
      question: "컴퓨터에서 파일을 저장할 때 사용하는 장치는?",
      options: ["키보드", "마우스", "하드 디스크", "프린터"],
      answer: "하드 디스크",
      difficulty: "easy"
    },
    {
      question: "인터넷에서 정보를 검색하는 데 사용하는 것은?",
      options: ["검색 엔진", "스프레드시트", "워드 프로세서", "프레젠테이션"],
      answer: "검색 엔진",
      difficulty: "easy"
    },
    {
      question: "운영체제의 예는?",
      options: ["Windows", "Photoshop", "Excel", "Chrome"],
      answer: "Windows",
      difficulty: "easy"
    },
    {
      question: "네트워크에서 데이터를 전송하는 단위는?",
      options: ["패킷", "바이트", "비트", "킬로바이트"],
      answer: "패킷",
      difficulty: "easy"
    },
    {
      question: "데이터베이스에서 데이터를 검색하는 명령어는?",
      options: ["SELECT", "INSERT", "UPDATE", "DELETE"],
      answer: "SELECT",
      difficulty: "easy"
    },
    {
      question: "프로그래밍에서 반복 작업을 수행하는 구조는?",
      options: ["루프", "조건", "함수", "클래스"],
      answer: "루프",
      difficulty: "easy"
    },
    {
      question: "엑셀에서 그래프를 만드는 메뉴는?",
      options: ["삽입", "홈", "페이지 레이아웃", "데이터"],
      answer: "삽입",
      difficulty: "easy"
    },
    {
      question: "컴퓨터에서 소리를 출력하는 장치는?",
      options: ["스피커", "키보드", "마우스", "모니터"],
      answer: "스피커",
      difficulty: "easy"
    },
    {
      question: "인터넷에서 파일을 다운로드하는 방법은?",
      options: ["링크 클릭", "파일 저장", "파일 열기", "파일 삭제"],
      answer: "링크 클릭",
      difficulty: "easy"
    },
    {
      question: "운영체제에서 프로그램을 실행하는 방법은?",
      options: ["아이콘 더블 클릭", "키보드 입력", "마우스 클릭", "모니터 터치"],
      answer: "아이콘 더블 클릭",
      difficulty: "easy"
    },
    {
      question: "네트워크에서 무선으로 연결하는 기술은?",
      options: ["Wi-Fi", "Bluetooth", "이더넷", "USB"],
      answer: "Wi-Fi",
      difficulty: "easy"
    },
    {
      question: "데이터베이스에서 데이터를 추가하는 명령어는?",
      options: ["INSERT", "SELECT", "UPDATE", "DELETE"],
      answer: "INSERT",
      difficulty: "easy"
    },
    {
      question: "프로그래밍에서 오류를 수정하는 과정은?",
      options: ["디버깅", "컴파일", "링크", "실행"],
      answer: "디버깅",
      difficulty: "easy"
    },
    {
      question: "엑셀에서 셀의 테두리를 설정하는 메뉴는?",
      options: ["홈", "삽입", "페이지 레이아웃", "데이터"],
      answer: "홈",
      difficulty: "easy"
    },
    {
      question: "컴퓨터에서 문서를 작성하는 프로그램은?",
      options: ["워드 프로세서", "스프레드시트", "데이터베이스", "프레젠테이션"],
      answer: "워드 프로세서",
      difficulty: "easy"
    },
    {
      question: "인터넷에서 웹 페이지의 주소를 나타내는 것은?",
      options: ["URL", "IP 주소", "이메일 주소", "전화번호"],
      answer: "URL",
      difficulty: "easy"
    },
    {
      question: "운영체제에서 파일을 관리하는 폴더의 다른 이름은?",
      options: ["디렉토리", "라이브러리", "아카이브", "패키지"],
      answer: "디렉토리",
      difficulty: "easy"
    },
    {
      question: "네트워크에서 데이터를 암호화하는 이유는?",
      options: ["보안 강화", "속도 향상", "용량 감소", "호환성 증가"],
      answer: "보안 강화",
      difficulty: "easy"
    },
    {
      question: "데이터베이스에서 테이블의 열을 나타내는 것은?",
      options: ["필드", "레코드", "쿼리", "폼"],
      answer: "필드",
      difficulty: "easy"
    },
    {
      question: "프로그래밍에서 데이터를 일시적으로 저장하는 메모리는?",
      options: ["RAM", "ROM", "하드 디스크", "SSD"],
      answer: "RAM",
      difficulty: "easy"
    },
    {
      question: "엑셀에서 셀의 값을 평균하는 함수는?",
      options: ["AVERAGE", "SUM", "COUNT", "MIN"],
      answer: "AVERAGE",
      difficulty: "easy"
    },
    {
      question: "컴퓨터에서 화면에 정보를 표시하는 장치는?",
      options: ["모니터", "키보드", "마우스", "프린터"],
      answer: "모니터",
      difficulty: "easy"
    },
    {
      question: "데이터베이스에서 정규화의 주요 목적은 무엇인가?",
      options: ["데이터 중복 제거", "데이터 암호화", "데이터 압축", "데이터 백업"],
      answer: "데이터 중복 제거",
      difficulty: "medium"
    },
    {
      question: "SQL에서 두 테이블을 결합하기 위해 사용하는 기본 연산은?",
      options: ["SELECT", "JOIN", "GROUP BY", "ORDER BY"],
      answer: "JOIN",
      difficulty: "medium"
    },
    {
      question: "TCP/IP 프로토콜에서 포트 번호의 역할은?",
      options: ["데이터 암호화", "패킷 분할", "프로세스 식별", "경로 설정"],
      answer: "프로세스 식별",
      difficulty: "medium"
    },
    {
      question: "엑셀에서 셀 A1부터 A10까지의 합을 구하는 함수는?",
      options: ["SUM(A1:A10)", "AVERAGE(A1:A10)", "COUNT(A1:A10)", "MAX(A1:A10)"],
      answer: "SUM(A1:A10)",
      difficulty: "medium"
    },
    {
      question: "운영체제에서 프로세스가 CPU를 점유할 수 있는 상태는?",
      options: ["대기 상태", "실행 상태", "준비 상태", "종료 상태"],
      answer: "실행 상태",
      difficulty: "medium"
    },
    {
      question: "C 언어에서 변수의 값을 교환하기 위해 사용하는 임시 변수의 역할은?",
      options: ["값 저장", "포인터 참조", "메모리 할당", "데이터 압축"],
      answer: "값 저장",
      difficulty: "medium"
    },
    {
      question: "네트워크에서 IP 주소의 클래스 B 범위는?",
      options: ["1~126", "128~191", "192~223", "224~255"],
      answer: "128~191",
      difficulty: "medium"
    },
    {
      question: "MS 워드에서 페이지 여백을 설정하는 메뉴는?",
      options: ["서식", "페이지 레이아웃", "삽입", "검토"],
      answer: "페이지 레이아웃",
      difficulty: "medium"
    },
    {
      question: "파일 시스템에서 FAT32의 최대 파티션 크기는?",
      options: ["2TB", "4GB", "32GB", "16TB"],
      answer: "2TB",
      difficulty: "medium"
    },
    {
      question: "파이썬에서 리스트의 마지막 요소를 제거하는 메서드는?",
      options: ["append()", "pop()", "remove()", "clear()"],
      answer: "pop()",
      difficulty: "medium"
    },
    {
      question: "정보처리기능사 시험에서 다루는 전자계산기의 기본 구성 요소 중 하나는?",
      options: ["연산장치", "냉각장치", "출력장치", "저장장치"],
      answer: "연산장치",
      difficulty: "medium"
    },
    {
      question: "엑셀에서 조건에 따라 값을 반환하는 함수는?",
      options: ["IF", "VLOOKUP", "SUMIF", "COUNTIF"],
      answer: "IF",
      difficulty: "medium"
    },
    {
      question: "네트워크에서 MAC 주소는 어떤 계층에서 사용되는가?",
      options: ["애플리케이션 계층", "데이터 링크 계층", "네트워크 계층", "전송 계층"],
      answer: "데이터 링크 계층",
      difficulty: "medium"
    },
    {
      question: "운영체제에서 스케줄링의 목적은?",
      options: ["CPU 사용 효율 극대화", "메모리 용량 증가", "디스크 속도 향상", "네트워크 대역폭 확장"],
      answer: "CPU 사용 효율 극대화",
      difficulty: "medium"
    },
    {
      question: "HTML에서 하이퍼링크를 생성하는 태그는?",
      options: ["<img>", "<a>", "<div>", "<p>"],
      answer: "<a>",
      difficulty: "medium"
    },
    {
      question: "데이터베이스에서 트랜잭션의 ACID 속성 중 '원자성'은 무엇을 의미하는가?",
      options: ["모든 작업이 완료되거나 전혀 실행되지 않음", "데이터 무결성 유지", "동시 접근 제어", "영구적 저장 보장"],
      answer: "모든 작업이 완료되거나 전혀 실행되지 않음",
      difficulty: "medium"
    },
    {
      question: "MS 파워포인트에서 슬라이드 전환 효과를 설정하는 메뉴는?",
      options: ["디자인", "전환", "애니메이션", "슬라이드 쇼"],
      answer: "전환",
      difficulty: "medium"
    },
    {
      question: "C++에서 객체 지향 프로그래밍의 주요 특징은?",
      options: ["캡슐화", "순차 처리", "병렬 처리", "절차 지향"],
      answer: "캡슐화",
      difficulty: "medium"
    },
    {
      question: "네트워크에서 방화벽의 주요 기능은?",
      options: ["데이터 암호화", "트래픽 모니터링 및 제어", "IP 주소 할당", "파일 압축"],
      answer: "트래픽 모니터링 및 제어",
      difficulty: "medium"
    },
    {
      question: "엑셀에서 특정 조건을 만족하는 셀의 개수를 세는 함수는?",
      options: ["SUMIF", "COUNTIF", "AVERAGEIF", "MAXIF"],
      answer: "COUNTIF",
      difficulty: "medium"
    },
    {
      question: "운영체제에서 데드락을 방지하기 위한 방법은?",
      options: ["자원 선점 불가 조건 제거", "메모리 용량 증가", "프로세스 종료", "디스크 백업"],
      answer: "자원 선점 불가 조건 제거",
      difficulty: "medium"
    },
    {
      question: "파이썬에서 파일을 읽기 모드로 여는 함수는?",
      options: ["open('file.txt', 'w')", "open('file.txt', 'r')", "open('file.txt', 'a')", "open('file.txt', 'x')"],
      answer: "open('file.txt', 'r')",
      difficulty: "medium"
    },
    {
      question: "정보기기운용기능사 시험에서 다루는 컴퓨터 보안의 주요 요소는?",
      options: ["기밀성", "가용성", "무결성", "모두 포함"],
      answer: "모두 포함",
      difficulty: "medium"
    },
    {
      question: "HTML에서 표를 생성하는 태그는?",
      options: ["<table>", "<form>", "<list>", "<grid>"],
      answer: "<table>",
      difficulty: "medium"
    },
    {
      question: "데이터베이스에서 인덱스를 사용하는 주요 이유는?",
      options: ["데이터 검색 속도 향상", "데이터 암호화", "데이터 압축", "데이터 백업"],
      answer: "데이터 검색 속도 향상",
      difficulty: "medium"
    },
    {
      question: "MS 워드에서 단락 간격을 조정하는 메뉴는?",
      options: ["홈", "삽입", "페이지 레이아웃", "보기"],
      answer: "홈",
      difficulty: "medium"
    },
    {
      question: "네트워크에서 DHCP 서버의 역할은?",
      options: ["도메인 이름 변환", "IP 주소 자동 할당", "데이터 암호화", "트래픽 라우팅"],
      answer: "IP 주소 자동 할당",
      difficulty: "medium"
    },
    {
      question: "C 언어에서 포인터를 선언하는 기호는?",
      options: ["&", "*", "#", "@"],
      answer: "*",
      difficulty: "medium"
    },
    {
      question: "엑셀에서 특정 값을 검색하여 해당 행의 데이터를 반환하는 함수는?",
      options: ["VLOOKUP", "SUMIF", "COUNTIF", "AVERAGE"],
      answer: "VLOOKUP",
      difficulty: "medium"
    },
    {
      question: "운영체제에서 가상 메모리의 주요 목적은?",
      options: ["물리적 메모리 용량 확장", "CPU 속도 향상", "디스크 용량 증가", "네트워크 속도 개선"],
      answer: "물리적 메모리 용량 확장",
      difficulty: "medium"
    },
    //hard
    {
      "question": "데이터베이스에서 3NF(제3정규형)를 만족하기 위한 조건은 무엇인가?",
      "options": [
        "모든 비주요 속성이 기본 키에 완전 함수 종속되어야 한다",
        "기본 키가 아닌 속성 간에 함수 종속성이 없어야 한다",
        "모든 속성이 기본 키에 직접 종속되어야 한다",
        "테이블에 중복된 데이터가 없어야 한다"
      ],
      "answer": "기본 키가 아닌 속성 간에 함수 종속성이 없어야 한다",
      "difficulty": "hard"
    },
    {
      "question": "네트워크에서 OSPF(Open Shortest Path First) 프로토콜의 주요 특징은 무엇인가?",
      "options": [
        "거리 벡터 라우팅",
        "링크 상태 라우팅",
        "정적 라우팅",
        "경로 벡터 라우팅"
      ],
      "answer": "링크 상태 라우팅",
      "difficulty": "hard"
    },
    {
      "question": "프로그래밍에서 해시 테이블의 평균 시간 복잡도는 무엇인가?",
      "options": [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      "answer": "O(1)",
      "difficulty": "hard"
    },
    {
      "question": "운영체제에서 뮤텍스(Mutex)와 세마포어(Semaphore)의 차이점은 무엇인가?",
      "options": [
        "뮤텍스는 이진 세마포어와 동일하다",
        "세마포어는 뮤텍스보다 더 많은 프로세스를 제어할 수 있다",
        "뮤텍스는 상호 배제를 위한 것이고, 세마포어는 동기화를 위한 것이다",
        "세마포어는 뮤텍스보다 더 복잡한 자원 관리를 할 수 있다"
      ],
      "answer": "뮤텍스는 상호 배제를 위한 것이고, 세마포어는 동기화를 위한 것이다",
      "difficulty": "hard"
    },
    {
      "question": "엑셀에서 피벗 테이블을 사용하여 데이터를 분석할 때, '계산된 필드'의 기능은 무엇인가?",
      "options": [
        "기존 필드의 값을 합산한다",
        "새로운 필드를 생성하여 사용자 정의 계산을 수행한다",
        "데이터를 필터링한다",
        "데이터를 정렬한다"
      ],
      "answer": "새로운 필드를 생성하여 사용자 정의 계산을 수행한다",
      "difficulty": "hard"
    },
    {
      "question": "보안에서 '제로 데이 공격'이란 무엇을 의미하는가?",
      "options": [
        "공격자가 0일 동안 공격을 준비하는 것",
        "취약점이 발견된 후 패치가 나오기 전에 이루어지는 공격",
        "하루 동안 지속되는 공격",
        "공격이 시작된 후 0일 이내에 방어하는 것"
      ],
      "answer": "취약점이 발견된 후 패치가 나오기 전에 이루어지는 공격",
      "difficulty": "hard"
    },
    {
      "question": "데이터베이스에서 트랜잭션의 ACID 속성 중 '고립성(Isolation)'은 무엇을 보장하는가?",
      "options": [
        "트랜잭션이 완전히 실행되거나 전혀 실행되지 않음",
        "트랜잭션의 결과가 영구적으로 저장됨",
        "동시에 실행되는 트랜잭션이 서로 영향을 주지 않음",
        "데이터가 일관된 상태를 유지함"
      ],
      "answer": "동시에 실행되는 트랜잭션이 서로 영향을 주지 않음",
      "difficulty": "hard"
    },
    {
      "question": "네트워크에서 VPN(Virtual Private Network)의 주요 목적은 무엇인가?",
      "options": [
        "공용 네트워크를 통해 안전한 통신을 제공",
        "네트워크 속도를 향상",
        "네트워크 대역폭을 증가",
        "네트워크 장비를 관리"
      ],
      "answer": "공용 네트워크를 통해 안전한 통신을 제공",
      "difficulty": "hard"
    },
    {
      "question": "프로그래밍에서 '싱글톤 패턴'의 주요 특징은 무엇인가?",
      "options": [
        "클래스의 인스턴스가 하나만 생성되도록 보장",
        "다중 스레드 환경에서 안전한 실행",
        "객체 간의 결합도를 낮춤",
        "코드의 재사용성을 높임"
      ],
      "answer": "클래스의 인스턴스가 하나만 생성되도록 보장",
      "difficulty": "hard"
    },
    {
      "question": "운영체제에서 '페이지 교체 알고리즘'의 목적은 무엇인가?",
      "options": [
        "메모리에서 페이지를 제거하여 공간을 확보",
        "프로세스 간의 통신을 관리",
        "파일 시스템의 성능을 최적화",
        "CPU 스케줄링을 관리"
      ],
      "answer": "메모리에서 페이지를 제거하여 공간을 확보",
      "difficulty": "hard"
    },
    {
      "question": "엑셀에서 '매크로'를 사용하는 주요 이유는 무엇인가?",
      "options": [
        "반복적인 작업을 자동화",
        "데이터를 시각화",
        "셀의 서식을 변경",
        "데이터를 정렬"
      ],
      "answer": "반복적인 작업을 자동화",
      "difficulty": "hard"
    },
    {
      "question": "보안에서 '사회 공학(Social Engineering)' 공격의 특징은 무엇인가?",
      "options": [
        "기술적 취약점을 이용한 공격",
        "인간의 심리를 이용하여 정보를 탈취",
        "네트워크를 통한 무차별 대입 공격",
        "악성 코드를 이용한 시스템 침입"
      ],
      "answer": "인간의 심리를 이용하여 정보를 탈취",
      "difficulty": "hard"
    },
    {
      "question": "데이터베이스에서 '인덱스'의 주요 장점은 무엇인가?",
      "options": [
        "데이터 검색 속도 향상",
        "데이터 저장 공간 절약",
        "데이터 무결성 보장",
        "트랜잭션 처리 속도 향상"
      ],
      "answer": "데이터 검색 속도 향상",
      "difficulty": "hard"
    },
    {
      "question": "네트워크에서 'NAT(Network Address Translation)'의 기능은 무엇인가?",
      "options": [
        "내부 IP 주소를 외부 IP 주소로 변환",
        "데이터를 암호화",
        "네트워크 트래픽을 모니터링",
        "네트워크 장비를 관리"
      ],
      "answer": "내부 IP 주소를 외부 IP 주소로 변환",
      "difficulty": "hard"
    },
    {
      "question": "프로그래밍에서 '재귀 함수'의 주요 특징은 무엇인가?",
      "options": [
        "자기 자신을 호출하는 함수",
        "반복문을 사용하는 함수",
        "다중 스레드를 사용하는 함수",
        "객체 지향 프로그래밍의 기본 요소"
      ],
      "answer": "자기 자신을 호출하는 함수",
      "difficulty": "hard"
    },
    {
      "question": "운영체제에서 '데드락(Deadlock)'을 방지하기 위한 방법은 무엇인가?",
      "options": [
        "자원 선점 불가 조건 제거",
        "메모리 용량 증가",
        "프로세스 종료",
        "디스크 백업"
      ],
      "answer": "자원 선점 불가 조건 제거",
      "difficulty": "hard"
    },
    {
      "question": "엑셀에서 'VLOOKUP' 함수의 주요 기능은 무엇인가?",
      "options": [
        "특정 값을 검색하여 해당 행의 데이터를 반환",
        "셀의 값을 합산",
        "셀의 값을 평균",
        "셀의 개수를 세기"
      ],
      "answer": "특정 값을 검색하여 해당 행의 데이터를 반환",
      "difficulty": "hard"
    },
    {
      "question": "보안에서 '침입 탐지 시스템(IDS)'의 주요 기능은 무엇인가?",
      "options": [
        "네트워크 트래픽을 모니터링하여 비정상적인 활동 감지",
        "데이터를 암호화",
        "사용자 인증",
        "악성 코드 제거"
      ],
      "answer": "네트워크 트래픽을 모니터링하여 비정상적인 활동 감지",
      "difficulty": "hard"
    },
    {
      "question": "데이터베이스에서 '트리거(Trigger)'의 주요 용도는 무엇인가?",
      "options": [
        "특정 이벤트 발생 시 자동으로 실행되는 프로시저",
        "데이터를 백업",
        "사용자 권한 관리",
        "데이터를 암호화"
      ],
      "answer": "특정 이벤트 발생 시 자동으로 실행되는 프로시저",
      "difficulty": "hard"
    },
    {
      "question": "네트워크에서 'QoS(Quality of Service)'의 주요 목적은 무엇인가?",
      "options": [
        "네트워크 성능을 보장",
        "데이터를 암호화",
        "네트워크 장비를 관리",
        "네트워크 대역폭을 증가"
      ],
      "answer": "네트워크 성능을 보장",
      "difficulty": "hard"
    },
    {
      "question": "프로그래밍에서 '다형성(Polymorphism)'의 주요 이점은 무엇인가?",
      "options": [
        "코드의 재사용성과 유연성 향상",
        "실행 속도 향상",
        "메모리 사용량 감소",
        "보안 강화"
      ],
      "answer": "코드의 재사용성과 유연성 향상",
      "difficulty": "hard"
    },
    {
      "question": "운영체제에서 '가상 메모리'의 주요 목적은 무엇인가?",
      "options": [
        "물리적 메모리 용량을 확장",
        "CPU 속도 향상",
        "디스크 용량 증가",
        "네트워크 속도 개선"
      ],
      "answer": "물리적 메모리 용량을 확장",
      "difficulty": "hard"
    },
    {
      "question": "엑셀에서 '피벗 테이블'의 주요 기능은 무엇인가?",
      "options": [
        "대량의 데이터를 요약하고 분석",
        "셀의 서식을 변경",
        "데이터를 정렬",
        "그래프를 생성"
      ],
      "answer": "대량의 데이터를 요약하고 분석",
      "difficulty": "hard"
    },
    {
      "question": "보안에서 '암호화'의 주요 목적은 무엇인가?",
      "options": [
        "데이터의 기밀성 보장",
        "데이터의 무결성 보장",
        "데이터의 가용성 보장",
        "데이터의 압축"
      ],
      "answer": "데이터의 기밀성 보장",
      "difficulty": "hard"
    },
    {
      "question": "데이터베이스에서 '동시성 제어'의 주요 기법은 무엇인가?",
      "options": [
        "잠금(Locking)",
        "백업",
        "복제",
        "파티셔닝"
      ],
      "answer": "잠금(Locking)",
      "difficulty": "hard"
    },
    {
      "question": "네트워크에서 '라우터'의 주요 기능은 무엇인가?",
      "options": [
        "패킷을 목적지로 전달",
        "데이터를 암호화",
        "네트워크 트래픽을 모니터링",
        "IP 주소를 할당"
      ],
      "answer": "패킷을 목적지로 전달",
      "difficulty": "hard"
    },
    {
      "question": "프로그래밍에서 '알고리즘'의 주요 목적은 무엇인가?",
      "options": [
        "문제를 해결하기 위한 단계적 절차",
        "코드의 실행 속도 향상",
        "메모리 사용량 감소",
        "보안 강화"
      ],
      "answer": "문제를 해결하기 위한 단계적 절차",
      "difficulty": "hard"
    },
    {
      "question": "운영체제에서 '프로세스 스케줄링'의 주요 목적은 무엇인가?",
      "options": [
        "CPU 사용 효율 극대화",
        "메모리 용량 증가",
        "디스크 속도 향상",
        "네트워크 대역폭 확장"
      ],
      "answer": "CPU 사용 효율 극대화",
      "difficulty": "hard"
    },
    {
      "question": "엑셀에서 '조건부 서식'의 주요 기능은 무엇인가?",
      "options": [
        "특정 조건을 만족하는 셀에 서식을 적용",
        "셀의 값을 합산",
        "셀의 값을 평균",
        "셀의 개수를 세기"
      ],
      "answer": "특정 조건을 만족하는 셀에 서식을 적용",
      "difficulty": "hard"
    },
    {
      "question": "보안에서 '침입 방지 시스템(IPS)'의 주요 기능은 무엇인가?",
      "options": [
        "비정상적인 활동을 감지하고 차단",
        "데이터를 암호화",
        "사용자 인증",
        "악성 코드 제거"
      ],
      "answer": "비정상적인 활동을 감지하고 차단",
      "difficulty": "hard"
    }
  ],
  sports: [
    {
      question: "올림픽은 몇 년마다 열리나요?",
      options: ["2년", "3년", "4년", "5년"],
      answer: "4년",
      difficulty: "easy"
    },
    {
      question: "FIFA 월드컵에서 가장 많은 우승을 차지한 나라는?",
      options: ["독일", "브라질", "이탈리아", "아르헨티나"],
      answer: "브라질",
      difficulty: "medium"
    },
    {
      question: "월드컵 결승전에서 해트트릭을 한 첫 번째 선수는?",
      options: ["제프 허스트", "킬리안 음바페", "에우제비우", "프랑크 레이카르트"],
      answer: "제프 허스트",
      difficulty: "hard"
    }
  ],
  history: [
    //easy
    {
      question: "화엄종을 개창하고, 부석사를 건립하고, 관음 신앙을 강조한 인물은?",
      options: ["원광", "원효", "의상"],
      answer: "의상",
      difficulty: "easy"
    },
    {
      question: "371년~384년 재위하였으며, 전진으로부터 불교를 수용하고, 태학을 설립하고, 백제의 수곡성을 공격한 왕은?",
      options: ["미천왕", "장수왕", "소수림왕"],
      answer: "소수림왕",
      difficulty: "easy"
    },
    {
      question: "고려의 외교가이자 문신으로 거란 장수 소손녕과 외교 담판을 벌여 강동 6주를 확보한 인물은?",
      options: ["서희", "윤관", "최영"],
      answer: "서희",
      difficulty: "easy"
    },
    {
      question: "고려 말 양광전라경상도 도순찰사로 황산에서 왜구를 무찌르고 위화도 회군으로 권력을 장악한 인물은?",
      options: ["이성계", "양규", "강감찬"],
      answer: "이성계",
      difficulty: "easy"
    },
    {
      question: "다섯 개 이상의 돌을 가지고 던져 손으로 잡으며 노는 놀이로, 짜게받기, 살구, 닷짝걸이라고도 불리는 민속놀이는?",
      options: ["윷놀이", "공기놀이", "차전놀이"],
      answer: "공기놀이",
      difficulty: "easy"
    },
    {
      question: "조선 시대 여인들을 위해 내의원, 혜민서에서 환자를 치료한 여자 의원은?",
      options: ["의녀", "무당", "백정"],
      answer: "의녀",
      difficulty: "easy"
    },
    {
      question: "황룡촌 전투와 우금치 전투 사이 시기에 있었던 사실은?",
      options: ["최제우가 처형됐다", "홍경래의 난이 일어났다", "전주 화약이 체결됐다"],
      answer: "전주 화약이 체결됐다",
      difficulty: "easy"
    },
    {
      question: "조만식의 주도로 평양에서 시작되어 ‘조선 사람 조선 것!’, ‘내 살림 내 것으로!’ 구호를 만든 민족 운동은?",
      options: ["브나로드 운동", "새마을 운동", "물산 장려 운동"],
      answer: "물산 장려 운동",
      difficulty: "easy"
    },
    {
      question: "대한 독립군 총사령관으로 봉오동 전투를 승리로 이끌고 카자흐스탄으로 강제 이주당한 인물은?",
      options: ["나석주", "지청천", "홍범도"],
      answer: "홍범도",
      difficulty: "easy"
    },
    {
      question: "김원봉 등을 중심으로 창설되어 부대 일부가 한국 광복군에 합류한 조선 의용대에 대한 설명으로 옳은 것은?",
      options: ["중국 관내에서 결성된 최초의 한인 무장 조직이었다", "연통제와 교통국을 운영했다", "자유시 참변으로 큰 타격을 입었다"],
      answer: "중국 관내에서 결성된 최초의 한인 무장 조직이었다",
      difficulty: "easy"
    },
    {
      question: "6.25 전쟁 중 있었던 사실은?",
      options: ["5.10 총선거가 실시됐다", "인천 상륙 작전이 전개됐다", "국민 대표 회의가 개최됐다"],
      answer: "인천 상륙 작전이 전개됐다",
      difficulty: "easy"
    },
    {
      question: "선사 시대의 생활 모습으로 가장 적절한 것은?",
      options: ["가락바퀴를 이용하여 실을 뽑았다", "철제 농기구를 만들어 농사를 지었다", "지배층의 무덤으로 고인돌을 만들었다"],
      answer: "가락바퀴를 이용하여 실을 뽑았다",
      difficulty: "easy"
    },
    {
      question: "황룡사 창건을 명하고 화랑도 정비를 논의한 왕의 업적은?",
      options: ["주자감을 설립했다", "북한산에 순수비를 세웠다", "김흠돌의 난을 진압했다"],
      answer: "북한산에 순수비를 세웠다",
      difficulty: "easy"
    },
    {
      question: "수도를 웅진에서 사비로 옮기고, 국호를 남부여로 바꾸고, 고구려에 빼앗겼던 한강 유역 일부를 수복한 왕은?",
      options: ["성왕", "무령왕", "근초고왕"],
      answer: "성왕",
      difficulty: "easy"
    },
    {
      question: "고려의 국가 행사로, 왕이 태조의 제사를 지내고 신하들과 춤과 노래를 즐기며 주변 나라 상인과 사신이 특산물을 바친 행사는?",
      options: ["영고", "단오제", "팔관회"],
      answer: "팔관회",
      difficulty: "easy"
    },
    {
      question: "고려의 경제 상황에 대한 설명으로 옳은 것은?",
      options: ["감자, 고구마 등의 작물이 널리 재배됐다", "활구라고 불리는 은병이 사용되었다", "시장을 감독하기 위한 동시전이 설치됐다"],
      answer: "활구라고 불리는 은병이 사용되었다",
      difficulty: "easy"
    },
    {
      question: "세조가 실시하라고 한 직전법에 대해 양성지가 반대한 이유와 관련된 설명은?",
      options: ["균역법", "영정법", "직전법"],
      answer: "직전법",
      difficulty: "easy"
    },
    {
      question: "각 지역의 토산물을 정기적으로 수취하던 제도로, 대동법으로 문제점을 해결한 제도는?",
      options: ["공납", "군역", "환곡"],
      answer: "공납",
      difficulty: "easy"
    },
    {
      question: "김홍도의 그림은?",
      options: ["고사관수도", "아집도대련", "무동"],
      answer: "무동",
      difficulty: "easy"
    },
    {
      question: "사도세자의 아들인 국왕의 업적은?",
      options: ["삼국사기를 편찬했다", "초계문신제를 실시했다", "통리기무아문을 설치했다"],
      answer: "초계문신제를 실시했다",
      difficulty: "easy"
    },
    {
      question: "구식 군인이 정부의 개화 정책과 별기군 차별 대우에 반발하여 일으킨 사건은?",
      options: ["갑신정변", "병인양요", "임오군란"],
      answer: "임오군란",
      difficulty: "easy"
    },
    {
      question: "조선 시대 서얼에 대한 설명으로 가장 적절한 것은?",
      options: ["소속 관청에 신공을 바쳤다", "매매, 상속, 증여의 대상이었다", "차별 철폐를 위해 통청 운동을 전개했다"],
      answer: "차별 철폐를 위해 통청 운동을 전개했다",
      difficulty: "easy"
    },
    {
      question: "병자년에 일본과 체결하여 부산 외 원산과 인천을 추가 개항한 조약은?",
      options: ["강화도 조약", "한성 조약", "정미 7조약"],
      answer: "강화도 조약",
      difficulty: "easy"
    },
    {
      question: "동학 농민 운동 중에 있었던 사실은?",
      options: ["독립 협회가 창립됐다", "전주 화약이 체결됐다", "박규수가 안핵사로 파견됐다"],
      answer: "전주 화약이 체결됐다",
      difficulty: "easy"
    },
    {
      question: "방정환에 대한 설명으로 옳은 것은?",
      options: ["의열단 창설을 주도했다", "베를린 올림픽에 참가했다", "어린이날 제정에 기여했다"],
      answer: "어린이날 제정에 기여했다",
      difficulty: "easy"
    },
    {
      question: "일제가 황국 신민 서사를 강요하던 시기에 있었던 사실은?",
      options: ["신간회가 창립됐다", "신사 참배가 강요됐다", "교육 입국 조서가 발표됐다"],
      answer: "신사 참배가 강요됐다",
      difficulty: "easy"
    },
    {
      question: "고종의 장례 기간 중 탑골 공원에서 시작되어 대한민국 임시 정부 수립의 계기가 된 민족 운동은?",
      options: ["청군의 개입으로 진압됐다", "대한매일신보의 후원을 받았다", "대한민국 임시 정부 수립의 계기가 됐다"],
      answer: "대한민국 임시 정부 수립의 계기가 됐다",
      difficulty: "easy"
    },
    {
      question: "1920년대 이상재 등이 중심이 되어 고등 교육 실현을 위해 전개한 민족 운동은?",
      options: ["새마을 운동", "물산 장려 운동", "민립 대학 설립 운동"],
      answer: "민립 대학 설립 운동",
      difficulty: "easy"
    },
    {
      question: "일제강점기 독립운동가로 수감 번호를 이름처럼 사용한 시인은?",
      options: ["김원봉", "신채호", "이육사"],
      answer: "이육사",
      difficulty: "easy"
    },
    {
      question: "전남도청 앞 금남로에서 계엄군의 집단 발포로 사상자가 발생한 민주화 운동은?",
      options: ["4.19 혁명", "6월 민주 항쟁", "5.18 민주화 운동"],
      answer: "5.18 민주화 운동",
      difficulty: "easy"
    },
    //medium
    {
      question: "본기, 열전 등으로 구성된 기전체 형식으로 서술되고, 김부식 등이 왕명을 받아 편찬한 현존하는 가장 오래된 역사서는?",
      options: ["동국통감", "삼국사기", "삼국유사"],
      answer: "삼국사기",
      difficulty: "medium"
    },
    {
      question: "재해를 당하거나 생계가 어려운 백성들에게 곡식을 대여하거나 무상 지급한 고려와 조선 초기의 대표적인 구휼 기관은?",
      options: ["의창", "박문국", "제중원"],
      answer: "의창",
      difficulty: "medium"
    },
    {
      question: "지주적인 정치를 위해 이문소를 폐지한 공민왕의 업적은?",
      options: ["12목을 설치했다", "해동통보를 발행했다", "쌍성총관부를 공격했다"],
      answer: "쌍성총관부를 공격했다",
      difficulty: "medium"
    },
    {
      question: "고려 승려로 불교계 타락을 비판하며 정혜쌍수를 주장하고 불일보조국사 시호를 받은 인물의 업적은?",
      options: ["천태종을 창시했다", "수선사 결사를 제창했다", "인도 등에 다녀와 왕오천축국전을 지었다"],
      answer: "수선사 결사를 제창했다",
      difficulty: "medium"
    },
    {
      question: "훈민정음 해례본이 유네스코 세계 기록 유산에 등재된 훈민정음을 창제한 왕의 업적은?",
      options: ["칠정산을 편찬했다", "악학궤범을 완성했다", "혼일강리역대국도지도를 제작했다"],
      answer: "칠정산을 편찬했다",
      difficulty: "medium"
    },
    {
      question: "금난전권 폐지와 장용영 설치를 추진한 정조 재위 시기에 볼 수 있는 모습은?",
      options: ["수원 화성을 축조하는 백성", "원산 총파업에 참여하는 노동자", "만적과 봉기를 모의하는 노비"],
      answer: "수원 화성을 축조하는 백성",
      difficulty: "medium"
    },
    {
      question: "주동리 유적에서 빗살무늬 토기가 출토되고, 고구려비가 발견되며, 덕흥창이 설치되고 신립이 탄금대에서 싸운 지역은?",
      options: ["나주", "상주", "충주"],
      answer: "충주",
      difficulty: "medium"
    },
    {
      question: "연행사로 청에 파견되어 조선책략을 들여오고 삼정이정청 설치를 건의한 박규수의 업적은?",
      options: ["추사체를 창안했다", "서전서숙을 설립했다", "삼정이정청 설치를 건의했다"],
      answer: "삼정이정청 설치를 건의했다",
      difficulty: "medium"
    },
    {
      question: "전환국에서 발행한 보조 화폐로 화폐 정리 사업으로 발행이 중단된 화폐는?",
      options: ["당백전", "백동화", "건원중보"],
      answer: "백동화",
      difficulty: "medium"
    },
    {
      question: "조선 태형령 제정과 관리·교원 제복 착용 시기에 있었던 사실은?",
      options: ["홍범 14조가 반포됐다", "군국기무처가 설치됐다", "토지 조사 사업이 실시됐다"],
      answer: "토지 조사 사업이 실시됐다",
      difficulty: "medium"
    },
    {
      question: "황국 신민 서사 암송과 국민학교 명칭 사용 시기에 볼 수 있는 모습은?",
      options: ["한성순보를 발행하는 관리", "공출을 독려하는 애국반 반장", "육영 공원에서 영어를 배우는 학생"],
      answer: "공출을 독려하는 애국반 반장",
      difficulty: "medium"
    },
    {
      question: "1926년 단성사에서 개봉한 영화 아리랑의 감독이자 주연은?",
      options: ["심훈", "나운규", "이육사"],
      answer: "나운규",
      difficulty: "medium"
    },
    {
      question: "1977년 수출액 100억 달러 돌파 시기에 있었던 사실은?",
      options: ["개성 공단이 조성됐다", "신한 공사가 설립됐다", "경부 고속 도로가 준공됐다"],
      answer: "경부 고속 도로가 준공됐다",
      difficulty: "medium"
    },
    {
      question: "지방 자치제 실시, 조선 총독부 철거, OECD 가입 시기에 볼 수 있는 모습은?",
      options: ["베트남 전쟁에 파병되는 군인", "금융 실명제 실시 속보를 시청하는 은행원", "야간 통행 금지 해제 조치에 환호하는 시민"],
      answer: "금융 실명제 실시 속보를 시청하는 은행원",
      difficulty: "medium"
    },
    {
      question: "북방 외교로 사회주의 국가들과 국교를 수립하고 남북한 유엔 동시 가입을 이룬 정부의 통일 노력은?",
      options: ["남북 기본 합의서를 교환했다", "미국과 브라운 각서에 합의했다", "6.15 남북 공동 선언을 채택했다"],
      answer: "미국과 브라운 각서에 합의했다",
      difficulty: "medium"
    },
    {
      question: "단궁, 과하마, 반어피가 특산물이고 무천 제천 행사와 책화 풍습이 있던 나라는?",
      options: ["동예", "마한", "부여"],
      answer: "동예",
      difficulty: "medium"
    },
    {
      question: "원효의 아들로 이두를 체계화하고 신문왕에게 화왕계를 지어 바친 인물은?",
      options: ["강수", "설총", "의상"],
      answer: "설총",
      difficulty: "medium"
    },
    {
      question: "광종이 독자적 연호를 사용하고 과거 제도를 시행한 그의 업적은?",
      options: ["녹읍을 폐지했다", "훈요 10조를 남겼다", "노비안검법을 시행했다"],
      answer: "노비안검법을 시행했다",
      difficulty: "medium"
    },
    {
      question: "배흘림 기둥과 주심포 양식이 특징인 고려 시대 목조 건축물은?",
      options: ["경주 불국사 대웅전", "영주 부석사 무량수전", "김제 금산사 미륵전"],
      answer: "영주 부석사 무량수전",
      difficulty: "medium"
    },
    {
      question: "백토를 분칠하고 음각으로 무늬를 표현한 고려 말부터 조선 전기까지 제작된 도자기는?",
      options: ["청자 상감 운학문 매병", "분청사기 음각어문 편병", "백자 달항아리"],
      answer: "분청사기 음각어문 편병",
      difficulty: "medium"
    },
    {
      question: "윤지충이 서학을 믿어 신주를 불태우고 처형된 시기에 볼 수 없는 모습은?",
      options: ["정감록을 읽는 양반", "판소리 공연을 하는 소리꾼", "삼별초의 일원으로 훈련하는 군인"],
      answer: "삼별초의 일원으로 훈련하는 군인",
      difficulty: "medium"
    },
    {
      question: "제2차 수신사로 일본에 파견되어 조선책략을 들여오고 갑오개혁을 주도한 인물은?",
      options: ["김옥균", "김홍집", "서재필"],
      answer: "김홍집",
      difficulty: "medium"
    },
    {
      question: "고종이 경복궁 중건을 위해 당백전을 주조하고 추진한 활동은?",
      options: ["척화비를 건립했다", "동의보감을 완성했다", "심해통공을 실시했다"],
      answer: "척화비를 건립했다",
      difficulty: "medium"
    },
    {
      question: "동대문 발전소 전등 개설식 시기에 볼 수 있는 모습은?",
      options: ["경인선 기차를 타고 가는 승객", "박문국에서 한성순보를 인쇄하는 기술자", "라디오 방송을 송출하는 경성 방송국 직원"],
      answer: "경인선 기차를 타고 가는 승객",
      difficulty: "medium"
    },
    {
      question: "조선 총독부가 토지 조사 사업을 위해 임시 토지 조사국원 양성소를 운영한 시기에 있었던 사실은?",
      options: ["회사령이 시행됐다", "관민 공동회가 열렸다", "국가 총동원법이 제정됐다"],
      answer: "회사령이 시행됐다",
      difficulty: "medium"
    },
    {
      question: "치안 유지법이 제정된 시기에 볼 수 있는 모습은?",
      options: ["장용영에서 훈련하는 군인", "군국기무처에서 회의하는 관리", "산미 증식 계획을 추진하는 총독부 직원"],
      answer: "산미 증식 계획을 추진하는 총독부 직원",
      difficulty: "medium"
    },
    {
      question: "1932년 이봉창이 도쿄에서 일왕을 향해 폭탄을 던진 소속 단체는?",
      options: ["보안회", "독립 의군부", "한인 애국단"],
      answer: "한인 애국단",
      difficulty: "medium"
    },
    {
      question: "반민특위가 친일파 청산을 추진했으나 정부의 비협조로 어려움을 겪은 시기에 있었던 사실은?",
      options: ["농지 개혁법이 제정됐다", "최초로 100억 달러 수출을 달성했다", "경제 협력 개발 기구 가입이 이루어졌다"],
      answer: "농지 개혁법이 제정됐다",
      difficulty: "medium"
    },
    {
      question: "경부 고속도로 공사 중 77명 사망 사고가 발생한 정부 시기의 경제 상황은?",
      options: ["금융 실명제가 전면 실시됐다", "칠레와 자유 무역 협정이 체결됐다", "제 2차 경제 개발 5개년 계획이 시행됐다"],
      answer: "제 2차 경제 개발 5개년 계획이 시행됐다",
      difficulty: "medium"
    },
    {
      question: "국민학교 명칭이 초등학교로 바뀌고 조선 총독부 건물이 철거된 정부 시기에 있었던 사실은?",
      options: ["조선 총독부 건물이 철거됐다", "이라크에 자이툰 부대가 파병됐다", "한일 월드컵 축구 대회가 개최됐다"],
      answer: "조선 총독부 건물이 철거됐다",
      difficulty: "medium"
    },
    {
      question: "대한민국 임시정부가 수립된 해는?",
      options: ["1919", "1945", "1931", "1950"],
      answer: "1919",
      difficulty: "medium"
    },
    //hard
    {
      question: "부여 송국리에서 출토된 비파형 동검과 민무늬 토기가 있는 시대의 생활 모습으로 옳은 것은?",
      options: ["소를 이용한 깊이갈이가 일반화됐다", "반달 돌칼을 사용해 벼를 수확했다", "주로 동굴이나 강가의 막집에서 살았다"],
      answer: "반달 돌칼을 사용해 벼를 수확했다",
      difficulty: "hard"
    },
    {
      question: "이진아시왕이 시조로 고령일대를 중심으로 세운 나라에 대한 설명으로 옳은 것은?",
      options: ["진흥왕 때 신라에 복속되었다", "집사부를 비롯한 14부를 설치했다", "지방 장관으로 욕살, 처려근지 등을 두었다"],
      answer: "진흥왕 때 신라에 복속되었다",
      difficulty: "hard"
    },
    {
      question: "혜공왕 피살 후 왕위 쟁탈전이 치열했던 시기에 낭혜화상이 성주산문을 개창한 시기에 있었던 사실은?",
      options: ["김흠돌 등 진골 세력이 숙청됐다", "김헌창이 웅천주에서 반란을 일으켰다", "거칠부가 왕명에 의해 국사를 편찬했다"],
      answer: "김헌창이 웅천주에서 반란을 일으켰다",
      difficulty: "hard"
    },
    {
      question: "5경에서 절터, 불상, 석등 등이 발굴된 발해에 대한 설명으로 옳지 않은 것은?",
      options: ["교육 기관으로 주자감을 설립했다", "감찰 업무를 담당하는 중정대가 있었다", "내신좌평, 내두좌평 등 6좌평의 관제를 마련했다"],
      answer: "내신좌평, 내두좌평 등 6좌평의 관제를 마련했다",
      difficulty: "hard"
    },
    {
      question: "화랑 제도를 시행한 신라에 대한 설명으로 옳은 것은?",
      options: ["태학과 경당을 두어 인재를 양성했다", "유랑민을 구휼하는 활인서를 설치했다", "골품에 따라 관등 승진, 일상생활 등을 엄격히 제한했다"],
      answer: "골품에 따라 관등 승진, 일상생활 등을 엄격히 제한했다",
      difficulty: "hard"
    },
    {
      question: "태봉을 세운 궁예에 대한 설명으로 옳은 것은?",
      options: ["광평성을 비롯한 각종 정치 기구를 마련했다", "경주의 사심관으로 임명됐다", "12목에 지방관을 처음으로 파견했다"],
      answer: "광평성을 비롯한 각종 정치 기구를 마련했다",
      difficulty: "hard"
    },
    {
      question: "안동 태사묘가 세워진 왕건의 업적으로 옳은 것은?",
      options: ["한양을 남경으로 승격했다", "정계와 계백료서를 지어 관리의 규범을 제시했다", "쌍기의 건의를 받아들여 과거제를 실시했다"],
      answer: "정계와 계백료서를 지어 관리의 규범을 제시했다",
      difficulty: "hard"
    },
    {
      question: "인종 재위 시기에 있었던 사실로 옳은 것은?",
      options: ["최충헌이 봉사 10조를 올렸다", "동북 9성이 여진에 반환됐다", "묘청 등이 서경에서 난을 일으켰다"],
      answer: "묘청 등이 서경에서 난을 일으켰다",
      difficulty: "hard"
    },
    {
      question: "삼별초에 대한 설명으로 옳은 것은?",
      options: ["거란의 침입에 대비하여 설치됐다", "최씨 무신 정권의 군사적 기반이었다", "원의 요청으로 일본 원정에 참여했다"],
      answer: "최씨 무신 정권의 군사적 기반이었다",
      difficulty: "hard"
    },
    {
      question: "이승휴가 지은 제왕운기에 대한 설명으로 옳은 것은?",
      options: ["남북국이라는 용어가 처음 사용됐다", "불교사를 중심으로 민간 설화를 담았다", "단군의 고조선 건국 이야기가 수록됐다"],
      answer: "단군의 고조선 건국 이야기가 수록됐다",
      difficulty: "hard"
    },
    {
      question: "공민왕 재위 시기에 있었던 사실은?",
      options: ["대각국사 의천이 천태종을 개창했다", "신돈을 중심으로 전민변정 사업이 추진됐다", "만적이 개경에서 노비를 모아 반란을 모의했다"],
      answer: "신돈을 중심으로 전민변정 사업이 추진됐다",
      difficulty: "hard"
    },
    {
      question: "최무선이 진포대첩에서 화포로 왜구를 물리친 고려의 대응은?",
      options: ["광군을 조직하여 침입에 대비했다", "경성과 경원에 무역소를 설치했다", "박위를 파견하여 근거지를 토벌했다"],
      answer: "박위를 파견하여 근거지를 토벌했다",
      difficulty: "hard"
    },
    {
      question: "이성계를 도와 조선 건국을 주도한 정도전에 대한 설명으로 옳은 것은?",
      options: ["불씨잡변을 지어 불교를 비판했다", "계유정난을 계기로 정계에서 축출됐다", "최초의 서원인 백운동 서원을 건립했다"],
      answer: "불씨잡변을 지어 불교를 비판했다",
      difficulty: "hard"
    },
    {
      question: "월인천강지곡을 지은 세종의 업적은?",
      options: ["수도 방어를 위해 금위영을 설치했다", "음악 이론 등을 집대성한 악학궤범을 완성했다", "한양을 기준으로 한 역법서인 칠정산을 간행했다"],
      answer: "한양을 기준으로 한 역법서인 칠정산을 간행했다",
      difficulty: "hard"
    },
    {
      question: "명나라 원군을 기리기 위해 대보단을 세운 조선의 정책은?",
      options: ["나선 정벌에 조총 부대를 파견했다", "하정사, 천추사 등 사절단을 보냈다", "백두산정계비를 세워 국경을 확정했다", "한성에 동평관을 두어 무역을 허용했다"],
      answer: "하정사, 천추사 등 사절단을 보냈다",
      difficulty: "hard"
    },
    {
      question: "다음 중 해당 장소에 있었던 사실로 옳은 것은?",
      options: ["강화산성-정봉수가 후금의 침입에 맞서 싸웠다", "북한산성-김준룡이 근왕병을 이끌고 적장을 사살했다", "서울 한양도성-신립이 배수의 진을 치고 전투를 벌였다", "남한산성-병자호란 때 인조가 피란하여 항전했다"],
      answer: "남한산성-병자호란 때 인조가 피란하여 항전했다",
      difficulty: "hard"
    },
    {
      question: "연산군에 대한 설명으로 옳은 것은?",
      options: ["이괄의 난이 일어나 공주로 피란했다", "폐비 윤씨 사사 사건을 빌미로 신하들을 숙청했다", "위훈 삭제를 주장한 조광조 일파를 제거했다", "영창 대군을 죽이고 인목 대비를 유폐했다"],
      answer: "폐비 윤씨 사사 사건을 빌미로 신하들을 숙청했다",
      difficulty: "hard"
    },
    {
      question: "철종 재위 시기에 있었던 사실은?",
      options: ["윤지충 등이 처형된 신해박해가 일어났다", "오페르트가 남연군 묘 도굴을 시도했다", "국왕의 친위 부대인 장용영이 창설됐다", "박규수의 건의로 삼정이정청이 설치됐다"],
      answer: "박규수의 건의로 삼정이정청이 설치됐다",
      difficulty: "hard"
    },
    {
      question: "구향과 신향 간의 항전이 발생한 시기에 볼 수 없는 모습은?",
      options: ["빈민을 구휼하는 제위보의 관리", "시사에서 시를 낭송하는 중인", "상평통보로 물건을 거래하는 보부상", "세책가에서 홍길동전을 빌리는 부녀자"],
      answer: "빈민을 구휼하는 제위보의 관리",
      difficulty: "hard"
    },
    {
      question: "시전 상인들이 외아문 앞에서 연좌시위를 한 배경은?",
      options: ["동양 척식 주식화사가 설립됐다", "일제가 황무지 개간권을 요구했다", "조청 상민 수륙 무역 장정이 체결됐다", "메가타의 주도로 화폐 정리 사업이 시행됐다"],
      answer: "조청 상민 수륙 무역 장정이 체결됐다",
      difficulty: "hard"
    },
    {
      question: "국채보상운동에 대한 설명으로 옳은 것은?",
      options: ["대한매일신보의 지원을 받아 확산됐다", "조선 총독부의 탄압과 방해로 실패했다", "백정에 대한 사회적 철폐를 요구했다", "조선 민립 대학 기성회에서 모금 활동을 주도했다"],
      answer: "대한매일신보의 지원을 받아 확산됐다",
      difficulty: "hard"
    },
    {
      question: "을사조약에 대한 설명으로 옳은 것은?",
      options: ["러일 전쟁 중에 체결됐다", "최혜국 대우를 최초로 규정했다", "천주교 포교 허용의 근거가 됐다", "통감부가 설치되는 결과를 초래했다"],
      answer: "통감부가 설치되는 결과를 초래했다",
      difficulty: "hard"
    },
    {
      question: "한성 전차 사고 이후 시기에 볼 수 있는 모습은?",
      options: ["척화비를 세우기 위해 돌을 다듬는 석공", "연무당에서 일본과 조약을 체결하는 관리", "보빙사의 일원으로 미국에 파견되는 역관", "경부선 철도 개통식을 취재하는 신문 기자"],
      answer: "경부선 철도 개통식을 취재하는 신문 기자",
      difficulty: "hard"
    },
    {
      question: "교원이 제복을 입고 칼을 차던 시기에 시행된 일제 정책은?",
      options: ["국가 총동원법을 공포했다", "산미 증식 계획을 시행했다", "토지 조사 사업을 실시했다", "조선 사상범 예방 구금령을 제정했다"],
      answer: "토지 조사 사업을 실시했다",
      difficulty: "hard"
    },
    {
      question: "대공황 이후 농촌 진흥 운동 시기에 볼 수 있는 모습은?",
      options: ["근우회 창립총회에 참여하는 학생", "경성 제국 대학 설립을 추진하는 관리", "원각사에서 연극 은세계를 공연하는 배우", "혁명적 농민 조합을 결성하여 일제에 저항하는 농민"],
      answer: "혁명적 농민 조합을 결성하여 일제에 저항하는 농민",
      difficulty: "hard"
    },
    {
      question: "광주 학생 운동에 대한 설명으로 옳은 것은?",
      options: ["순종의 인산일을 기회로 삼아 일어났다", "조선어 학회가 해산되는 결과를 가져왔다", "정우회 선언을 발표하는 데 영향을 주었다", "전국적인 시위와 동맹 휴학으로 확산됐다"],
      answer: "전국적인 시위와 동맹 휴학으로 확산됐다",
      difficulty: "hard"
    },
    {
      question: "한인애국단의 활동으로 옳은 것은?",
      options: ["일제가 조작한 105인 사건으로 와해됐다", "파리 강화 회의에 독립 청원서를 제출했다", "단원인 윤봉길이 홍커우 공원 의거를 실행했다", "군사 훈련을 위해 조선 혁명 간부 학교를 설립했다"],
      answer: "단원인 윤봉길이 홍커우 공원 의거를 실행했다",
      difficulty: "hard"
    },
    {
      question: "물산장려운동에 대한 설명으로 옳은 것은?",
      options: ["조선 노동 총동맹을 중심으로 전개됐다", "보국안민, 제폭구민 등이 구호로 사용됐다", "조선 관세령 폐지 등을 배경으로 확산했다", "일본 제일은행권 화폐가 유통되는 계기가 됐다"],
      answer: "조선 관세령 폐지 등을 배경으로 확산했다",
      difficulty: "hard"
    },
    {
      question: "일본군이 남서 해안에 군사 방어 시설을 구축한 시기에 있었던 사실은?",
      options: ["고종의 밀지를 받아 독립 의군부가 결성됐다", "만주 군벌과 일제가 미쓰야 협정을 체결했다", "여자 정신 근로령으로 여성들이 강제 동원됐다", "독립운동의 방략을 논의하고자 국민 대표 회의가 개최됐다"],
      answer: "여자 정신 근로령으로 여성들이 강제 동원됐다",
      difficulty: "hard"
    },
    {
      question: "박정희 정부 시기에 볼 수 있는 모습은?",
      options: ["거리에서 장발과 미니스커트를 단속하는 경찰", "교복 자율화 조치로 사복을 입고 등교하는 학생", "금융 실명제에 따라 신분증 제시를 요구하는 은행원", "전국 민주 노동조합 총연맹 창립 대회에 참가하는 노동자"],
      answer: "거리에서 장발과 미니스커트를 단속하는 경찰",
      difficulty: "hard"
    }
  ],
  commonSense: [
    //easy
    {
      question: "탁월하고 독창성 있는 수학적 연구를 한 40세 미만의 수학자에게 수여되는 상으로 노벨 수학상이라고 불리는 상은 무엇인가?",
      options: ["페르마상", "필즈상", "가우스상", "아벨상"],
      answer: "필즈상",
      difficulty: "easy"
    },
    {
      question: "모차르트의 미완성 곡으로 죽은 이의 넋을 달래는 곡은 무엇인가?",
      options: ["레퀴엠", "소나타", "칸타타", "오라토리오"],
      answer: "레퀴엠",
      difficulty: "easy"
    },
    {
      question: "동물복지를 실현한 친환경제품을 무엇이라 하는가?",
      options: ["프리덤 푸드", "애니멀 푸드", "웰빙 푸드", "더베터 푸드"],
      answer: "프리덤 푸드",
      difficulty: "easy"
    },
    {
      question: "초등학교나 유치원 정문에서 반경 300m 이내에 지정된 어린이 보호구역을 무엇이라 하는가?",
      options: ["키드존", "레드존", "블루존", "스쿨존"],
      answer: "스쿨존",
      difficulty: "easy"
    },
    {
      question: "환경을 이슈로 전폭적인 사회운동을 촉발시킨 20세기 환경학 최고의 고전은 무엇인가?",
      options: ["침묵의 봄", "렉서스와 올리브나무", "성장의 한계", "거대한 전환"],
      answer: "침묵의 봄",
      difficulty: "easy"
    },
    {
      question: "석회암 등 퇴적암이 많은 지역에서 주로 발생하는 자연 현상으로, 땅이 가라앉아 생긴 구멍을 무엇이라 하는가?",
      options: ["싱크홀", "덩크홀", "다운홀", "그레이트홀"],
      answer: "싱크홀",
      difficulty: "easy"
    },
    {
      question: "세계 4대 성인에 들어가지 않는 사람은 누구인가?",
      options: ["예수", "석가모니", "소크라테스", "마호메트"],
      answer: "마호메트",
      difficulty: "easy"
    },
    {
      question: "아프리카에 위치한 사막으로 세계에서 가장 큰 규모를 갖고 있는 것은 다음 중 어느 사막인가?",
      options: ["고비사막", "타클라마칸사막", "사하라사막", "나미브사막"],
      answer: "사하라사막",
      difficulty: "easy"
    },
    {
      question: "4D산업의 4D에 들어가지 않는 것은?",
      options: ["dirty", "difficult", "dangerous", "discharge"],
      answer: "discharge",
      difficulty: "easy"
    },
    {
      question: "중국에서는 관광객이라는 의미의 단어이고 한국에서는 중국 관광객을 의미하는 단어는 무엇인가?",
      options: ["샤오황띠", "파룬궁", "요우커", "랴오닝"],
      answer: "요우커",
      difficulty: "easy"
    },
    {
      question: "샤브르, 플뢰레, 레페 등의 불어용어를 사용하는 스포츠는?",
      options: ["펜싱", "크러켓", "근대5종경기", "스키"],
      answer: "펜싱",
      difficulty: "easy"
    },
    {
      question: "‘태양의 후예’라는 드라마에서 많이 사용한 광고로 영화나 드라마 등에서 특정 제품을 노출시켜 광고 효과를 노리는 것을 무엇이라 하는가?",
      options: ["POP", "PPL", "미장센", "콘티"],
      answer: "PPL",
      difficulty: "easy"
    },
    {
      question: "가시광선 중 가장 파장이 긴 것은 다음 중 어느 색인가?",
      options: ["보라색", "빨간색", "주황색", "녹색"],
      answer: "빨간색",
      difficulty: "easy"
    },
    {
      question: "우리나라의 계절에 영향을 주는 기단으로 고온 다습한 기단은 다음 중 무엇인가?",
      options: ["북태평양 기단", "오호츠크해 기단", "시베리아 기단", "양쯔강 기단"],
      answer: "북태평양 기단",
      difficulty: "easy"
    },
    {
      question: "다음 중 표준어가 아닌 것은?",
      options: ["오뚜기", "냄비", "깨끗이", "살코기"],
      answer: "오뚜기",
      difficulty: "easy"
    },
    {
      question: "스마트 폰 등을 이용한 은행 업무, 지불 업무, 티켓 업무 등의 서비스를 하는 비즈니스 모델은?",
      options: ["m 커머스", "c 커머스", "p 커머스", "a 커머스"],
      answer: "m 커머스",
      difficulty: "easy"
    },
    {
      question: "도면을 바탕으로 3차원 물체를 만들어내는 기계를 무엇이라 하는가?",
      options: ["4D 프린터", "입체 프린터", "3D 프린터", "사물인터넷 프린터"],
      answer: "3D 프린터",
      difficulty: "easy"
    },
    {
      question: "정약용에 대한 설명으로 옳지 않은 것은?",
      options: ["한전론", "여유당전서", "경제유표", "정조왕 화성 축조 관련 일"],
      answer: "한전론",
      difficulty: "easy"
    },
    {
      question: "이순신 장군이 전사한 전투는 어느 해전인가?",
      options: ["노량 해전", "명량 해전", "한산도 해전", "옥포 해전"],
      answer: "노량 해전",
      difficulty: "easy"
    },
    {
      question: "‘이데아'를 주장한 철학자는 누구인가?",
      options: ["아리스토텔레스", "플라톤", "소크라테스", "제논"],
      answer: "플라톤",
      difficulty: "easy"
    },
    {
      question: "미란다 원칙에 대한 설명 중 틀린 것은?",
      options: ["피의자는 묵비권을 행사할 수 있다.", "피의자의 모든 발언이 법정에서 불리하게 작용할 수 있다.", "피의자는 변호인의 조언을 받을 권리가 있다.", "피의자는 다른 죄목으로 구속되지 않는다."],
      answer: "피의자는 다른 죄목으로 구속되지 않는다.",
      difficulty: "easy"
    },
    {
      question: "명품구매로 상류층에 속하는 심리감이 발생하는 효과는 무엇인가?",
      options: ["파노블리 효과", "모방효과", "전시효과", "의존효과"],
      answer: "파노블리 효과",
      difficulty: "easy"
    },
    {
      question: "한반도에서 유네스코 지정 생물권 보호구역이 아닌 것은?",
      options: ["백두산", "설악산", "신안다도해", "지리산"],
      answer: "지리산",
      difficulty: "easy"
    },
    {
      question: "린네의 생물분류체계에 속하지 않는 것은?",
      options: ["계", "문", "종", "류"],
      answer: "류",
      difficulty: "easy"
    },
    {
      question: "다음 작품 중 단편소설이 아닌 것은?",
      options: ["토지", "빈처", "삼대", "표본실의 청개구리"],
      answer: "토지",
      difficulty: "easy"
    },
    {
      question: "세계 3대 교향곡이 아닌 것은?",
      options: ["베토벤-운명", "슈베르트-미완성 교향곡", "차이코프스키-비창", "하이든 - 왕비"],
      answer: "하이든 - 왕비",
      difficulty: "easy"
    },
    {
      question: "다음 컴퓨터 용량(크기)의 측정단위 중 가장 큰 것은?",
      options: ["MB", "GB", "TB", "PB"],
      answer: "PB",
      difficulty: "easy"
    },
    {
      question: "다음 중 세익스피어의 4대 비극이 아닌 것은?",
      options: ["베니스의 상인", "햄릿", "오셀로", "리어왕"],
      answer: "베니스의 상인",
      difficulty: "easy"
    },
    {
      question: "다음 중 4대 사화가 아닌 것은?",
      options: ["갑자사화", "을미사화", "기묘사화", "무오사화"],
      answer: "을미사화",
      difficulty: "easy"
    },
    {
      question: "‘시치미 떼다'와 관련있는 동물은 무엇인가?",
      options: ["매", "꿩", "비둘기", "참새"],
      answer: "매",
      difficulty: "easy"
    },
    //medium

    //hard
    {
      question: "인물 퀴즈 어려움",
      options: ["12", "34", "45", "정답"],
      answer: "정답",
      difficulty: "hard"
    }
  ]
};

// 카테고리 키와 표시할 이름 매핑
const categoryNames = {
  history: "역사",
  it: "IT",
  sports: "스포츠",
  commonSense: "상식"
};

let currentQuizData = [];
let currentQuiz = 0;
let score = 0;
let currentCategory = '';
let currentDifficulty = '';

const categoryContainer = document.getElementById('categoryContainer');
const difficultyContainer = document.getElementById('difficultyContainer');
const quizContainer = document.getElementById('quizContainer');

const difficultyTitle = document.getElementById('difficultyTitle');
const quizTitle = document.getElementById('quizTitle');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const resultEl = document.getElementById('result');
const nextBtn = document.getElementById('nextBtn');
const menuBtn = document.getElementById('menuBtn');

// 카테고리 버튼 클릭 시 (카테고리 화면 사라지고 난이도 선택 화면 노출)
document.querySelectorAll('.catBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.getAttribute('data-cat');
    categoryContainer.style.display = 'none';
    difficultyContainer.style.display = 'block';
    difficultyTitle.innerText = `${categoryNames[currentCategory]}`;
  });
});

// 난이도 버튼 클릭 시 (난이도 선택 화면 사라지고, 해당 난이도 문제만 필터링)
document.querySelectorAll('.difficultyBtn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentDifficulty = btn.getAttribute('data-difficulty');
    difficultyContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    quizTitle.innerText = `${categoryNames[currentCategory]} 퀴즈  (${getDifficultyText(currentDifficulty)})`;
    // 선택된 난이도에 해당하는 문제만 필터링하여 currentQuizData에 저장
    currentQuizData = shuffleArray(
      quizData[currentCategory].filter(q => q.difficulty === currentDifficulty)
    );
    currentQuiz = 0;
    score = 0;
    loadQuiz();
  });
});

// 난이도 텍스트 반환 함수
function getDifficultyText(diff) {
  if (diff === 'easy') return "이지";
  if (diff === 'medium') return "노말";
  if (diff === 'hard') return "하드";
  return "";
}

// 배열을 랜덤으로 섞는 함수 (Fisher-Yates 알고리즘)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function loadQuiz() {
  clearState();
  if (currentQuiz < currentQuizData.length) {
    const currentData = currentQuizData[currentQuiz];
    questionEl.innerText = currentData.question;
    const shuffledOptions = shuffleArray([...currentData.options]);
    shuffledOptions.forEach(option => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.className = 'optionBtn';
      btn.innerText = option;
      btn.addEventListener('click', (e) => selectAnswer(option, e.currentTarget));
      li.appendChild(btn);
      optionsEl.appendChild(li);
    });
  }
}

function selectAnswer(selectedOption, clickedBtn) {
  clickedBtn.classList.add('selected');
  const currentData = currentQuizData[currentQuiz];
  if (selectedOption === currentData.answer) {
    score++;
    resultEl.innerText = "정답입니다!";
  } else {
    resultEl.innerText = `오답입니다! 정답은: ${currentData.answer}`;
  }
  Array.from(optionsEl.children).forEach(li => {
    li.firstChild.disabled = true;
  });
  nextBtn.style.display = "block";
}

function clearState() {
  resultEl.innerText = "";
  nextBtn.style.display = "none";
  menuBtn.style.display = "none";
  optionsEl.innerHTML = "";
}

nextBtn.addEventListener('click', () => {
  currentQuiz++;
  if (currentQuiz < currentQuizData.length) {
    loadQuiz();
  } else {
    showFinalResult();
  }
});

function showFinalResult() {
  clearState();
  questionEl.innerText = "";
  resultEl.innerText = `훌륭해요! ${categoryNames[currentCategory]} 퀴즈 (${getDifficultyText(currentDifficulty)}) 에서 총 ${currentQuizData.length}문제 중 ${score}문제를 맞추셨어요. \n 계속 도전해보세요!`;
  nextBtn.style.display = "none";
  menuBtn.style.display = "block";
}

menuBtn.addEventListener('click', () => {
  quizContainer.style.display = 'none';
  categoryContainer.style.display = 'block';
});
