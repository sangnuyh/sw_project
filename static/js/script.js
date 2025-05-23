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
      question: "데이터베이스에서 3NF(제3정규형)를 만족하기 위한 조건은 무엇인가?",
      options: [
        "모든 비주요 속성이 기본 키에 완전 함수 종속되어야 한다",
        "기본 키가 아닌 속성 간에 함수 종속성이 없어야 한다",
        "모든 속성이 기본 키에 직접 종속되어야 한다",
        "테이블에 중복된 데이터가 없어야 한다"
      ],
      answer: "기본 키가 아닌 속성 간에 함수 종속성이 없어야 한다",
      difficulty: "hard"
    },
    {
      question: "네트워크에서 OSPF(Open Shortest Path First) 프로토콜의 주요 특징은 무엇인가?",
      options: [
        "거리 벡터 라우팅",
        "링크 상태 라우팅",
        "정적 라우팅",
        "경로 벡터 라우팅"
      ],
      answer: "링크 상태 라우팅",
      difficulty: "hard"
    },
    {
      question: "프로그래밍에서 해시 테이블의 평균 시간 복잡도는 무엇인가?",
      options: [
        "O(1)",
        "O(log n)",
        "O(n)",
        "O(n log n)"
      ],
      answer: "O(1)",
      difficulty: "hard"
    },
    {
      question: "운영체제에서 뮤텍스(Mutex)와 세마포어(Semaphore)의 차이점은 무엇인가?",
      options: [
        "뮤텍스는 이진 세마포어와 동일하다",
        "세마포어는 뮤텍스보다 더 많은 프로세스를 제어할 수 있다",
        "뮤텍스는 상호 배제를 위한 것이고, 세마포어는 동기화를 위한 것이다",
        "세마포어는 뮤텍스보다 더 복잡한 자원 관리를 할 수 있다"
      ],
      answer: "뮤텍스는 상호 배제를 위한 것이고, 세마포어는 동기화를 위한 것이다",
      difficulty: "hard"
    },
    {
      question: "엑셀에서 피벗 테이블을 사용하여 데이터를 분석할 때, '계산된 필드'의 기능은 무엇인가?",
      options: [
        "기존 필드의 값을 합산한다",
        "새로운 필드를 생성하여 사용자 정의 계산을 수행한다",
        "데이터를 필터링한다",
        "데이터를 정렬한다"
      ],
      answer: "새로운 필드를 생성하여 사용자 정의 계산을 수행한다",
      difficulty: "hard"
    },
    {
      question: "보안에서 '제로 데이 공격'이란 무엇을 의미하는가?",
      options: [
        "공격자가 0일 동안 공격을 준비하는 것",
        "취약점이 발견된 후 패치가 나오기 전에 이루어지는 공격",
        "하루 동안 지속되는 공격",
        "공격이 시작된 후 0일 이내에 방어하는 것"
      ],
      answer: "취약점이 발견된 후 패치가 나오기 전에 이루어지는 공격",
      difficulty: "hard"
    },
    {
      question: "데이터베이스에서 트랜잭션의 ACID 속성 중 '고립성(Isolation)'은 무엇을 보장하는가?",
      options: [
        "트랜잭션이 완전히 실행되거나 전혀 실행되지 않음",
        "트랜잭션의 결과가 영구적으로 저장됨",
        "동시에 실행되는 트랜잭션이 서로 영향을 주지 않음",
        "데이터가 일관된 상태를 유지함"
      ],
      answer: "동시에 실행되는 트랜잭션이 서로 영향을 주지 않음",
      difficulty: "hard"
    },
    {
      question: "네트워크에서 VPN(Virtual Private Network)의 주요 목적은 무엇인가?",
      options: [
        "공용 네트워크를 통해 안전한 통신을 제공",
        "네트워크 속도를 향상",
        "네트워크 대역폭을 증가",
        "네트워크 장비를 관리"
      ],
      answer: "공용 네트워크를 통해 안전한 통신을 제공",
      difficulty: "hard"
    },
    {
      question: "프로그래밍에서 '싱글톤 패턴'의 주요 특징은 무엇인가?",
      options: [
        "클래스의 인스턴스가 하나만 생성되도록 보장",
        "다중 스레드 환경에서 안전한 실행",
        "객체 간의 결합도를 낮춤",
        "코드의 재사용성을 높임"
      ],
      answer: "클래스의 인스턴스가 하나만 생성되도록 보장",
      difficulty: "hard"
    },
    {
      question: "운영체제에서 '페이지 교체 알고리즘'의 목적은 무엇인가?",
      options: [
        "메모리에서 페이지를 제거하여 공간을 확보",
        "프로세스 간의 통신을 관리",
        "파일 시스템의 성능을 최적화",
        "CPU 스케줄링을 관리"
      ],
      answer: "메모리에서 페이지를 제거하여 공간을 확보",
      difficulty: "hard"
    },
    {
      question: "엑셀에서 '매크로'를 사용하는 주요 이유는 무엇인가?",
      options: [
        "반복적인 작업을 자동화",
        "데이터를 시각화",
        "셀의 서식을 변경",
        "데이터를 정렬"
      ],
      answer: "반복적인 작업을 자동화",
      difficulty: "hard"
    },
    {
      question: "보안에서 '사회 공학(Social Engineering)' 공격의 특징은 무엇인가?",
      options: [
        "기술적 취약점을 이용한 공격",
        "인간의 심리를 이용하여 정보를 탈취",
        "네트워크를 통한 무차별 대입 공격",
        "악성 코드를 이용한 시스템 침입"
      ],
      answer: "인간의 심리를 이용하여 정보를 탈취",
      difficulty: "hard"
    },
    {
      question: "데이터베이스에서 '인덱스'의 주요 장점은 무엇인가?",
      options: [
        "데이터 검색 속도 향상",
        "데이터 저장 공간 절약",
        "데이터 무결성 보장",
        "트랜잭션 처리 속도 향상"
      ],
      answer: "데이터 검색 속도 향상",
      difficulty: "hard"
    },
    {
      question: "네트워크에서 'NAT(Network Address Translation)'의 기능은 무엇인가?",
      options: [
        "내부 IP 주소를 외부 IP 주소로 변환",
        "데이터를 암호화",
        "네트워크 트래픽을 모니터링",
        "네트워크 장비를 관리"
      ],
      answer: "내부 IP 주소를 외부 IP 주소로 변환",
      difficulty: "hard"
    },
    {
      question: "프로그래밍에서 '재귀 함수'의 주요 특징은 무엇인가?",
      options: [
        "자기 자신을 호출하는 함수",
        "반복문을 사용하는 함수",
        "다중 스레드를 사용하는 함수",
        "객체 지향 프로그래밍의 기본 요소"
      ],
      answer: "자기 자신을 호출하는 함수",
      difficulty: "hard"
    },
    {
      question: "운영체제에서 '데드락(Deadlock)'을 방지하기 위한 방법은 무엇인가?",
      options: [
        "자원 선점 불가 조건 제거",
        "메모리 용량 증가",
        "프로세스 종료",
        "디스크 백업"
      ],
      answer: "자원 선점 불가 조건 제거",
      difficulty: "hard"
    },
    {
      question: "엑셀에서 'VLOOKUP' 함수의 주요 기능은 무엇인가?",
      options: [
        "특정 값을 검색하여 해당 행의 데이터를 반환",
        "셀의 값을 합산",
        "셀의 값을 평균",
        "셀의 개수를 세기"
      ],
      answer: "특정 값을 검색하여 해당 행의 데이터를 반환",
      difficulty: "hard"
    },
    {
      question: "보안에서 '침입 탐지 시스템(IDS)'의 주요 기능은 무엇인가?",
      options: [
        "네트워크 트래픽을 모니터링하여 비정상적인 활동 감지",
        "데이터를 암호화",
        "사용자 인증",
        "악성 코드 제거"
      ],
      answer: "네트워크 트래픽을 모니터링하여 비정상적인 활동 감지",
      difficulty: "hard"
    },
    {
      question: "데이터베이스에서 '트리거(Trigger)'의 주요 용도는 무엇인가?",
      options: [
        "특정 이벤트 발생 시 자동으로 실행되는 프로시저",
        "데이터를 백업",
        "사용자 권한 관리",
        "데이터를 암호화"
      ],
      answer: "특정 이벤트 발생 시 자동으로 실행되는 프로시저",
      difficulty: "hard"
    },
    {
      question: "네트워크에서 'QoS(Quality of Service)'의 주요 목적은 무엇인가?",
      options: [
        "네트워크 성능을 보장",
        "데이터를 암호화",
        "네트워크 장비를 관리",
        "네트워크 대역폭을 증가"
      ],
      answer: "네트워크 성능을 보장",
      difficulty: "hard"
    },
    {
      question: "프로그래밍에서 '다형성(Polymorphism)'의 주요 이점은 무엇인가?",
      options: [
        "코드의 재사용성과 유연성 향상",
        "실행 속도 향상",
        "메모리 사용량 감소",
        "보안 강화"
      ],
      answer: "코드의 재사용성과 유연성 향상",
      difficulty: "hard"
    },
    {
      question: "운영체제에서 '가상 메모리'의 주요 목적은 무엇인가?",
      options: [
        "물리적 메모리 용량을 확장",
        "CPU 속도 향상",
        "디스크 용량 증가",
        "네트워크 속도 개선"
      ],
      answer: "물리적 메모리 용량을 확장",
      difficulty: "hard"
    },
    {
      question: "엑셀에서 '피벗 테이블'의 주요 기능은 무엇인가?",
      options: [
        "대량의 데이터를 요약하고 분석",
        "셀의 서식을 변경",
        "데이터를 정렬",
        "그래프를 생성"
      ],
      answer: "대량의 데이터를 요약하고 분석",
      difficulty: "hard"
    },
    {
      question: "보안에서 '암호화'의 주요 목적은 무엇인가?",
      options: [
        "데이터의 기밀성 보장",
        "데이터의 무결성 보장",
        "데이터의 가용성 보장",
        "데이터의 압축"
      ],
      answer: "데이터의 기밀성 보장",
      difficulty: "hard"
    },
    {
      question: "데이터베이스에서 '동시성 제어'의 주요 기법은 무엇인가?",
      options: [
        "잠금(Locking)",
        "백업",
        "복제",
        "파티셔닝"
      ],
      answer: "잠금(Locking)",
      difficulty: "hard"
    },
    {
      question: "네트워크에서 '라우터'의 주요 기능은 무엇인가?",
      options: [
        "패킷을 목적지로 전달",
        "데이터를 암호화",
        "네트워크 트래픽을 모니터링",
        "IP 주소를 할당"
      ],
      answer: "패킷을 목적지로 전달",
      difficulty: "hard"
    },
    {
      question: "프로그래밍에서 '알고리즘'의 주요 목적은 무엇인가?",
      options: [
        "문제를 해결하기 위한 단계적 절차",
        "코드의 실행 속도 향상",
        "메모리 사용량 감소",
        "보안 강화"
      ],
      answer: "문제를 해결하기 위한 단계적 절차",
      difficulty: "hard"
    },
    {
      question: "운영체제에서 '프로세스 스케줄링'의 주요 목적은 무엇인가?",
      options: [
        "CPU 사용 효율 극대화",
        "메모리 용량 증가",
        "디스크 속도 향상",
        "네트워크 대역폭 확장"
      ],
      answer: "CPU 사용 효율 극대화",
      difficulty: "hard"
    },
    {
      question: "엑셀에서 '조건부 서식'의 주요 기능은 무엇인가?",
      options: [
        "특정 조건을 만족하는 셀에 서식을 적용",
        "셀의 값을 합산",
        "셀의 값을 평균",
        "셀의 개수를 세기"
      ],
      answer: "특정 조건을 만족하는 셀에 서식을 적용",
      difficulty: "hard"
    },
    {
      question: "보안에서 '침입 방지 시스템(IPS)'의 주요 기능은 무엇인가?",
      options: [
        "비정상적인 활동을 감지하고 차단",
        "데이터를 암호화",
        "사용자 인증",
        "악성 코드 제거"
      ],
      answer: "비정상적인 활동을 감지하고 차단",
      difficulty: "hard"
    },
    {
      question: "일회용 패스워드로 로그인 할 때마다 일회성 패스워드를 생성하는 보안시스템을 무엇이라 하는가?",
      options: ["CMS", "KIOS", "OTP", "ATM"],
      answer: "OTP",
      difficulty: "hard"
    }
  ],
  sports: [
    //easy
    {
      question: "공과 네트를 사용해 코트에서 진행되며, 종종 '아름다운 게임'이라 불리는 스포츠는 무엇인가요?",
      options: ["농구", "축구", "배구", "테니스"],
      answer: "축구",
      difficulty: "easy"
    },
    {
      question: "작은 흰 공을 잔디 코스의 홀에 넣는 스포츠는 무엇인가요?",
      options: ["골프", "하키", "야구", "크리켓"],
      answer: "골프",
      difficulty: "easy"
    },
    {
      question: "4년마다 열리는 주요 국제 축구 토너먼트의 이름은 무엇인가요?",
      options: ["슈퍼볼", "월드컵", "윔블던", "스탠리컵"],
      answer: "월드컵",
      difficulty: "easy"
    },
    {
      question: "테니스에서 공을 치는 데 사용하는 장비는 무엇인가요?",
      options: ["배트", "라켓", "스틱", "클럽"],
      answer: "라켓",
      difficulty: "easy"
    },
    {
      question: "농구에서 3점 라인 너머에서 던진 슛은 몇 점인가요?",
      options: ["1", "2", "3", "4"],
      answer: "3",
      difficulty: "easy"
    },
    {
      question: "수영, 사이클링, 달리기를 하나의 경기에서 진행하는 스포츠는 무엇인가요?",
      options: ["트라이애슬론", "데카슬론", "펜타슬론", "마라톤"],
      answer: "트라이애슬론",
      difficulty: "easy"
    },
    {
      question: "브라질과 함께 월드컵 3회 우승을 차지하며 '축구의 왕'으로 알려진 선수는 누구인가요?",
      options: ["리오넬 메시", "크리스티아누 호날두", "펠레", "디에고 마라도나"],
      answer: "펠레",
      difficulty: "easy"
    },
    {
      question: "운동선수들이 400미터 타원형 트랙을 달리는 스포츠는 무엇인가요?",
      options: ["수영", "육상", "체조", "사이클링"],
      answer: "육상",
      difficulty: "easy"
    },
    {
      question: "야구에서 공을 치는 데 사용하는 배트의 이름은 무엇인가요?",
      options: ["클럽", "스틱", "배트", "라켓"],
      answer: "배트",
      difficulty: "easy"
    },
    {
      question: "얼음 위에서 퍽과 스틱으로 진행되는 스포츠는 무엇인가요?",
      options: ["축구", "아이스하키", "농구", "럭비"],
      answer: "아이스하키",
      difficulty: "easy"
    },
    {
      question: "무거운 공으로 핀을 쓰러뜨리는 스포츠는 무엇인가요?",
      options: ["볼링", "당구", "다트", "골프"],
      answer: "볼링",
      difficulty: "easy"
    },
    {
      question: "축구 경기에서 한 팀이 필드에 내보낼 수 있는 최대 선수 수는 몇 명인가요?",
      options: ["7", "9", "11", "13"],
      answer: "11",
      difficulty: "easy"
    },
    {
      question: "4년마다 열리는 세계 최대의 멀티스포츠 이벤트는 무엇인가요?",
      options: ["FIFA 월드컵", "올림픽", "슈퍼볼", "투르 드 프랑스"],
      answer: "올림픽",
      difficulty: "easy"
    },
    {
      question: "테니스에서 점수가 0일 때 사용하는 용어는 무엇인가요?",
      options: ["러브", "제로", "닐", "포인트"],
      answer: "러브",
      difficulty: "easy"
    },
    {
      question: "수영에서 가장 기본적인 영법은 무엇인가요?",
      options: ["자유형", "배영", "평영", "접영"],
      answer: "자유형",
      difficulty: "easy"
    },
    {
      question: "농구 코트에서 골대 높이는 몇 미터인가요?",
      options: ["2미터", "2.5미터", "3미터", "3.05미터"],
      answer: "3.05미터",
      difficulty: "easy"
    },
    {
      question: "올림픽에서 금, 은, 동 메달을 수여하는 경기는 무엇인가요?",
      options: ["친선 경기", "예선 경기", "결승 경기", "오프닝 경기"],
      answer: "결승 경기",
      difficulty: "easy"
    },
    {
      question: "야구에서 한 팀이 한 이닝에 공격할 수 있는 아웃카운트는 몇 개인가요?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      difficulty: "easy"
    },
    {
      question: "탁구에서 공을 치는 데 사용하는 도구는 무엇인가요?",
      options: ["패들", "라켓", "배트", "스틱"],
      answer: "패들",
      difficulty: "easy"
    },
    {
      question: "권투 경기가 진행되는 장소는 무엇이라고 하나요?",
      options: ["코트", "링", "필드", "트랙"],
      answer: "링",
      difficulty: "easy"
    },
    {
      question: "배구에서 한 팀의 필드 내 선수 수는 몇 명인가요?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      difficulty: "easy"
    },
    {
      question: "스키와 스노보드를 포함하는 겨울 스포츠는 어떤 대회에서 주로 볼 수 있나요?",
      options: ["하계 올림픽", "동계 올림픽", "월드컵", "코먼웰스 게임"],
      answer: "동계 올림픽",
      difficulty: "easy"
    },
    {
      question: "축구에서 골키퍼가 주로 사용하는 신체 부위는 무엇인가요?",
      options: ["발", "손", "머리", "어깨"],
      answer: "손",
      difficulty: "easy"
    },
    {
      question: "테니스에서 한 세트는 보통 몇 게임을 이겨야 하나요?",
      options: ["4", "5", "6", "7"],
      answer: "6",
      difficulty: "easy"
    },
    {
      question: "마라톤의 공식 거리는 약 몇 킬로미터인가요?",
      options: ["21킬로미터", "42킬로미터", "50킬로미터", "100킬로미터"],
      answer: "42킬로미터",
      difficulty: "easy"
    },
    {
      question: "배드민턴에서 공 대신 사용하는 것은 무엇인가요?",
      options: ["볼", "셔틀콕", "퍽", "디스크"],
      answer: "셔틀콕",
      difficulty: "easy"
    },
    {
      question: "체조에서 선수들이 공연하는 장소는 무엇이라고 하나요?",
      options: ["매트", "링", "코트", "트랙"],
      answer: "매트",
      difficulty: "easy"
    },
    {
      question: "럭비에서 공을 운반하며 득점하려는 동작은 무엇인가요?",
      options: ["킥", "패스", "트라이", "슛"],
      answer: "트라이",
      difficulty: "easy"
    },
    {
      question: "골프에서 홀에 공을 넣는 데 성공한 횟수를 무엇이라고 하나요?",
      options: ["스트로크", "슛", "킥", "포인트"],
      answer: "스트로크",
      difficulty: "easy"
    },
    {
      question: "수영 경기에서 선수들이 출발할 때 뛰어드는 장소는 무엇인가요?",
      options: ["다이빙 보드", "스타팅 블록", "플랫폼", "레인"],
      answer: "스타팅 블록",
      difficulty: "easy"
    },
    //medium
    {
      question: "축구에서 오프사이드 규칙이 공식적으로 도입된 시기는 언제인가요?",
      options: ["1863년", "1902년", "1925년", "1950년"],
      answer: "1863년",
      difficulty: "medium"
    },
    {
      question: "농구에서 한 팀이 한 쿼터에 요청할 수 있는 타임아웃 횟수는 최대 몇 번인가요?",
      options: ["2번", "3번", "4번", "5번"],
      answer: "3번",
      difficulty: "medium"
    },
    {
      question: "테니스 그랜드슬램 대회 중 클레이 코트에서 열리는 대회는 무엇인가요?",
      options: ["윔블던", "US 오픈", "프랑스 오픈", "호주 오픈"],
      answer: "프랑스 오픈",
      difficulty: "medium"
    },
    {
      question: "야구에서 투수가 한 타자에게 연속으로 세 번 스트라이크를 던지면 무엇이라고 하나요?",
      options: ["스트라이크아웃", "파울볼", "홈런", "볼넷"],
      answer: "스트라이크아웃",
      difficulty: "medium"
    },
    {
      question: "수영에서 4가지 영법(자유형, 배영, 평영, 접영)을 모두 포함하는 경기는 무엇인가요?",
      options: ["혼계영", "개인혼영", "자유형 릴레이", "배영 릴레이"],
      answer: "개인혼영",
      difficulty: "medium"
    },
    {
      question: "올림픽에서 남자 축구 금메달을 가장 많이 획득한 국가는 어디인가요?",
      options: ["브라질", "아르헨티나", "헝가리", "영국"],
      answer: "헝가리",
      difficulty: "medium"
    },
    {
      question: "배구에서 서브를 넣은 팀이 즉시 득점하지 않고 공을 주고받는 상황을 무엇이라고 하나요?",
      options: ["랠리", "블록", "디그", "스파이크"],
      answer: "랠리",
      difficulty: "medium"
    },
    {
      question: "탁구에서 공식 경기용 탁구대의 길이는 몇 미터인가요?",
      options: ["2.44미터", "2.74미터", "3.05미터", "3.66미터"],
      answer: "2.74미터",
      difficulty: "medium"
    },
    {
      question: "아이스하키에서 한 팀이 페널티로 인해 선수가 줄어들 때를 무엇이라고 하나요?",
      options: ["파워 플레이", "쇼트핸디드", "오버타임", "슛아웃"],
      answer: "쇼트핸디드",
      difficulty: "medium"
    },
    {
      question: "골프에서 파보다 한 타 적게 홀을 마무리한 경우를 무엇이라고 하나요?",
      options: ["이글", "버디", "파", "보기"],
      answer: "버디",
      difficulty: "medium"
    },
    {
      question: "FIFA 월드컵에서 여성 대회가 처음 열린 연도는 언제인가요?",
      options: ["1987년", "1991년", "1995년", "1999년"],
      answer: "1991년",
      difficulty: "medium"
    },
    {
      question: "테니스에서 한 플레이어가 한 세트에서 모든 게임을 이기는 경우를 무엇이라고 하나요?",
      options: ["골든 세트", "퍼펙트 세트", "스트레이트 세트", "완벽 세트"],
      answer: "골든 세트",
      difficulty: "medium"
    },
    {
      question: "야구에서 한 시즌에 40홈런과 40도루를 동시에 달성한 기록을 무엇이라고 하나요?",
      options: ["40-40 클럽", "듀얼 클럽", "홈런-도루 클럽", "골든 레코드"],
      answer: "40-40 클럽",
      difficulty: "medium"
    },
    {
      question: "수영 릴레이 경기에서 한 팀은 몇 명의 선수로 구성되나요?",
      options: ["2명", "3명", "4명", "5명"],
      answer: "4명",
      difficulty: "medium"
    },
    {
      question: "농구에서 공을 바닥에 튕기며 이동하는 동작을 무엇이라고 하나요?",
      options: ["패스", "드리블", "슛", "리바운드"],
      answer: "드리블",
      difficulty: "medium"
    },
    {
      question: "올림픽 마라톤 코스의 공식 거리는 몇 킬로미터인가요?",
      options: ["40킬로미터", "42.195킬로미터", "45킬로미터", "50킬로미터"],
      answer: "42.195킬로미터",
      difficulty: "medium"
    },
    {
      question: "배드민턴에서 한 게임은 보통 몇 점까지 진행되나요?",
      options: ["15점", "21점", "25점", "30점"],
      answer: "21점",
      difficulty: "medium"
    },
    {
      question: "권투에서 경기 중 선수가 쓰러져 10초 안에 일어나지 못하면 무엇이라고 하나요?",
      options: ["녹아웃", "테크니컬 녹아웃", "포인트 아웃", "디스퀄리피케이션"],
      answer: "녹아웃",
      difficulty: "medium"
    },
    {
      question: "축구에서 페널티 킥은 골문에서 몇 미터 떨어진 지점에서 실행되나요?",
      options: ["9미터", "11미터", "12미터", "15미터"],
      answer: "11미터",
      difficulty: "medium"
    },
    {
      question: "테니스에서 윔블던 대회는 어떤 표면에서 진행되나요?",
      options: ["클레이", "하드코트", "잔디", "카펫"],
      answer: "잔디",
      difficulty: "medium"
    },
    {
      question: "아이스하키에서 정규 경기 시간이 끝난 후 동점을 해결하기 위해 진행되는 시간은 무엇인가요?",
      options: ["오버타임", "슛아웃", "파워 플레이", "페널티 타임"],
      answer: "오버타임",
      difficulty: "medium"
    },
    {
      question: "골프에서 한 홀을 기준 타수보다 두 타 더 많이 친 경우를 무엇이라고 하나요?",
      options: ["버디", "보기", "더블 보기", "트리플 보기"],
      answer: "더블 보기",
      difficulty: "medium"
    },
    {
      question: "배구에서 한 세트는 보통 몇 점에서 승리하나요?",
      options: ["15점", "21점", "25점", "30점"],
      answer: "25점",
      difficulty: "medium"
    },
    {
      question: "탁구에서 한 선수가 연속으로 서브를 할 수 있는 횟수는 몇 번인가요?",
      options: ["1번", "2번", "3번", "4번"],
      answer: "2번",
      difficulty: "medium"
    },
    {
      question: "스키 점프 경기에서 점수는 어떤 두 가지 요소를 기준으로 매겨지나요?",
      options: ["속도와 높이", "거리와 스타일", "시간과 정확도", "점프와 착지"],
      answer: "거리와 스타일",
      difficulty: "medium"
    },
    {
      question: "농구에서 한 선수가 한 경기에서 10점 이상, 10리바운드 이상, 10어시스트 이상을 기록하면 무엇이라고 하나요?",
      options: ["더블더블", "트리플더블", "쿼드러플더블", "퍼펙트 게임"],
      answer: "트리플더블",
      difficulty: "medium"
    },
    {
      question: "축구에서 UEFA 챔피언스 리그는 어떤 팀들이 참가하나요?",
      options: ["국가 대표팀", "클럽 팀", "아마추어 팀", "청소년 팀"],
      answer: "클럽 팀",
      difficulty: "medium"
    },
    {
      question: "테니스에서 한 플레이어가 상대의 서브를 받아 바로 득점하는 샷을 무엇이라고 하나요?",
      options: ["에이스", "리턴 에이스", "볼리", "드롭샷"],
      answer: "리턴 에이스",
      difficulty: "medium"
    },
    {
      question: "야구에서 한 이닝에 양 팀 모두 3아웃을 당하면 이닝이 종료되는데, 이를 몇 번째 아웃이라고 하나요?",
      options: ["3번째", "6번째", "9번째", "12번째"],
      answer: "6번째",
      difficulty: "medium"
    },
    {
      question: "올림픽에서 체조 경기의 남자 종목 중 하나로, 두 개의 바를 사용하는 경기는 무엇인가요?",
      options: ["평행봉", "철봉", "도마", "마루"],
      answer: "평행봉",
      difficulty: "medium"
    },
    //hard
    {
      question: "축구에서 FIFA가 오프사이드 규칙을 수정하여 '수동적 오프사이드' 개념을 명확히 한 연도는 언제인가요?",
      options: ["1990년", "2005년", "2013년", "2018년"],
      answer: "2005년",
      difficulty: "hard"
    },
    {
      question: "농구에서 NBA 역사상 단일 경기 최다 어시스트 기록을 보유한 선수는 누구인가요?",
      options: ["매직 존슨", "존 스탁턴", "스코티 핍펀", "크리스 폴"],
      answer: "스코티 핍펀",
      difficulty: "hard"
    },
    {
      question: "테니스에서 그랜드슬램 단식 타이틀을 가장 많이 획득한 여자 선수는 누구인가요?",
      options: ["세리나 윌리엄스", "마거릿 코트", "슈테피 그라프", "마르티나 나브라틸로바"],
      answer: "마거릿 코트",
      difficulty: "hard"
    },
    {
      question: "야구에서 MLB 역사상 한 시즌 최다 세이브 기록을 보유한 투수는 누구인가요?",
      options: ["마리아노 리베라", "프란시스코 로드리게스", "트레버 호프먼", "빌리 와그너"],
      answer: "프란시스코 로드리게스",
      difficulty: "hard"
    },
    {
      question: "수영에서 올림픽 남자 100m 자유형에서 47초대의 기록을 처음 세운 선수는 누구인가요?",
      options: ["마이클 펠프스", "세자르 시엘루", "알랭 베르나르", "케이레브 드레셀"],
      answer: "세자르 시엘루",
      difficulty: "hard"
    },
    {
      question: "올림픽 역사상 하계 올림픽과 동계 올림픽에서 모두 메달을 획득한 유일한 선수는 누구인가요?",
      options: ["에디 이건", "클라라 휴스", "크리스토프 비겐", "올레 에이나르 비에른달렌"],
      answer: "에디 이건",
      difficulty: "hard"
    },
    {
      question: "배구에서 국제 경기에서 리베로 선수가 착용하는 유니폼 색상은 일반적으로 무엇과 달라야 하나요?",
      options: ["코트 색상", "팀 유니폼 색상", "심판 유니폼 색상", "관중 색상"],
      answer: "팀 유니폼 색상",
      difficulty: "hard"
    },
    {
      question: "탁구에서 ITTF가 공식 경기용 공의 직경을 38mm에서 40mm로 변경한 연도는 언제인가요?",
      options: ["1995년", "2000년", "2005년", "2010년"],
      answer: "2000년",
      difficulty: "hard"
    },
    {
      question: "아이스하키에서 NHL 역사상 한 시즌 최다 골 기록을 보유한 선수는 누구인가요?",
      options: ["웨인 그레츠키", "마이크 보시", "브렛 헐", "마리오 르뮤"],
      answer: "웨인 그레츠키",
      difficulty: "hard"
    },
    {
      question: "골프에서 메이저 대회 중 '마스터스'가 열리는 골프 코스의 이름은 무엇인가요?",
      options: ["페블 비치", "오거스타 내셔널", "세인트 앤드류스", "무이필드"],
      answer: "오거스타 내셔널",
      difficulty: "hard"
    },
    {
      question: "FIFA 월드컵에서 단일 대회 최다 골 기록을 보유한 선수는 누구인가요?",
      options: ["펠레", "게르트 뮐러", "주스트 퐁텐", "로날두"],
      answer: "주스트 퐁텐",
      difficulty: "hard"
    },
    {
      question: "테니스에서 한 선수가 모든 그랜드슬램 대회를 같은 해에 우승한 것을 무엇이라고 하나요?",
      options: ["골든 슬램", "캘린더 슬램", "그랜드 슬램", "퍼펙트 슬램"],
      answer: "캘린더 슬램",
      difficulty: "hard"
    },
    {
      question: "야구에서 MLB 역사상 한 경기에서 4홈런을 기록한 최초의 선수는 누구인가요?",
      options: ["베이브 루스", "루 게릭", "바비 로우", "윌리 메이스"],
      answer: "바비 로우",
      difficulty: "hard"
    },
    {
      question: "수영에서 올림픽 혼계영 릴레이에서 첫 번째 영법은 무엇인가요?",
      options: ["자유형", "배영", "평영", "접영"],
      answer: "배영",
      difficulty: "hard"
    },
    {
      question: "농구에서 NBA 파이널 MVP 상을 가장 많이 수상한 선수는 누구인가요?",
      options: ["마이클 조던", "레브론 제임스", "매직 존슨", "코비 브라이언트"],
      answer: "마이클 조던",
      difficulty: "hard"
    },
    {
      question: "올림픽에서 펜싱 종목 중 에페와 플뢰레를 제외한 세 번째 종목은 무엇인가요?",
      options: ["사브르", "랩이어", "커틀러스", "듀얼"],
      answer: "사브르",
      difficulty: "hard"
    },
    {
      question: "배드민턴에서 셔틀콕의 공식 무게는 몇 그램인가요?",
      options: ["4.74~5.50그램", "5.50~6.25그램", "6.25~7.00그램", "7.00~7.75그램"],
      answer: "4.74~5.50그램",
      difficulty: "hard"
    },
    {
      question: "권투에서 올림픽 금메달을 획득한 후 프로 세계 챔피언이 된 최초의 한국 선수는 누구인가요?",
      options: ["김기수", "홍수환", "유제두", "최요삼"],
      answer: "홍수환",
      difficulty: "hard"
    },
    {
      question: "축구에서 UEFA 챔피언스 리그 역사상 한 시즌 최다 골 기록을 보유한 선수는 누구인가요?",
      options: ["리오넬 메시", "크리스티아누 호날두", "라울", "로베르트 레반도프스키"],
      answer: "크리스티아누 호날두",
      difficulty: "hard"
    },
    {
      question: "테니스에서 윔블던 단식 우승자가 받는 트로피의 이름은 무엇인가요?",
      options: ["챌린지 컵", "비너스 로즈워터 디시", "노먼 브룩스 챌린지 컵", "대비너스 트로피"],
      answer: "비너스 로즈워터 디시",
      difficulty: "hard"
    },
    {
      question: "아이스하키에서 NHL 플레이오프 우승 팀이 받는 트로피는 무엇인가요?",
      options: ["캘더 컵", "스탠리 컵", "프레지던츠 트로피", "콘 스마이스 트로피"],
      answer: "스탠리 컵",
      difficulty: "hard"
    },
    {
      question: "골프에서 PGA 투어 역사상 한 시즌 최다 우승 기록을 보유한 선수는 누구인가요?",
      options: ["타이거 우즈", "벤 호건", "바이런 넬슨", "잭 니클라우스"],
      answer: "바이런 넬슨",
      difficulty: "hard"
    },
    {
      question: "배구에서 국제 경기에서 한 팀이 한 세트에서 요청할 수 있는 최대 교체 횟수는 몇 번인가요?",
      options: ["4번", "6번", "8번", "10번"],
      answer: "6번",
      difficulty: "hard"
    },
    {
      question: "탁구에서 국제 대회에서 사용되는 공의 색상은 무엇인가요?",
      options: ["흰색 또는 주황색", "흰색 또는 빨간색", "흰색 또는 파란색", "흰색 또는 검정색"],
      answer: "흰색 또는 주황색",
      difficulty: "hard"
    },
    {
      question: "스키 알파인 경기에서 가장 빠른 속도를 기록하는 종목은 무엇인가요?",
      options: ["활강", "슈퍼대회전", "대회전", "회전"],
      answer: "활강",
      difficulty: "hard"
    },
    {
      question: "농구에서 NBA 역사상 한 경기 최다 리바운드 기록을 보유한 선수는 누구인가요?",
      options: ["윌트 체임벌린", "빌 러셀", "데니스 로드먼", "샤킬 오닐"],
      answer: "윌트 체임벌린",
      difficulty: "hard"
    },
    {
      question: "축구에서 월드컵 역사상 단일 경기 최다 관중 기록을 세운 경기는 어느 해의 결승전인가요?",
      options: ["1950년", "1970년", "1986년", "2002년"],
      answer: "1950년",
      difficulty: "hard"
    },
    {
      question: "테니스에서 그랜드슬램 대회 중 가장 긴 결승전(시간 기준)을 기록한 대회는 무엇인가요?",
      options: ["2008년 윔블던", "2012년 호주 오픈", "2010년 프랑스 오픈", "2009년 US 오픈"],
      answer: "2012년 호주 오픈",
      difficulty: "hard"
    },
    {
      question: "야구에서 MLB 역사상 한 시즌 최다 타점을 기록한 선수는 누구인가요?",
      options: ["베이브 루스", "행크 애런", "해크 윌슨", "루 게릭"],
      answer: "해크 윌슨",
      difficulty: "hard"
    },
    {
      question: "올림픽 체조에서 여자 종목 중 4개의 기구를 모두 포함하는 경기는 무엇인가요?",
      options: ["개인종합", "단체종합", "기구별 결선", "마루운동"],
      answer: "개인종합",
      difficulty: "hard"
    }
  ],

  literature:[
    {
      //easy
      question: "'돈키호테'의 저자는 누구인가요?",
      options: ["돈키호테 도플라밍고", "김경식", "미겔 데 세르반테스", "하비에르 마리아스"],
      answer: "미겔 데 세르반테스",
      difficulty: "easy"
    },
    {
      question: "'난쟁이가 쏘아 올린 작은 공'의 저자는 누구인가요?",
      options: ["김동인", "조세희", "이문열", "박완서"],
      answer: "조세희",
      difficulty: "easy"
    },
    {
      question: "셰익스피어의 유명한 비극 '햄릿'의 주인공은 누구인가요?",
      options: ["로미오", "햄릿", "리어왕", "맥베스"],
      answer: "햄릿",
      difficulty: "easy"
    },
    {
      question: "'어린 왕자'의 저자는 누구인가요?",
      options: ["안데르센", "생텍쥐페리", "톨킨", "셰익스피어"],
      answer: "생텍쥐페리",
      difficulty: "easy"
    },
    {
      question: "'홍길동전'의 주인공은 누구인가요?",
      options: ["김유신", "홍길동", "이순신", "강감찬"],
      answer: "홍길동",
      difficulty: "easy"
    },
    {
      question: "'오즈의 마법사'에서 도로시가 가고 싶어 한 곳은 어디인가요?",
      options: ["학교", "놀이공원", "집", "왕국"],
      answer: "집",
      difficulty: "easy"
    },
    {
      question: "'이상한 나라의 앨리스'에서 앨리스가 따라간 동물은 무엇인가요?",
      options: ["검은 고양이", "흰 토끼", "갈색 여우", "파란 새"],
      answer: "흰 토끼",
      difficulty: "easy"
    },
    {
      question: "'노인과 바다'의 주인공은 누구인가요?",
      options: ["산티아고", "마누엘", "페드로", "호세"],
      answer: "산티아고",
      difficulty: "easy"
    },
    {
      question: "'파우스트'의 저자는 누구인가요?",
      options: ["괴테", "셰익스피어", "단테", "호메로스"],
      answer: "괴테",
      difficulty: "easy"
    },
    {
      question: "'이방인'의 저자는 누구인가요?",
      options: ["알베르 카뮈", "장 폴 사르트르", "프란츠 카프카", "허먼 멜빌"],
      answer: "알베르 카뮈",
      difficulty: "easy"
    },
    {
      question: "'모비 딕'에서 에이해브 선장이 쫓는 동물은 무엇인가요?",
      options: ["상어", "고래", "오징어", "악어"],
      answer: "고래",
      difficulty: "easy"
    },
    {
      question: "'데미안'의 저자는 누구인가요?",
      options: ["헤르만 헤세", "토마스 만", "프란츠 카프카", "F. 스콧 피츠제럴드"],
      answer: "헤르만 헤세",
      difficulty: "easy"
    },
    {
      question: "'셜록 홈즈' 시리즈에서 홈즈의 친구는 누구인가요?",
      options: ["왓슨", "모리아티", "레스트레이드", "지킬"],
      answer: "왓슨",
      difficulty: "easy"
    },
    {
      question: "'레 미제라블'의 주인공은 누구인가요?",
      options: ["장발장", "가브로슈", "코제트", "자베르"],
      answer: "장발장",
      difficulty: "easy"
    },
    {
      question: "'변신'에서 그레고르가 변한 것은 무엇인가요?",
      options: ["개", "바퀴벌레", "쥐", "새"],
      answer: "바퀴벌레",
      difficulty: "easy"
    },
    {
      question: "'해리포터' 시리즈에서 해리가 다닌 학교는 어디인가요?",
      options: ["하버드", "호그와트", "네버랜드", "단국대"],
      answer: "호그와트",
      difficulty: "easy"
    },
    {
      question: "'위대한 개츠비'에서 개츠비가 사랑한 여인은 누구인가요?",
      options: ["메리", "데이지", "로라", "제인"],
      answer: "데이지",
      difficulty: "easy"
    },
    {
      question: "'로빈슨 크루소'에서 로빈슨이 표류한 곳은 어디인가요?",
      options: ["도시", "섬", "산", "강"],
      answer: "섬",
      difficulty: "easy"
    },
    {
      question: "'헨젤과 그레텔'에서 마녀의 집은 무엇으로 만들어졌나요?",
      options: ["초콜릿", "과자", "나무", "벽돌"],
      answer: "과자",
      difficulty: "easy"
    },
    {
      question: "'백설공주'에서 왕비가 백설공주에게 준 것은 무엇인가요?",
      options: ["사탕", "빵", "사과", "포도"],
      answer: "사과",
      difficulty: "easy"
    },
    {
      question: "'미녀와 야수'에서 야수는 원래 무엇이었나요?",
      options: ["마법사", "괴물", "왕자", "기사"],
      answer: "왕자",
      difficulty: "easy"
    },
    {
      question: "'브레멘 음악대'에 등장하는 동물 중 하나는 무엇인가요?",
      options: ["양", "고양이", "소", "돼지"],
      answer: "고양이",
      difficulty: "easy"
    },
    {
      question: "'아기 돼지 삼형제'에서 셋째 돼지가 집을 지은 재료는 무엇인가요?",
      options: ["짚", "나무", "벽돌", "흙"],
      answer: "벽돌",
      difficulty: "easy"
    },
    {
      question: "'라푼젤'에서 라푼젤이 갇힌 곳은 어디인가요?",
      options: ["탑", "성", "마을", "섬"],
      answer: "탑",
      difficulty: "easy"
    },
    {
      question: "'이솝 우화'에서 토끼와 거북이 경주에서 이긴 동물은 누구인가요?",
      options: ["토끼", "거북이", "여우", "사슴"],
      answer: "거북이",
      difficulty: "easy"
    },
    {
      question: "'신데렐라'에서 마차로 변한 것은 무엇인가요?",
      options: ["호박", "바퀴", "돌", "나무"],
      answer: "호박",
      difficulty: "easy"
    },
    {
      question: "'알라딘의 요술램프'에서 램프에 사는 요정의 이름은 무엇인가요?",
      options: ["지니", "도비", "스머프", "아부"],
      answer: "지니",
      difficulty: "easy"
    },
    {
      question: "'신데렐라'에서 마법이 풀리는 시간은 언제인가요?",
      options: ["11시", "12시", "1시", "2시"],
      answer: "12시",
      difficulty: "easy"
    },
    {
      question: "'피노키오'에서 피노키오의 코가 길어지는 이유는 무엇인가요?",
      options: ["밥을 안 먹어서", "거짓말을 해서", "말을 많이 해서", "춤을 춰서"],
      answer: "거짓말을 해서",
      difficulty: "easy"
    },
    {
      question: "'백조 왕자'에서 엘리사가 오빠들을 구하기 위해 한 일은 무엇인가요?",
      options: ["마녀와 계약했다", "마법의 성을 찾았다", "쐐기풀로 옷을 짰다", "용의 심장을 구했다"],
      answer: "쐐기풀로 옷을 짰다",
      difficulty: "easy"
    },
    //medium
    {
      question: "소설 '날개'의 주요 주제는 무엇인가요?",
      options: ["사랑의 비극", "도시인의 소외와 허무", "자연과의 조화", "혁명적 열정"],
      answer: "도시인의 소외와 허무",
      difficulty: "medium"
    },
    {
      question: "'로미오와 줄리엣'에서 로미오와 줄리엣의 죽음을 초래한 주요 원인은 무엇인가요?",
      options: ["가문 간의 적대", "전염병", "전쟁", "경제적 파탄"],
      answer: "가문 간의 적대",
      difficulty: "medium"
    },
    {
      question: "'안나 카레니나'의 시대적 배경은 언제인가요?",
      options: ["17세기 러시아", "19세기 러시아", "20세기 러시아", "18세기 프랑스"],
      answer: "19세기 러시아",
      difficulty: "medium"
    },
    {
      question: "소설 '운수 좋은 날'에서 김 첨지의 비극적 결말은 무엇인가요?",
      options: ["가족의 재회", "아내의 죽음", "부자의 후원", "도시로의 이주"],
      answer: "아내의 죽음",
      difficulty: "medium"
    },
    {
      question: "'광장'에서 이명준이 남한과 북한을 모두 거부한 이유는 무엇인가요?",
      options: ["이념적 갈등", "경제적 빈곤", "가족의 배신", "종교적 신념"],
      answer: "이념적 갈등",
      difficulty: "medium"
    },
    {
      question: "박인환의 시 '목마와 숙녀'에서 주요 배경은 무엇인가요?",
      options: ["시골 마을", "도시의 밤", "전쟁터", "바닷가"],
      answer: "도시의 밤",
      difficulty: "medium"
    },
    {
      question: "소설 '메밀꽃 필 무렵'의 주요 정서는 무엇인가요?",
      options: ["혁명적 열정", "낭만적 사랑", "도시의 소외", "종교적 헌신"],
      answer: "낭만적 사랑",
      difficulty: "medium"
    },
    {
      question: "이육사의 시 '청포도'에서 '청포도'는 무엇을 상징하나요?",
      options: ["조국의 희망", "사랑의 열망", "전쟁의 고통", "개인의 자유"],
      answer: "조국의 희망",
      difficulty: "medium"
    },
    {
      question: "김소월의 시 '진달래꽃'에서 화자가 떠나는 연인에게 바라는 것은 무엇인가요?",
      options: ["복수", "재회", "행복", "고통"],
      answer: "행복",
      difficulty: "medium"
    },
    {
      question: "김춘수의 시 '꽃'에서 '이름을 불러줌'이 상징하는 것은 무엇인가요?",
      options: ["죽음의 극복", "존재의 인정", "사랑의 시작", "자유의 획득"],
      answer: "존재의 인정",
      difficulty: "medium"
    },
    {
      question: "이상의 소설 '날개'에서 주인공이 마지막에 바라는 것은 무엇인가요?",
      options: ["부와 명예", "자유로운 비상", "가족의 화합", "사회적 인정"],
      answer: "자유로운 비상",
      difficulty: "medium"
    },
    {
      question: "윤동주의 시 '서시'에서 화자가 부끄럼 없이 살기 위해 우러러보는 것은 무엇인가요?",
      options: ["별", "하늘", "산", "바다"],
      answer: "하늘",
      difficulty: "medium"
    },
    {
      question: "'광장'에서 이명준이 최종적으로 선택한 것은 무엇인가요?",
      options: ["북한의 감옥", "남한의 자유", "바다", "제3국"],
      answer: "바다",
      difficulty: "medium"
    },
    {
      question: "한용운의 '님의 침묵'에서 '님'이 돌아올 것이라는 화자의 믿음은 무엇을 나타내나요?",
      options: ["사랑의 회복", "조국의 독립", "종교적 구원", "개인의 성취"],
      answer: "조국의 독립",
      difficulty: "medium"
    },
    {
      question: "'광장'의 시대적 배경은 무엇인가요?",
      options: ["일제강점기", "6.25 전쟁 이후", "1980년대 민주화 운동", "2000년대 디지털 시대"],
      answer: "6.25 전쟁 이후",
      difficulty: "medium"
    },
    {
      question: "김수영의 시 '풀'에서 '풀'이 짓밟혀도 일어나는 모습은 무엇을 나타내나요?",
      options: ["민중의 저항", "자연의 순환", "개인의 나약함", "전쟁의 잔혹함"],
      answer: "민중의 저항",
      difficulty: "medium"
    },
    {
      question: "이형기의 시 '낙화'에서 '꽃'이 지는 모습은 무엇을 상징하나요?",
      options: ["새로운 시작", "사랑의 영속", "젊음의 소멸", "정치적 변화"],
      answer: "젊음의 소멸",
      difficulty: "medium"
    },
    {
      question: "단테의 '신곡'에서 주인공이 여행하는 세 영역은 무엇인가요?",
      options: ["지옥, 연옥, 천국", "과거, 현재, 미래", "바다, 산, 하늘", "도시, 시골, 숲"],
      answer: "지옥, 연옥, 천국",
      difficulty: "medium"
    },
    {
      question: "'1984'에서 빅 브라더가 상징하는 것은 무엇인가요?",
      options: ["자유의 수호자", "절대적 감시와 통제", "혁명적 리더", "종교적 구원자"],
      answer: "절대적 감시와 통제",
      difficulty: "medium"
    },
    {
      question: "셰익스피어의 '십이야'에서 비올라가 남장을 한 이유는 무엇인가요?",
      options: ["전쟁 준비", "생존과 안전", "연인의 속임수", "왕의 명령"],
      answer: "생존과 안전",
      difficulty: "medium"
    },
    {
      question: "'변신'에서 그레고르가 벌레로 변한 후 가족의 궁극적 행동은 무엇인가요?",
      options: ["그를 돌본다", "그를 버린다", "그를 치료하려 한다", "그를 숨긴다"],
      answer: "그를 버린다",
      difficulty: "medium"
    },
    {
      question: "'노인과 바다'에서 산티아고의 청새치 사투는 무엇을 상징하나요?",
      options: ["경제적 성공", "인간의 불굴의 의지", "과학적 발견", "사회적 화합"],
      answer: "인간의 불굴의 의지",
      difficulty: "medium"
    },
    {
      question: "'폭풍의 언덕'에서 히스클리프와 캐서린의 사랑은 어떤 특징을 가지나요?",
      options: ["평온하고 안정적", "파괴적이고 격정적", "이성적이고 계산적", "종교적이고 헌신적"],
      answer: "파괴적이고 격정적",
      difficulty: "medium"
    },
    {
      question: "'프랑켄슈타인'에서 빅터 프랑켄슈타인이 괴물을 만든 동기는 무엇인가요?",
      options: ["사랑의 추구", "과학적 호기심", "복수심", "경제적 이익"],
      answer: "과학적 호기심",
      difficulty: "medium"
    },
    {
      question: "'레 미제라블'에서 장발장이 처음 죄를 지은 이유는 무엇인가요?",
      options: ["살인", "빵 절도", "반역", "사기"],
      answer: "빵 절도",
      difficulty: "medium"
    },
    {
      question: "'파우스트'에서 파우스트가 악마와 계약한 목적은 무엇인가요?",
      options: ["영원한 젊음", "무한한 지식과 쾌락", "재산의 축적", "가족의 부활"],
      answer: "무한한 지식과 쾌락",
      difficulty: "medium"
    },
    {
      question: "'파리 대왕'에서 아이들의 사회 붕괴는 무엇을 드러내나요?",
      options: ["문명의 진보", "인간 본성의 야만성", "교육의 중요성", "종교의 필요성"],
      answer: "인간 본성의 야만성",
      difficulty: "medium"
    },
    {
      question: "'시간의 주름'에서 메그와 찰스가 우주를 여행한 이유는 무엇인가요?",
      options: ["아버지 구출", "보물 탐색", "전쟁 회피", "과학 실험"],
      answer: "아버지 구출",
      difficulty: "medium"
    },
    {
      question: "'주홍글자'에서 헤스터 프린이 받은 처벌은 무엇인가요?",
      options: ["감옥살이", "주홍글자 A 착용", "추방", "공개 처형"],
      answer: "주홍글자 A 착용",
      difficulty: "medium"
    },
    {
      question: "'젊은 베르테르의 슬픔'에서 베르테르의 비극적 결말은 무엇인가요?",
      options: ["결혼", "자살", "추방", "재회"],
      answer: "자살",
      difficulty: "medium"
    },
    //hard
    {
      question: "이육사의 시 '절정'에서 '백두산' 상징이 반영하는 한국 문학사적 맥락은 무엇인가요?",
      options: ["낭만주의적 자연 숭배", "일제강점기 저항시의 민족의식", "현대주의적 개인 내면", "전후 허무주의"],
      answer: "일제강점기 저항시의 민족의식",
      difficulty: "hard"
    },
    {
      question: "김승옥의 '무진기행'에서 '무진'의 허무적 공간이 1960년대 한국 문학의 어떤 철학적 담론과 연결되나요?",
      options: ["실존주의와 소외", "맑스주의적 계층투쟁", "종교적 구원론", "포스트모더니즘의 해체"],
      answer: "실존주의와 소외",
      difficulty: "hard"
    },
    {
      question: "박인환의 시 '세월이 가면'이 전후 모더니즘 시로서 한국 문학사에서 가지는 의의는 무엇인가요?",
      options: ["전통 서정시의 계승", "도시적 감수성과 허무의 형상화", "민중 중심의 사회비판", "추상적 언어실험"],
      answer: "도시적 감수성과 허무의 형상화",
      difficulty: "hard"
    },
    {
      question: "조세희의 '난쟁이가 쏘아올린 작은 공'에서 '작은 공'의 무력한 저항이 1970년대 한국 사회의 어떤 구조적 문제를 비판하나요?",
      options: ["일제 잔재", "군사정권의 억압", "산업화와 계층 양극화", "냉전 이데올로기"],
      answer: "산업화와 계층 양극화",
      difficulty: "hard"
    },
    {
      question: "황순원의 '학'에서 '학'의 회복 불가능한 순수가 반영하는 문학사적 배경은 무엇인가요?",
      options: ["전통적 서정의 재발견", "일제강점기 상실감", "전후 한국의 정체성 위기", "현대적 실존주의"],
      answer: "전후 한국의 정체성 위기",
      difficulty: "hard"
    },
    {
      question: "윤동주의 '사슴'에서 순수한 자아로서의 '사슴'이 일제강점기 문학에서 어떤 철학적 저항을 나타내나요?",
      options: ["계몽주의적 이성", "민족적 정체성의 보존", "종교적 초월", "마르크스주의적 혁명"],
      answer: "민족적 정체성의 보존",
      difficulty: "hard"
    },
    {
      question: "조정래의 '태백산맥'에서 염상진과 하대치의 이념 갈등이 한국 현대사의 어떤 역사적 사건을 재구성하나요?",
      options: ["4.19 혁명", "여순사건과 한국전쟁", "광주민주화운동", "3.1 운동"],
      answer: "여순사건과 한국전쟁",
      difficulty: "hard"
    },
    {
      question: "황순원의 '소나기'에서 순행적 시간 구조가 작품의 서정성을 강화하는 방식은 무엇인가요?",
      options: ["철학적 성찰의 복잡성", "순수한 감정의 직선적 전개", "다층적 상징의 중첩", "역사적 반영"],
      answer: "순수한 감정의 직선적 전개",
      difficulty: "hard"
    },
    {
      question: "김기림의 '바다와 나비'에서 나비의 미완의 이상 추구가 한국 모더니즘 시의 어떤 한계를 드러내나요?",
      options: ["전통과의 단절", "근대적 자아의 좌절", "사회적 책임의 결여", "언어적 실험의 부족"],
      answer: "근대적 자아의 좌절",
      difficulty: "hard"
    },
    {
      question: "최인훈의 '광장'에서 '광장'과 '밀실'의 상징이 한국 현대사의 어떤 철학적 담론을 반영하나요?",
      options: ["공공성과 개인성의 대립", "종교적 구원과 세속적 욕망", "자연과 문명의 갈등", "과거와 미래의 단절"],
      answer: "공공성과 개인성의 대립",
      difficulty: "hard"
    },
    {
      question: "이상화의 '오발탄'에서 '탄환'의 방향성 상실이 전후 한국 문학의 어떤 사상적 흐름을 나타내나요?",
      options: ["낭만주의적 이상", "실존주의적 허무", "사회주의적 투쟁", "민족주의적 각성"],
      answer: "실존주의적 허무",
      difficulty: "hard"
    },
    {
      question: "김소월의 '초혼'에서 '오오, 오오'의 주문적 반복이 한국 전통 문학의 어떤 요소를 계승하나요?",
      options: ["한문 산문의 격식", "샤머니즘적 의례 언어", "불교적 명상", "유교적 도덕률"],
      answer: "샤머니즘적 의례 언어",
      difficulty: "hard"
    },
    {
      question: "박완서의 소설에서 도시 여성의 일상 묘사가 1970~80년대 한국 문학사에서 어떤 비판적 역할을 했나요?",
      options: ["전통 가부장제의 복원", "산업화와 여성 억압의 고발", "민족주의적 통합", "서구 모더니즘의 수용"],
      answer: "산업화와 여성 억압의 고발",
      difficulty: "hard"
    },
    {
      question: "김유정의 '동백꽃'에서 사투리적 구어체가 한국 근대 문학에서 어떤 미학적 혁신을 이루었나요?",
      options: ["추상적 언어의 도입", "민중 언어의 문학적 승화", "고전 한문체의 부활", "서구 문체의 모방"],
      answer: "민중 언어의 문학적 승화",
      difficulty: "hard"
    },
    {
      question: "'메밀꽃 필 무렵'의 서정적 묘사가 한국 근대 문학에서 어떤 문학사적 전환을 나타내나요?",
      options: ["사회주의 리얼리즘의 시작", "서정성과 자연미의 재발견", "도시 모더니즘의 확산", "종교적 서사의 부흥"],
      answer: "서정성과 자연미의 재발견",
      difficulty: "hard"
    },
    {
      question: "셰익스피어의 '햄릿'에서 '죽느냐 사느냐' 독백이 르네상스 시대의 어떤 철학적 사조를 반영하나요?",
      options: ["스토아주의", "인문주의적 회의론", "중세 신학", "계몽주의 이성"],
      answer: "인문주의적 회의론",
      difficulty: "hard"
    },
    {
      question: "도스토옙스키의 '죄와 벌'에서 라스콜니코프의 초월자 사상이 니체 철학과 어떻게 교차하나요?",
      options: ["허무주의적 절망", "초인 개념의 선구적 탐구", "종교적 구원의 대안", "계급투쟁의 정당화"],
      answer: "초인 개념의 선구적 탐구",
      difficulty: "hard"
    },
    {
      question: "'위대한 개츠비'에서 녹색 불빛의 상징이 미국 문학사에서 어떤 비판적 담론을 드러내나요?",
      options: ["자본주의적 물신숭배", "아메리칸 드림의 허구성", "종교적 이상의 몰락", "도시화의 폐해"],
      answer: "아메리칸 드림의 허구성",
      difficulty: "hard"
    },
    {
      question: "도스토옙스키의 '카라마조프가의 형제들'에서 '대심문관' 에피소드가 비판하는 서구 문학사적 사조는 무엇인가요?",
      options: ["낭만주의적 이상주의", "계몽주의적 이성주의", "종교적 권위주의", "실존주의적 자유"],
      answer: "종교적 권위주의",
      difficulty: "hard"
    },
    {
      question: "카프카의 '변신'에서 한정된 3인칭 시점이 현대 문학의 어떤 철학적 경향을 강화하나요?",
      options: ["실존주의적 소외", "구조주의적 기호", "포스트모더니즘의 해체", "낭만주의적 초월"],
      answer: "실존주의적 소외",
      difficulty: "hard"
    },
    {
      question: "제임스 조이스의 '율리시스'에서 의식의 흐름 기법이 20세기 문학사에서 어떤 혁신을 이루었나요?",
      options: ["전통 서사의 복원", "내면 심리의 사실적 탐구", "사회적 리얼리즘의 강화", "종교적 상징의 재발견"],
      answer: "내면 심리의 사실적 탐구",
      difficulty: "hard"
    },
    {
      question: "카뮈의 '이방인'에서 뫼르소의 감정 부재가 실존주의 철학의 어떤 개념을 구현하나요?",
      options: ["허무와 부조리", "초월적 구원", "계급적 저항", "도덕적 절대주의"],
      answer: "허무와 부조리",
      difficulty: "hard"
    },
    {
      question: "샐린저의 '호밀밭의 파수꾼'에서 홀든의 순수 추구가 미국 문학사에서 어떤 사회적 비판과 연결되나요?",
      options: ["자본주의적 타락", "종교적 위선", "전통 가족의 붕괴", "교육 제도의 경직성"],
      answer: "자본주의적 타락",
      difficulty: "hard"
    },
    {
      question: "에밀리 브론테의 '폭풍의 언덕'에서 히스클리프의 고딕적 반영웅 이미지가 낭만주의 문학의 어떤 특징을 극대화하나요?",
      options: ["이성적 조화", "감정의 극단과 초월", "사회적 규범의 준수", "도덕적 교훈"],
      answer: "감정의 극단과 초월",
      difficulty: "hard"
    },
    {
      question: "멜빌의 '모비 딕'에서 고래의 절대적 진리 상징이 미국 문학사에서 어떤 철학적 전통과 연결되나요?",
      options: ["청교도 신학", "초월주의", "실용주의", "계몽주의"],
      answer: "초월주의",
      difficulty: "hard"
    },
    {
      question: "메리 셀리의 '프랑켄슈타인'에서 괴물의 소외가 낭만주의 문학의 어떤 비판적 주제를 부각시키나요?",
      options: ["과학의 오만과 윤리적 책임", "종교적 구원의 필요성", "사회 계층의 고정성", "전통적 가족의 중요성"],
      answer: "과학의 오만과 윤리적 책임",
      difficulty: "hard"
    },
    {
      question: "톨스토이의 '안나 카레니나'에서 열차의 비극적 상징이 러시아 문학사에서 어떤 사회적 변화를 반영하나요?",
      options: ["농업 사회의 몰락", "산업화와 도덕적 위기", "제국주의적 팽창", "종교적 부흥"],
      answer: "산업화와 도덕적 위기",
      difficulty: "hard"
    },
    {
      question: "호손의 '주홍글자'에서 'A'의 의미 변화가 미국 문학사에서 어떤 윤리적 담론을 드러내나요?",
      options: ["청교도 윤리의 재구성", "계몽주의적 개인주의", "낭만주의적 초월", "사회주의적 평등"],
      answer: "청교도 윤리의 재구성",
      difficulty: "hard"
    },
    {
      question: "세르반테스의 '돈키호테'에서 중세 기사문학 추구가 스페인 문학사에서 어떤 전환을 풍자하나요?",
      options: ["르네상스 인문주의의 등장", "종교개혁의 확산", "봉건제의 존속", "계몽주의의 시작"],
      answer: "르네상스 인문주의의 등장",
      difficulty: "hard"
    },
    {
      question: "헤세의 '데미안'에서 '새는 알을 깨고 나온다'의 상징이 20세기 문학사에서 어떤 철학적 사조와 연결되나요?",
      options: ["실존주의적 자아 발견", "구조주의적 해체", "마르크스주의적 계급투쟁", "포스트모더니즘의 상대성"],
      answer: "실존주의적 자아 발견",
      difficulty: "hard"
    }
  ],
  art:[
    //easy
    {
      question: "'모나리자'는 어떤 종류의 예술인가요?",
      options: ["사진", "조각", "그림", "영화"],
      answer: "그림",
      difficulty: "easy"
    },
    {
      question: "어떤 예술은 귀로 듣나요?",
      options: ["그림", "조각", "음악", "건축"],
      answer: "음악",
      difficulty: "easy"
    },
    {
      question: "'별이 빛나는 밤에'를 그린 화가는 누구인가요?",
      options: ["고흐", "피카소", "모네", "다빈치"],
      answer: "고흐",
      difficulty: "easy"
    },
    {
      question: "몸으로 춤을 추는 예술은 무엇인가요?",
      options: ["연극", "무용", "영화", "사진"],
      answer: "무용",
      difficulty: "easy"
    },
    {
      question: "상상 속 동물을 그린 그림은 어떤 종류인가요?",
      options: ["초상화", "추상화", "정물화", "상상화"],
      answer: "상상화",
      difficulty: "easy"
    },
    {
      question: "'도레미파솔라시도'는 무엇과 관련 있나요?",
      options: ["색깔", "소리", "숫자", "그림"],
      answer: "소리",
      difficulty: "easy"
    },
    {
      question: "피아노는 어떤 종류의 악기인가요?",
      options: ["타악기", "현악기", "관악기", "건반악기"],
      answer: "건반악기",
      difficulty: "easy"
    },
    {
      question: "물감으로 종이에 그리는 것은 무엇인가요?",
      options: ["조각", "연극", "그림", "노래"],
      answer: "그림",
      difficulty: "easy"
    },
    {
      question: "무대에서 연기하는 예술은 무엇인가요?",
      options: ["그림", "춤", "연극", "조각"],
      answer: "연극",
      difficulty: "easy"
    },
    {
      question: "사람 얼굴을 그린 그림은 무엇인가요?",
      options: ["풍경화", "추상화", "초상화", "정물화"],
      answer: "초상화",
      difficulty: "easy"
    },
    {
      question: "다음 중 색깔이 아닌 것은 무엇인가요?",
      options: ["파랑", "빨강", "음악", "노랑"],
      answer: "음악",
      difficulty: "easy"
    },
    {
      question: "음악 연주를 이끄는 사람은 누구인가요?",
      options: ["작곡가", "배우", "무용가", "지휘자"],
      answer: "지휘자",
      difficulty: "easy"
    },
    {
      question: "'생각하는 사람' 조각상은 어떤 자세인가요?",
      options: ["누워 있음", "앉아서 턱을 괴고 있음", "뛰고 있음", "춤추고 있음"],
      answer: "앉아서 턱을 괴고 있음",
      difficulty: "easy"
    },
    {
      question: "미술 시간에 물감을 칠 때 사용하는 도구는 무엇인가요?",
      options: ["청진기", "마이크", "붓", "드라이버"],
      answer: "붓",
      difficulty: "easy"
    },
    {
      question: "해금과 가야금은 어느 나라의 악기인가요?",
      options: ["미국", "중국", "한국", "일본"],
      answer: "한국",
      difficulty: "easy"
    },
    {
      question: "사람을 재미있게 과장해서 그린 그림은 무엇인가요?",
      options: ["풍경화", "캐리커처", "초상화", "명화"],
      answer: "캐리커처",
      difficulty: "easy"
    },
    {
      question: "춤출 때 음악을 틀어주는 사람은 누구인가요?",
      options: ["DJ", "가수", "작가", "화가"],
      answer: "DJ",
      difficulty: "easy"
    },
    {
      question: "모차르트는 어떤 직업으로 유명한가요?",
      options: ["운동선수", "작곡가", "배우", "화가"],
      answer: "작곡가",
      difficulty: "easy"
    },
    {
      question: "건물을 멋지게 설계하는 사람은 누구인가요?",
      options: ["화가", "음악가", "건축가", "조각가"],
      answer: "건축가",
      difficulty: "easy"
    },
    {
      question: "사진을 찍는 예술은 무엇인가요?",
      options: ["회화", "사진예술", "무용", "연극"],
      answer: "사진예술",
      difficulty: "easy"
    },
    {
      question: "미술관에서는 무엇을 볼 수 있나요?",
      options: ["책", "음식", "그림과 조각", "동물"],
      answer: "그림과 조각",
      difficulty: "easy"
    },
    {
      question: "색을 섞어서 만든 색을 무엇이라 하나요?",
      options: ["빛", "음영", "무지개", "혼합색"],
      answer: "혼합색",
      difficulty: "easy"
    },
    {
      question: "미술관과 박물관의 차이는 무엇인가요?",
      options: ["박물관은 동물을 전시한다", "미술관은 예술 작품을 전시한다", "박물관은 음악을 들려준다", "미술관은 영화를 상영한다"],
      answer: "미술관은 예술 작품을 전시한다",
      difficulty: "easy"
    },
    {
      question: "가장 밝은 색은 무엇인가요?",
      options: ["검정", "회색", "흰색", "갈색"],
      answer: "흰색",
      difficulty: "easy"
    },
    {
      question: "음악에서 빠르게 연주하라는 말은 무엇인가요?",
      options: ["안단테", "아다지오", "알레그로", "라르고"],
      answer: "알레그로",
      difficulty: "easy"
    },
    {
      question: "만화를 그리는 사람은 누구인가요?",
      options: ["화가", "조각가", "만화가", "작곡가"],
      answer: "만화가",
      difficulty: "easy"
    },
    {
      question: "미술에서 물감을 섞는 데 사용하는 것은 무엇인가요?",
      options: ["종이", "컵", "팔레트", "통"],
      answer: "팔레트",
      difficulty: "easy"
    },
    {
      question: "노래를 부를 때 음을 잘 맞추는 것은 무엇인가요?",
      options: ["리듬", "박자", "음정", "속도"],
      answer: "음정",
      difficulty: "easy"
    },
    {
      question: "영화와 연극을 공연하는 곳은 어디인가요?",
      options: ["도서관", "시장", "병원", "극장"],
      answer: "극장",
      difficulty: "easy"
    },
    {
      question: "다음 중 예술이 아닌 것은 무엇인가요?",
      options: ["그림", "음악", "요리", "과학 실험"],
      answer: "과학 실험",
      difficulty: "easy"
    },
    //medium
    {
      question: "'르네상스' 예술의 주요 특징은 무엇인가요?",
      options: ["감정의 극단적 표현", "인간 중심적 이상과 균형", "대중문화의 활용", "단순한 형태의 반복"],
      answer: "인간 중심적 이상과 균형",
      difficulty: "medium"
    },
    {
      question: "인상주의 회화의 주요 주제는 무엇인가요?",
      options: ["종교적 상징", "역사적 사건", "빛과 색의 순간적 인상", "추상적 형태"],
      answer: "빛과 색의 순간적 인상",
      difficulty: "medium"
    },
    {
      question: "미켈란젤로의 '다비드 상'이 상징하는 것은 무엇인가요?",
      options: ["종교적 순교", "인간의 힘과 이상", "자연의 조화", "전쟁의 승리"],
      answer: "인간의 힘과 이상",
      difficulty: "medium"
    },
    {
      question: "바로크 음악에서 강조된 요소는 무엇인가요?",
      options: ["단순한 선율", "감정의 극적 표현", "형식의 간결함", "추상적 구조"],
      answer: "감정의 극적 표현",
      difficulty: "medium"
    },
    {
      question: "앤디 워홀의 팝 아트가 비판하는 사회적 현상은 무엇인가요?",
      options: ["종교적 권위", "자본주의와 소비문화", "전통 예술의 몰락", "농업 사회의 쇠퇴"],
      answer: "자본주의와 소비문화",
      difficulty: "medium"
    },
    {
      question: "추상화가 기존 회화와 다른 점은 무엇인가요?",
      options: ["실제 대상의 재현", "형태와 색의 비구체적 표현", "역사적 사건 묘사", "종교적 주제 강조"],
      answer: "형태와 색의 비구체적 표현",
      difficulty: "medium"
    },
    {
      question: "오페라와 뮤지컬의 주요 차이는 무엇인가요?",
      options: ["공연 장소", "대사와 노래의 비중", "의상 디자인", "사용 언어"],
      answer: "대사와 노래의 비중",
      difficulty: "medium"
    },
    {
      question: "키아로스쿠로 기법이 주로 사용된 예술 시대는 언제인가요?",
      options: ["중세", "르네상스", "모더니즘", "인상주의"],
      answer: "르네상스",
      difficulty: "medium"
    },
    {
      question: "미켈란젤로의 시스티나 성당 천장화가 묘사하는 주요 주제는 무엇인가요?",
      options: ["전쟁의 영웅", "창세기의 이야기", "그리스 신화", "현대 사회"],
      answer: "창세기의 이야기",
      difficulty: "medium"
    },
    {
      question: "폴 세잔의 후기 인상주의가 현대 미술에 끼친 영향은 무엇인가요?",
      options: ["구체적 사실주의", "추상화의 기초 형성", "종교 예술의 부흥", "대중문화의 반영"],
      answer: "추상화의 기초 형성",
      difficulty: "medium"
    },
    {
      question: "건축가가 설계하는 주요 대상은 무엇인가요?",
      options: ["음악", "건물과 구조물", "조각", "그림"],
      answer: "건물과 구조물",
      difficulty: "medium"
    },
    {
      question: "모더니즘 예술이 기존 전통과 다른 점은 무엇인가요?",
      options: ["고전적 규범의 준수", "실험적 형식과 혁신", "종교적 주제의 강조", "단순한 묘사"],
      answer: "실험적 형식과 혁신",
      difficulty: "medium"
    },
    {
      question: "루브르 박물관에 전시된 대표적 작품은 무엇인가요?",
      options: ["별이 빛나는 밤", "모나리자", "게르니카", "수련"],
      answer: "모나리자",
      difficulty: "medium"
    },
    {
      question: "로댕의 '생각하는 사람'이 원래 포함된 작품은 무엇인가요?",
      options: ["지옥의 문", "자유의 여신상", "다비드 상", "피에타"],
      answer: "지옥의 문",
      difficulty: "medium"
    },
    {
      question: "빈센트 반 고흐의 '해바라기'가 표현하는 주요 감정은 무엇인가요?",
      options: ["절망", "희망과 생명력", "고독", "분노"],
      answer: "희망과 생명력",
      difficulty: "medium"
    },
    {
      question: "키아로스쿠로 기법이 그림에 주는 효과는 무엇인가요?",
      options: ["평면적 단순함", "입체감과 깊이", "추상적 색채", "단순한 선"],
      answer: "입체감과 깊이",
      difficulty: "medium"
    },
    {
      question: "쇼팽의 피아노 음악이 가진 특징은 무엇인가요?",
      options: ["복잡한 오케스트라 편성", "섬세하고 감성적인 선율", "단순한 리듬", "극적 대위법"],
      answer: "섬세하고 감성적인 선율",
      difficulty: "medium"
    },
    {
      question: "고대 그리스 건축의 도리스 양식이 강조한 특징은 무엇인가요?",
      options: ["화려한 장식", "단순하고 견고한 형태", "복잡한 곡선", "현대적 재료"],
      answer: "단순하고 견고한 형태",
      difficulty: "medium"
    },
    {
      question: "칸딘스키의 색채 감정 이론이 주로 적용된 예술 사조는 무엇인가요?",
      options: ["인상주의", "추상주의", "신고전주의", "바로크"],
      answer: "추상주의",
      difficulty: "medium"
    },
    {
      question: "뱅크시의 거리 예술이 주로 다루는 주제는 무엇인가요?",
      options: ["자연의 아름다움", "사회적 비판", "종교적 신앙", "개인적 로맨스"],
      answer: "사회적 비판",
      difficulty: "medium"
    },
    {
      question: "드뷔시의 인상주의 음악이 강조하는 요소는 무엇인가요?",
      options: ["엄격한 형식", "색채적 분위기", "반복적 리듬", "고전적 조화"],
      answer: "색채적 분위기",
      difficulty: "medium"
    },
    {
      question: "슈만의 '카니발'이 묘사하는 주요 내용은 무엇인가요?",
      options: ["전쟁의 비극", "다양한 인물과 감정", "자연의 풍경", "종교적 찬양"],
      answer: "다양한 인물과 감정",
      difficulty: "medium"
    },
    {
      question: "콜라주 기법이 현대 예술에서 사용된 주요 사조는 무엇인가요?",
      options: ["입체주의", "바로크", "신고전주의", "로마네스크"],
      answer: "입체주의",
      difficulty: "medium"
    },
    {
      question: "피카소의 '게르니카'가 비판하는 사건은 무엇인가요?",
      options: ["프랑스 대혁명", "스페인 내전의 폭격", "2차 세계대전", "러시아 혁명"],
      answer: "스페인 내전의 폭격",
      difficulty: "medium"
    },
    {
      question: "바로크 음악의 대표적 작곡가는 누구인가요?",
      options: ["하이든", "바흐", "쇼팽", "드뷔시"],
      answer: "바흐",
      difficulty: "medium"
    },
    {
      question: "현대무용이 전통무용과 다른 점은 무엇인가요?",
      options: ["고정된 동작", "자유로운 창작 표현", "발레 기반", "종교적 주제"],
      answer: "자유로운 창작 표현",
      difficulty: "medium"
    },
    {
      question: "미니멀 아트가 기존 예술과 구별되는 점은 무엇인가요?",
      options: ["화려한 장식", "간결한 형태와 반복", "복잡한 서사", "구체적 묘사"],
      answer: "간결한 형태와 반복",
      difficulty: "medium"
    },
    {
      question: "장 미셸 바스키아의 작품이 주로 다루는 주제는 무엇인가요?",
      options: ["자연 풍경", "흑인 정체성과 사회 문제", "종교적 상징", "고전 신화"],
      answer: "흑인 정체성과 사회 문제",
      difficulty: "medium"
    },
    {
      question: "고흐의 화풍이 생전에 인정받지 못한 이유는 무엇인가요?",
      options: ["그림 부족", "낯선 색채와 표현", "전쟁의 영향", "기술 부족"],
      answer: "낯선 색채와 표현",
      difficulty: "medium"
    },
    {
      question: "퍼포먼스 아트의 주요 특징은 무엇인가요?",
      options: ["고정된 그림", "행위 자체가 예술", "연극 대본", "노래 중심"],
      answer: "행위 자체가 예술",
      difficulty: "medium"
    },
    //hard
    {
      question: "나움 가보의 '검은 광선 이론'이 현대 예술사에서 강조한 철학적 전환은 무엇인가요?",
      options: ["종교적 상징의 복원", "과학과 예술의 융합", "낭만주의적 감정", "사회주의적 이상"],
      answer: "과학과 예술의 융합",
      difficulty: "hard"
    },
    {
      question: "벨라스케스의 '라스 메니나스'가 근대 회화에 제시한 시각적 담론은 무엇인가요?",
      options: ["추상적 형태의 도입", "시점과 주체의 해체", "종교적 권위의 재확인", "자연주의적 재현"],
      answer: "시점과 주체의 해체",
      difficulty: "hard"
    },
    {
      question: "미니멀 아트가 추상표현주의에 반대한 예술사적 맥락은 무엇인가요?",
      options: ["감정 중심의 격정 반대", "대중문화의 수용", "고전주의의 부활", "종교적 상징의 재발견"],
      answer: "감정 중심의 격정 반대",
      difficulty: "hard"
    },
    {
      question: "에드바르 뭉크의 표현주의가 현대 예술사에서 심리학적 담론에 끼친 영향은 무엇인가요?",
      options: ["프로이트의 무의식 탐구 촉진", "계몽주의적 이성 복원", "사회주의적 계급투쟁", "종교적 구원의 재해석"],
      answer: "프로이트의 무의식 탐구 촉진",
      difficulty: "hard"
    },
    {
      question: "바그너의 총체예술(Gesamtkunstwerk)이 19세기 예술사에서 어떤 철학적 사조와 연결되나요?",
      options: ["실존주의", "낭만주의적 이상주의", "계몽주의 이성", "포스트모더니즘"],
      answer: "낭만주의적 이상주의",
      difficulty: "hard"
    },
    {
      question: "마르셀 뒤샹의 레디메이드가 현대 예술사에서 촉발한 철학적 논쟁은 무엇인가요?",
      options: ["예술의 정의와 권위 해체", "산업화의 미학적 승화", "종교적 상징의 재발견", "자연과의 조화"],
      answer: "예술의 정의와 권위 해체",
      difficulty: "hard"
    },
    {
      question: "앙리 마티스의 색채 해방이 야수파 운동에서 어떤 미학적 혁신을 이루었나요?",
      options: ["구체적 재현의 복원", "감정 중심의 색채 표현", "기하학적 추상성", "고전주의적 조화"],
      answer: "감정 중심의 색채 표현",
      difficulty: "hard"
    },
    {
      question: "미국 행동주의 회화가 20세기 예술사에서 강조한 철학적 가치는 무엇인가요?",
      options: ["형식적 완결성", "즉흥성과 신체적 과정", "종교적 상징", "사회적 계층투쟁"],
      answer: "즉흥성과 신체적 과정",
      difficulty: "hard"
    },
    {
      question: "피카소의 '게르니카'에서 단색 구성이 스페인 내전의 비극을 강화한 방식은 무엇인가요?",
      options: ["추상적 상징의 제거", "시각적 충격과 상징적 절제", "낭만적 색채의 도입", "구체적 묘사의 강조"],
      answer: "시각적 충격과 상징적 절제",
      difficulty: "hard"
    },
    {
      question: "'화이트 큐브' 개념이 현대 미술관의 전시 방식에 끼친 예술사적 영향은 무엇인가요?",
      options: ["작품의 맥락적 중립성 강화", "종교적 상징의 부활", "대중문화의 통합", "전통 회화의 복원"],
      answer: "작품의 맥락적 중립성 강화",
      difficulty: "hard"
    },
    {
      question: "칸딘스키의 추상화가 음악적 개념과 결합하여 현대 예술사에 제시한 철학적 전환은 무엇인가요?",
      options: ["형식주의적 구조", "감정과 직관의 시각적 구현", "사회적 계급 비판", "종교적 초월"],
      answer: "감정과 직관의 시각적 구현",
      difficulty: "hard"
    },
    {
      question: "디터 람스의 디자인 철학이 현대 산업디자인에 끼친 예술사적 영향은 무엇인가요?",
      options: ["장식적 화려함의 부흥", "기능성과 단순함의 미학적 통합", "종교적 상징의 재발견", "파괴적 혁신"],
      answer: "기능성과 단순함의 미학적 통합",
      difficulty: "hard"
    },
    {
      question: "고딕 건축의 첨탑과 스테인드글라스가 중세 예술사에서 반영한 철학적 이상은 무엇인가요?",
      options: ["세속적 권력의 강조", "신의 빛과 초월적 지향", "인간 중심적 이성", "자연과의 분리"],
      answer: "신의 빛과 초월적 지향",
      difficulty: "hard"
    },
    {
      question: "조토의 회화가 르네상스 예술사로의 전환에서 어떤 미학적 혁신을 이루었나요?",
      options: ["추상적 상징의 강화", "인체와 공간의 사실적 재현", "종교적 도상의 단순화", "평면적 색채의 도입"],
      answer: "인체와 공간의 사실적 재현",
      difficulty: "hard"
    },
    {
      question: "프랭크 로이드 라이트의 '낙수장'이 현대 건축사에서 상징하는 철학적 가치는 무엇인가요?",
      options: ["도시 중심주의", "자연과 인간의 유기적 통합", "종교적 상징의 재발견", "산업화의 미학"],
      answer: "자연과 인간의 유기적 통합",
      difficulty: "hard"
    },
    {
      question: "마크 로스코의 색면 회화가 현대 예술사에서 추구한 미학적 경험은 무엇인가요?",
      options: ["지적 분석의 촉진", "명상적 몰입과 정서적 공명", "사회적 풍자의 강화", "형식적 완결성"],
      answer: "명상적 몰입과 정서적 공명",
      difficulty: "hard"
    },
    {
      question: "해체주의 건축이 현대 예술사에서 반영한 철학적 사조는 무엇인가요?",
      options: ["구조주의적 질서", "포스트모더니즘의 해체적 사유", "낭만주의적 이상", "계몽주의 이성"],
      answer: "포스트모더니즘의 해체적 사유",
      difficulty: "hard"
    },
    {
      question: "동세 표현 기법이 르네상스 예술사에서 시간성을 강조한 방식은 무엇인가요?",
      options: ["정적 구도의 강화", "움직임의 순간적 포착", "추상적 색채의 도입", "평면적 상징"],
      answer: "움직임의 순간적 포착",
      difficulty: "hard"
    },
    {
      question: "윌리엄 모리스의 아트 앤 크래프트 운동이 현대 예술사에 끼친 철학적 영향은 무엇인가요?",
      options: ["산업화의 전면적 수용", "수공예와 노동의 미학적 복원", "종교적 상징의 강화", "추상적 형태의 도입"],
      answer: "수공예와 노동의 미학적 복원",
      difficulty: "hard"
    },
    {
      question: "하이 레졸루션 이미지가 현대 예술사에서 촉발한 철학적 논쟁은 무엇인가요?",
      options: ["예술의 원본성과 복제의 경계", "종교적 상징의 부활", "형식적 완결성의 재발견", "자연과의 조화"],
      answer: "예술의 원본성과 복제의 경계",
      difficulty: "hard"
    },
    {
      question: "바우하우스의 예술과 기술 통합이 현대 디자인사에 끼친 철학적 영향은 무엇인가요?",
      options: ["장식적 화려함의 부흥", "기능적 디자인의 민주화", "종교적 상징의 재발견", "추상적 형태의 도입"],
      answer: "기능적 디자인의 민주화",
      difficulty: "hard"
    },
    {
      question: "조르조 바사리의 미술사 저술이 르네상스 예술사에서 어떤 학문적 기여를 했나요?",
      options: ["추상주의의 이론화", "미술사학의 체계적 기초 확립", "종교적 상징의 재발견", "사회적 계급 비판"],
      answer: "미술사학의 체계적 기초 확립",
      difficulty: "hard"
    },
    {
      question: "인상주의와 후기 인상주의의 예술사적 차이가 현대 회화에 끼친 영향은 무엇인가요?",
      options: ["종교적 상징의 부활", "구조적 분석과 개성의 강조", "평면적 구도의 복원", "자연주의적 재현"],
      answer: "구조적 분석과 개성의 강조",
      difficulty: "hard"
    },
    {
      question: "데칼코마니 기법이 초현실주의 예술사에서 어떤 철학적 탐구를 촉진했나요?",
      options: ["형식적 완결성", "무의식과 우연의 창작", "종교적 상징의 재발견", "사회적 계급 비판"],
      answer: "무의식과 우연의 창작",
      difficulty: "hard"
    },
    {
      question: "피에르 부르디외의 '문화 자본' 개념이 현대 예술사에서 비판한 사회적 구조는 무엇인가요?",
      options: ["예술의 민주화", "계층적 취향과 권력 구조", "종교적 상징의 부활", "자연과의 조화"],
      answer: "계층적 취향과 권력 구조",
      difficulty: "hard"
    },
    {
      question: "일본 우키요에가 인상주의 예술사에 끼친 미학적 영향은 무엇인가요?",
      options: ["추상적 형태의 도입", "평면적 구도와 색채의 대담성", "종교적 상징의 재발견", "구체적 묘사의 강조"],
      answer: "평면적 구도와 색채의 대담성",
      difficulty: "hard"
    },
    {
      question: "나보코프의 나비 수집이 현대 예술사에서 생태미학에 끼친 철학적 영향은 무엇인가요?",
      options: ["인간과 자연의 상호작용 탐구", "종교적 상징의 재발견", "추상적 형태의 도입", "사회적 계급 비판"],
      answer: "인간과 자연의 상호작용 탐구",
      difficulty: "hard"
    },
    {
      question: "크리스 버든의 퍼포먼스 아트가 현대 예술사에서 강조한 철학적 가치는 무엇인가요?",
      options: ["형식적 완결성", "행위의 충격성과 한계 탐구", "종교적 상징의 재발견", "자연과의 조화"],
      answer: "행위의 충격성과 한계 탐구",
      difficulty: "hard"
    },
    {
      question: "동양화의 여백 미학이 현대 예술사에서 어떤 철학적 담론을 촉진했나요?",
      options: ["구체적 묘사의 강조", "무의 공간과 관람자의 상상력", "종교적 상징의 재발견", "추상적 형태의 도입"],
      answer: "무의 공간과 관람자의 상상력",
      difficulty: "hard"
    },
    {
      question: "'해체적 시선'이 현대 예술사에서 비판한 철학적 구조는 무엇인가요?",
      options: ["종교적 상징의 재발견", "시각적 권력과 주체-대상 경계", "형식적 완결성", "자연과의 조화"],
      answer: "시각적 권력과 주체-대상 경계",
      difficulty: "hard"
    }
  ],

  economy:[
    //easy
    {
      question: "시장에서 물건을 살 때 사용하는 것은 무엇인가요?",
      options: ["세금", "화폐", "쿠폰", "이자"],
      answer: "화폐",
      difficulty: "easy"
    },
    {
      question: "돈을 쓰지 않고 모아두는 것을 무엇이라 하나요?",
      options: ["소비", "투자", "저축", "환전"],
      answer: "저축",
      difficulty: "easy"
    },
    {
      question: "물건 가격이 계속 오르는 것을 무엇이라 하나요?",
      options: ["침체", "디플레이션", "인플레이션", "구조조정"],
      answer: "인플레이션",
      difficulty: "easy"
    },
    {
      question: "일을 하고 받는 돈은 무엇인가요?",
      options: ["이자", "배당", "급여", "원금"],
      answer: "급여",
      difficulty: "easy"
    },
    {
      question: "은행에서 돈을 빌리면 추가로 내는 돈은 무엇인가요?",
      options: ["수수료", "이자", "세금", "보증금"],
      answer: "이자",
      difficulty: "easy"
    },
    {
      question: "정부가 다리나 도로를 만들 때 쓰는 돈은 무엇인가요?",
      options: ["공공투자", "가계비", "소비세", "저축"],
      answer: "공공투자",
      difficulty: "easy"
    },
    {
      question: "시장에서 물건의 가격을 결정하는 것은 무엇인가요?",
      options: ["수요와 공급", "정부", "외교", "물가"],
      answer: "수요와 공급",
      difficulty: "easy"
    },
    {
      question: "회사에서 돈을 벌기 위해 일하는 사람은 누구인가요?",
      options: ["소비자", "노동자", "기업가", "세무사"],
      answer: "기업가",
      difficulty: "easy"
    },
    {
      question: "물건 가격이 오르면 사람들이 덜 사는 것은 무엇인가요?",
      options: ["증가", "감소", "일정", "무관"],
      answer: "감소",
      difficulty: "easy"
    },
    {
      question: "물건을 살 때 내는 세금은 무엇인가요?",
      options: ["재산세", "부가가치세", "법인세", "소득세"],
      answer: "부가가치세",
      difficulty: "easy"
    },
    {
      question: "물건을 사기 위해 내는 돈은 무엇인가요?",
      options: ["수익", "가격", "배당", "절약"],
      answer: "가격",
      difficulty: "easy"
    },
    {
      question: "은행에 돈을 맡기면 받는 돈은 무엇인가요?",
      options: ["급여", "배당", "이자", "세금"],
      answer: "이자",
      difficulty: "easy"
    },
    {
      question: "일자리가 없어서 일을 찾는 상태는 무엇인가요?",
      options: ["구직", "무직", "실업", "취업"],
      answer: "실업",
      difficulty: "easy"
    },
    {
      question: "돈을 아껴서 쓰지 않는 것은 무엇인가요?",
      options: ["낭비", "소비", "절약", "대출"],
      answer: "절약",
      difficulty: "easy"
    },
    {
      question: "나라에서 돈을 만드는 곳은 어디인가요?",
      options: ["산업은행", "중앙은행", "상업은행", "대출기관"],
      answer: "중앙은행",
      difficulty: "easy"
    },
    {
      question: "사람들이 직접 사용하는 물건은 무엇인가요?",
      options: ["생산재", "소비재", "자본재", "공공재"],
      answer: "소비재",
      difficulty: "easy"
    },
    {
      question: "물건을 만들 때 필요한 것은 무엇인가요?",
      options: ["생산요소", "자원", "수요", "부채"],
      answer: "생산요소",
      difficulty: "easy"
    },
    {
      question: "경제에서 가장 중요한 질문은 무엇인가요?",
      options: ["무엇을, 어떻게, 누구에게", "누가, 왜, 언제", "무엇을, 왜, 어떻게", "돈이 얼마나"],
      answer: "무엇을, 어떻게, 누구에게",
      difficulty: "easy"
    },
    {
      question: "은행에서 돈을 빌리는 것은 무엇인가요?",
      options: ["투자", "저축", "대출", "거래"],
      answer: "대출",
      difficulty: "easy"
    },
    {
      question: "물건을 만드는 사람은 누구인가요?",
      options: ["소비자", "구매자", "생산자", "수입자"],
      answer: "생산자",
      difficulty: "easy"
    },
    {
      question: "물건이 너무 많으면 가격이 어떻게 되나요?",
      options: ["상승", "유지", "하락", "폭등"],
      answer: "하락",
      difficulty: "easy"
    },
    {
      question: "자신의 돈으로 사업을 시작하는 사람은 누구인가요?",
      options: ["근로자", "사업가", "기업가", "주주"],
      answer: "기업가",
      difficulty: "easy"
    },
    {
      question: "돈을 쓰고 남은 돈을 계획하는 것은 무엇인가요?",
      options: ["예산", "소비", "저축", "생산"],
      answer: "예산",
      difficulty: "easy"
    },
    {
      question: "돈을 더 쓰면 생기는 상태는 무엇인가요?",
      options: ["흑자", "적자", "균형", "투자"],
      answer: "적자",
      difficulty: "easy"
    },
    {
      question: "미래를 위해 돈을 모으는 것은 무엇인가요?",
      options: ["소비", "대출", "투자", "저축"],
      answer: "저축",
      difficulty: "easy"
    },
    {
      question: "회사를 그만두는 것은 무엇인가요?",
      options: ["실업", "휴업", "폐업", "퇴직"],
      answer: "폐업",
      difficulty: "easy"
    },
    {
      question: "어린이가 돈을 배우는 방법은 무엇인가요?",
      options: ["투자", "기부", "용돈관리", "주식거래"],
      answer: "용돈관리",
      difficulty: "easy"
    },
    {
      question: "물건 가격을 알아보는 지표는 무엇인가요?",
      options: ["시가총액", "환율", "고용지수", "소비자 물가 지수"],
      answer: "소비자 물가 지수",
      difficulty: "easy"
    },
    {
      question: "생활에 꼭 필요한 물건은 무엇인가요?",
      options: ["사치재", "내구재", "필수재", "소비재"],
      answer: "필수재",
      difficulty: "easy"
    },
    {
      question: "카드나 스마트폰으로 돈을 내는 방법은 무엇인가요?",
      options: ["계좌이체", "간편결제", "할부", "지급보증"],
      answer: "간편결제",
      difficulty: "easy"
    },
    //medium
    {
      question: "한 나라의 경제 규모를 측정하는 주요 지표는 무엇인가요?",
      options: ["GNP", "GDP", "NNP", "CPI"],
      answer: "GDP",
      difficulty: "medium"
    },
    {
      question: "기준금리를 올리면 경제에 어떤 변화가 생기나요?",
      options: ["소비 증가", "대출 증가", "투자 감소", "물가 상승"],
      answer: "투자 감소",
      difficulty: "medium"
    },
    {
      question: "소득이 많을수록 세율이 높아지는 세금 구조는 무엇인가요?",
      options: ["정률세", "누진세", "역진세", "고정세"],
      answer: "누진세",
      difficulty: "medium"
    },
    {
      question: "환율이 상승하면 수출 기업에 어떤 영향을 미치나요?",
      options: ["불리해진다", "유리해진다", "변화 없다", "파산한다"],
      answer: "유리해진다",
      difficulty: "medium"
    },
    {
      question: "정부가 경제를 살리기 위해 세금을 줄이고 지출을 늘리는 정책은 무엇인가요?",
      options: ["긴축정책", "확장적 재정정책", "금리인상정책", "통화긴축정책"],
      answer: "확장적 재정정책",
      difficulty: "medium"
    },
    {
      question: "물건을 만들 때 필요한 노동, 자본, 토지를 무엇이라 하나요?",
      options: ["생산비", "생산요소", "생산재", "생산력"],
      answer: "생산요소",
      difficulty: "medium"
    },
    {
      question: "경제가 나쁘면서 물가가 오르는 현상은 무엇인가요?",
      options: ["불황", "디플레이션", "인플레이션", "스태그플레이션"],
      answer: "스태그플레이션",
      difficulty: "medium"
    },
    {
      question: "금리가 내려가면 어떤 경제적 효과가 나타나나요?",
      options: ["소비와 투자 감소", "대출 축소", "소비와 투자 증가", "실업 증가"],
      answer: "소비와 투자 증가",
      difficulty: "medium"
    },
    {
      question: "수출이 수입보다 많아 외화를 더 버는 상태는 무엇인가요?",
      options: ["무역적자", "무역균형", "무역불균형", "무역흑자"],
      answer: "무역흑자",
      difficulty: "medium"
    },
    {
      question: "중앙은행이 정부 채권을 사면 어떤 결과가 생기나요?",
      options: ["통화량 감소", "물가 하락", "통화량 증가", "금리 상승"],
      answer: "통화량 증가",
      difficulty: "medium"
    },
    {
      question: "물가 영향을 제거한 경제 성장 지표는 무엇인가요?",
      options: ["소비자물가지수", "실질 GDP", "총수요", "고용지수"],
      answer: "실질 GDP",
      difficulty: "medium"
    },
    {
      question: "몇몇 기업이 시장을 나눠 가격을 결정하는 시장 구조는 무엇인가요?",
      options: ["완전경쟁", "과점", "청일점", "복점"],
      answer: "과점",
      difficulty: "medium"
    },
    {
      question: "수입 물건에 세금을 부과하는 것은 무엇인가요?",
      options: ["보조금", "환율", "관세", "보관료"],
      answer: "관세",
      difficulty: "medium"
    },
    {
      question: "수요가 공급보다 많을 때 생기는 경제 현상은 무엇인가요?",
      options: ["디플레이션", "공급과잉", "초과수요", "경기후퇴"],
      answer: "초과수요",
      difficulty: "medium"
    },
    {
      question: "돈과 물건이 오가는 경제 흐름을 무엇이라 하나요?",
      options: ["경제 흐름도", "경제순환", "시장순환", "경기지표"],
      answer: "경제순환",
      difficulty: "medium"
    },
    {
      question: "시장 상황에 따라 변하는 금리는 무엇인가요?",
      options: ["기준금리", "변동금리", "시장금리", "실질금리"],
      answer: "변동금리",
      difficulty: "medium"
    },
    {
      question: "실업률이 높아지면 어떤 경제적 변화가 생기나요?",
      options: ["소비 감소", "물가 상승", "수출 증가", "환율 하락"],
      answer: "소비 감소",
      difficulty: "medium"
    },
    {
      question: "정부가 돈의 양을 줄이기 위해 사용하는 정책은 무엇인가요?",
      options: ["확장 정책", "긴축 정책", "균형 정책", "경기부양책"],
      answer: "긴축 정책",
      difficulty: "medium"
    },
    {
      question: "경제 활동이 줄어드는 시기를 무엇이라 하나요?",
      options: ["경기확장기", "경기침체기", "회복기", "호황기"],
      answer: "경기침체기",
      difficulty: "medium"
    },
    {
      question: "기업 간 거래에서 상품 가격 변화를 측정하는 지표는 무엇인가요?",
      options: ["GDP", "PPI", "CPI", "금리"],
      answer: "PPI",
      difficulty: "medium"
    },
    {
      question: "모두에게 같은 세율을 적용하는 세금은 무엇인가요?",
      options: ["누진세", "정률세", "고정세", "비례세"],
      answer: "정률세",
      difficulty: "medium"
    },
    {
      question: "나라 산업을 보호하기 위해 수입을 제한하는 정책은 무엇인가요?",
      options: ["개방 정책", "무역 자유화", "보호무역", "경쟁 정책"],
      answer: "보호무역",
      difficulty: "medium"
    },
    {
      question: "경기가 나쁠 때 기업이 가장 먼저 줄이는 비용은 무엇인가요?",
      options: ["세금", "광고비", "인건비", "공공요금"],
      answer: "인건비",
      difficulty: "medium"
    },
    {
      question: "세계 무역에서 가장 많이 쓰이는 돈은 무엇인가요?",
      options: ["유로화", "엔화", "위안화", "미국 달러"],
      answer: "미국 달러",
      difficulty: "medium"
    },
    {
      question: "외국이 물건을 싸게 팔아 시장을 장악하는 행위는 무엇인가요?",
      options: ["보조금 지급", "보호무역", "덤핑", "유통마진"],
      answer: "덤핑",
      difficulty: "medium"
    },
    {
      question: "국민총소득(GNI)에 포함되지 않는 것은 무엇인가요?",
      options: ["임금", "배당소득", "해외송금", "조세지출"],
      answer: "조세지출",
      difficulty: "medium"
    },
    {
      question: "시장경제의 문제점 중 하나는 무엇인가요?",
      options: ["자원 배분의 효율성", "정부 통제", "빈부 격차", "경제 계획성"],
      answer: "빈부 격차",
      difficulty: "medium"
    },
    {
      question: "실질금리를 구하기 위해 명목금리에서 빼는 것은 무엇인가요?",
      options: ["소비지수", "물가상승률", "GDP", "투자비율"],
      answer: "물가상승률",
      difficulty: "medium"
    },
    {
      question: "기업이 이익을 위해 생산을 조정하는 경제 체제는 무엇인가요?",
      options: ["계획경제", "시장경제", "혼합경제", "자연경제"],
      answer: "시장경제",
      difficulty: "medium"
    },
    {
      question: "경제가 안정적으로 성장하는 상태를 무엇이라 하나요?",
      options: ["균형 성장", "스태그플레이션", "하이퍼인플레이션", "초과수요"],
      answer: "균형 성장",
      difficulty: "medium"
    },
    //hard
    {
      question: "중앙은행이 기준금리 인하를 통해 경기 부양을 시도할 때 발생할 수 있는 장기적 위험은 무엇인가요?",
      options: ["실질 GDP 감소", "과도한 인플레이션 압력", "구조적 실업 증가", "무역흑자 축소"],
      answer: "과도한 인플레이션 압력",
      difficulty: "hard"
    },
    {
      question: "필수재의 수요가 소득 변화에 비탄력적인 이유는 무엇인가요?",
      options: ["대체재의 풍부함", "소비의 필수적 성격", "가격의 높은 변동성", "소비자 선호의 다양성"],
      answer: "소비의 필수적 성격",
      difficulty: "hard"
    },
    {
      question: "한계효용 체감의 법칙이 소비자 행동에 미치는 경제적 함의는 무엇인가요?",
      options: ["단일 상품에 대한 과소비 억제", "소비의 무한 증가", "가격 인상에 대한 수요 증가", "생산 비용의 절감"],
      answer: "단일 상품에 대한 과소비 억제",
      difficulty: "hard"
    },
    {
      question: "수요의 가격 탄력성이 낮은 상품에 대한 가격 인상의 경제적 결과는 무엇인가요?",
      options: ["수익 감소와 소비자 잉여 축소", "수익 증가와 소비자 잉여 감소", "수요 증가와 시장 확대", "공급 과잉과 가격 하락"],
      answer: "수익 증가와 소비자 잉여 감소",
      difficulty: "hard"
    },
    {
      question: "정부의 재정지출 축소가 물가 안정에 기여하는 메커니즘은 무엇인가요?",
      options: ["통화량 증가 억제", "수요 증가 유도", "환율 상승 촉진", "생산 비용 상승"],
      answer: "통화량 증가 억제",
      difficulty: "hard"
    },
    {
      question: "원화 가치 하락이 수입물가 상승을 초래하는 과정에서 발생하는 2차적 경제 효과는 무엇인가요?",
      options: ["무역흑자 확대", "국내 생산 비용 증가", "해외 투자 감소", "소비자 신뢰 회복"],
      answer: "국내 생산 비용 증가",
      difficulty: "hard"
    },
    {
      question: "디플레이션이 장기화될 경우 경제에 미치는 구조적 위험은 무엇인가요?",
      options: ["기업의 투자 확대", "부채의 실질 가치 증가", "소비자 구매력 상승", "무역수지 개선"],
      answer: "부채의 실질 가치 증가",
      difficulty: "hard"
    },
    {
      question: "공급중심 정책이 경제성장을 지속 가능하게 만드는 주요 메커니즘은 무엇인가요?",
      options: ["단기 수요 증가", "생산 가능 경계의 외연 확장", "통화량의 즉각적 증가", "소비자 신뢰 강화"],
      answer: "생산 가능 경계의 외연 확장",
      difficulty: "hard"
    },
    {
      question: "분산투자가 투자자들에게 제공하는 경제적 이점은 무엇인가요?",
      options: ["단일 자산의 수익 극대화", "시장 변동성에 대한 위험 완화", "레버리지 효과 극대화", "투자 비용의 절감"],
      answer: "시장 변동성에 대한 위험 완화",
      difficulty: "hard"
    },
    {
      question: "화폐의 '가치 저장 수단' 기능이 약화될 경우 발생하는 경제적 문제는 무엇인가요?",
      options: ["거래 비용의 감소", "인플레이션 기대 심화", "소비자 신뢰 회복", "무역수지 개선"],
      answer: "인플레이션 기대 심화",
      difficulty: "hard"
    },
    {
      question: "정부 보조금이 특정 산업의 생산 증가를 초래할 때 발생할 수 있는 부정적 외부효과는 무엇인가요?",
      options: ["시장 왜곡과 비효율적 자원 배분", "소비자 잉여의 증가", "국제 경쟁력 강화", "환경 보호 강화"],
      answer: "시장 왜곡과 비효율적 자원 배분",
      difficulty: "hard"
    },
    {
      question: "기준금리 인상이 경기과열 억제에 성공하지 못할 경우 발생할 수 있는 경제적 시나리오는 무엇인가요?",
      options: ["디플레이션의 장기화", "스태그플레이션의 출현", "무역흑자의 확대", "소비자 신뢰 회복"],
      answer: "스태그플레이션의 출현",
      difficulty: "hard"
    },
    {
      question: "계절적 실업과 구조적 실업의 근본적 차이는 무엇인가요?",
      options: ["실업 기간의 차이", "산업 구조 변화의 영향 여부", "정부 정책의 개입 정도", "소비자 수요의 변동성"],
      answer: "산업 구조 변화의 영향 여부",
      difficulty: "hard"
    },
    {
      question: "경기 확장기의 과도한 경제 활동이 초래할 수 있는 장기적 경제적 위험은 무엇인가요?",
      options: ["자산 버블 형성과 금융 불안정", "실업률의 구조적 감소", "통화량의 지속적 감소", "무역수지의 안정화"],
      answer: "자산 버블 형성과 금융 불안정",
      difficulty: "hard"
    },
    {
      question: "외환보유액 증가를 위한 달러 매입이 국내 경제에 미치는 부작용은 무엇인가요?",
      options: ["원화 가치의 과도한 상승", "국내 통화량 증가와 인플레이션 압력", "무역적자의 즉각적 감소", "소비자 신뢰의 즉각적 회복"],
      answer: "국내 통화량 증가와 인플레이션 압력",
      difficulty: "hard"
    },
    {
      question: "기업이 생산과 소비를 동시에 수행하는 경제적 역할이 초래하는 시장 내 갈등은 무엇인가요?",
      options: ["가격 결정의 독점화 경향", "소비자 잉여의 증가", "환경 지속 가능성 증진", "노동 생산성의 즉각적 향상"],
      answer: "가격 결정의 독점화 경향",
      difficulty: "hard"
    },
    {
      question: "자본 개방이 신흥국 경제에 미치는 장기적 위험은 무엇인가요?",
      options: ["환율 안정화", "자본의 급격한 유출입과 금융 불안", "무역수지의 즉각적 개선", "소비자 신뢰의 지속적 증가"],
      answer: "자본의 급격한 유출입과 금융 불안",
      difficulty: "hard"
    },
    {
      question: "인플레이션이 저실업률 환경에서 발생하는 경제적 원인은 무엇인가요?",
      options: ["공급 충격의 지속", "수요-견인 인플레이션", "통화량의 구조적 감소", "무역흑자의 축소"],
      answer: "수요-견인 인플레이션",
      difficulty: "hard"
    },
    {
      question: "자산 버블이 경제에 미치는 장기적 파급효과는 무엇인가요?",
      options: ["금융 시스템의 붕괴와 경기 침체", "소비자 신뢰의 지속적 증가", "무역수지의 안정화", "생산성의 구조적 향상"],
      answer: "금융 시스템의 붕괴와 경기 침체",
      difficulty: "hard"
    },
    {
      question: "경상수지가 지속적인 적자를 기록할 경우 발생할 수 있는 경제적 문제는 무엇인가요?",
      options: ["외환위기와 통화 가치 하락", "소비자 신뢰의 즉각적 회복", "무역흑자의 구조적 증가", "생산성의 지속적 향상"],
      answer: "외환위기와 통화 가치 하락",
      difficulty: "hard"
    },
    {
      question: "구조적 실업이 노동 시장에 미치는 장기적 영향은 무엇인가요?",
      options: ["노동 생산성의 즉각적 증가", "인적 자본의 지속적 손실", "소비자 수요의 구조적 증가", "무역수지의 안정화"],
      answer: "인적 자본의 지속적 손실",
      difficulty: "hard"
    },
    {
      question: "자유시장경제가 초래할 수 있는 경제적 불균형의 주요 원인은 무엇인가요?",
      options: ["정부의 과도한 개입", "시장 실패와 외부효과의 무시", "통화량의 지속적 감소", "소비자 신뢰의 즉각적 회복"],
      answer: "시장 실패와 외부효과의 무시",
      difficulty: "hard"
    },
    {
      question: "디플레이션이 실질 GDP 감소로 이어지는 거시경제적 경로는 무엇인가요?",
      options: ["소비 지출의 증가", "기업 투자와 소비의 동반 위축", "무역흑자의 구조적 확대", "통화량의 즉각적 증가"],
      answer: "기업 투자와 소비의 동반 위축",
      difficulty: "hard"
    },
    {
      question: "자국 상품의 경쟁력 강화가 수출 증가로 이어지지 않을 경우의 주요 원인은 무엇인가요?",
      options: ["글로벌 수요의 구조적 감소", "소비자 신뢰의 즉각적 회복", "통화량의 지속적 증가", "무역흑자의 안정화"],
      answer: "글로벌 수요의 구조적 감소",
      difficulty: "hard"
    },
    {
      question: "과도한 통화량 증가가 인플레이션 외에 초래할 수 있는 경제적 부작용은 무엇인가요?",
      options: ["자산 가격의 비이성적 상승", "소비자 신뢰의 즉각적 회복", "무역수지의 안정화", "생산성의 구조적 향상"],
      answer: "자산 가격의 비이성적 상승",
      difficulty: "hard"
    },
    {
      question: "실업률 계산에서 경제활동인구를 분모로 사용하는 이유는 무엇인가요?",
      options: ["노동 시장의 실제 참여도를 반영하기 위해", "소비자 신뢰를 측정하기 위해", "통화량의 변동성을 반영하기 위해", "무역수지의 변화를 예측하기 위해"],
      answer: "노동 시장의 실제 참여도를 반영하기 위해",
      difficulty: "hard"
    },
    {
      question: "긴축 정책이 경기 과열 방지에 실패할 경우 발생할 수 있는 경제적 결과는 무엇인가요?",
      options: ["무역흑자의 구조적 확대", "크라우딩 아웃과 재정 적자 심화", "소비자 신뢰의 즉각적 회복", "생산성의 지속적 향상"],
      answer: "크라우딩 아웃과 재정 적자 심화",
      difficulty: "hard"
    },
    {
      question: "자동화 도입이 생산성 향상 외에 노동 시장에 미치는 장기적 부작용은 무엇인가요?",
      options: ["구조적 실업의 증가", "소비자 신뢰의 즉각적 회복", "무역수지의 안정화", "통화량의 지속적 증가"],
      answer: "구조적 실업의 증가",
      difficulty: "hard"
    },
    {
      question: "소비자들의 인플레이션 기대가 소비 증가로 이어지는 거시경제적 메커니즘은 무엇인가요?",
      options: ["구매력의 즉각적 감소", "실질 소득의 감소", "미래 가격 상승에 대한 선제적 대응", "무역흑자의 구조적 확대"],
      answer: "미래 가격 상승에 대한 선제적 대응",
      difficulty: "hard"
    },
    {
      question: "유동성 함정이 지속되는 거시경제적 환경에서 효과적인 정책 대안은 무엇인가요?",
      options: ["기준금리 추가 인하", "재정지출 확대와 구조 개혁", "통화량의 지속적 감소", "무역흑자의 구조적 확대"],
      answer: "재정지출 확대와 구조 개혁",
      difficulty: "hard"
    }
  ],
  proverb:[
      //easy
    {
      question: "'호랑이도 ○○하면 온다'에서 ○○에 들어갈 말은?",
      options: ["소문", "제 말", "이야기", "얘기"],
      answer: "제 말",
      difficulty: "easy"
    },
    {
      question: "'가는 말이 고와야 오는 말이 곱다'는 무슨 뜻인가요?",
      options: ["외모가 중요하다", "칭찬을 많이 하자", "말을 예쁘게 하자", "말하지 말자"],
      answer: "말을 예쁘게 하자",
      difficulty: "easy"
    },
    {
      question: "'티끌 모아 ○○'에서 ○○에 들어갈 말은?",
      options: ["태산", "바다", "강", "재산"],
      answer: "태산",
      difficulty: "easy"
    },
    {
      question: "'뛰는 놈 위에 나는 놈 있다'는 무슨 뜻인가요?",
      options: ["내가 최고다", "더 잘하는 사람이 있다", "열심히 하자", "나는 빠르다"],
      answer: "더 잘하는 사람이 있다",
      difficulty: "easy"
    },
    {
      question: "'낮말은 새가 듣고 밤말은 ○가 듣는다'에서 ○는?",
      options: ["귀신", "도깨비", "쥐", "사람"],
      answer: "쥐",
      difficulty: "easy"
    },
    {
      question: "'가는 날이 ○날'에서 ○에 들어갈 말은?",
      options: ["장", "시장", "비", "굿"],
      answer: "장",
      difficulty: "easy"
    },
    {
      question: "'열 길 물속은 알아도 한 길 ○○○는 모른다'에서 ○○○는?",
      options: ["바닷속", "마음속", "사람속", "얼굴"],
      answer: "사람속",
      difficulty: "easy"
    },
    {
      question: "'배보다 배꼽이 크다'는 무슨 뜻인가요?",
      options: ["배가 고프다", "주요한 것이 바뀌었다", "배꼽이 크다", "배가 작다"],
      answer: "주요한 것이 바뀌었다",
      difficulty: "easy"
    },
    {
      question: "'고래 싸움에 ○○ 등 터진다'에서 ○○는?",
      options: ["조개", "멸치", "새우", "물고기"],
      answer: "새우",
      difficulty: "easy"
    },
    {
      question: "'바늘 도둑이 ○○○ 된다'에서 ○○○는?",
      options: ["큰 도둑", "소도둑", "칼잡이", "법관"],
      answer: "소도둑",
      difficulty: "easy"
    },
    {
      question: "'하늘이 무너져도 ○○○ 구멍은 있다'에서 ○○○는?",
      options: ["솟아날", "도망칠", "극복할", "성공할"],
      answer: "솟아날",
      difficulty: "easy"
    },
    {
      question: "'소 잃고 ○○○ 고친다'에서 ○○○는?",
      options: ["외양간", "지붕", "창고", "문"],
      answer: "외양간",
      difficulty: "easy"
    },
    {
      question: "'세 살 버릇 여든까지 간다'는 무슨 뜻인가요?",
      options: ["습관은 쉽게 바뀐다", "나이 들면 바뀐다", "어릴 때 습관이 오래 간다", "오래 살면 잊는다"],
      answer: "어릴 때 습관이 오래 간다",
      difficulty: "easy"
    },
    {
      question: "'가는 정이 있어야 ○○ 정도 있다'에서 ○○는?",
      options: ["오는", "있는", "사는", "없는"],
      answer: "오는",
      difficulty: "easy"
    },
    {
      question: "'닭 잡아먹고 ○○○ 내놓기'에서 ○○○는?",
      options: ["개 발", "소 발", "닭 발", "오리발"],
      answer: "오리발",
      difficulty: "easy"
    },
    {
      question: "'구슬이 서 말이라도 ○○○ 해야 보배'에서 ○○○는?",
      options: ["꿰어야", "보여야", "빛나야", "골라야"],
      answer: "꿰어야",
      difficulty: "easy"
    },
    {
      question: "'떡 본 김에 ○○ 지낸다'에서 ○○는?",
      options: ["제사", "행사", "잔치", "차례"],
      answer: "제사",
      difficulty: "easy"
    },
    {
      question: "'미운 놈 떡 하나 더 준다'는 무슨 뜻인가요?",
      options: ["미운 사람을 피하자", "미운 사람에게도 잘해줘야 한다", "떡은 미운 사람 것이다", "미운 사람은 떡을 싫어한다"],
      answer: "미운 사람에게도 잘해줘야 한다",
      difficulty: "easy"
    },
    {
      question: "'우물 안 ○○○'에서 ○○○는?",
      options: ["청개구리", "새우", "고래", "개구리"],
      answer: "개구리",
      difficulty: "easy"
    },
    {
      question: "'벼는 익을수록 ○○를 숙인다'에서 ○○는?",
      options: ["키", "잎", "고개", "줄기"],
      answer: "고개",
      difficulty: "easy"
    },
    {
      question: "'하룻강아지 ○ 무서운 줄 모른다'에서 ○는?",
      options: ["곰", "범", "늑대", "사자"],
      answer: "범",
      difficulty: "easy"
    },
    {
      question: "'식은 죽 먹기'는 무슨 뜻인가요?",
      options: ["아주 힘든 일", "매우 쉬운 일", "맛있는 음식", "차가운 음식"],
      answer: "매우 쉬운 일",
      difficulty: "easy"
    },
    {
      question: "'말 한마디에 ○○○을 갚는다'에서 ○○○는?",
      options: ["사람", "천 냥 빚", "친구", "재산"],
      answer: "천 냥 빚",
      difficulty: "easy"
    },
    {
      question: "'되로 주고 ○로 받는다'에서 ○는?",
      options: ["말", "양", "말", "되"],
      answer: "말",
      difficulty: "easy"
    },
    {
      question: "'닭 쫓던 ○ 지붕 쳐다본다'에서 ○는?",
      options: ["개", "고양이", "사람", "아이"],
      answer: "개",
      difficulty: "easy"
    },
    {
      question: "'발 없는 ○○ ○○ 간다'에서 ○○는?",
      options: ["말이 천리", "소가 백리", "개가 멀리", "눈이 천리"],
      answer: "말이 천리",
      difficulty: "easy"
    },
    {
      question: "'원숭이도 ○○에서 떨어진다'에서 ○○는?",
      options: ["나무", "줄", "공중", "바위"],
      answer: "나무",
      difficulty: "easy"
    },
    {
      question: "'하늘의 별 따기'는 무슨 뜻인가요?",
      options: ["아주 쉬운 일", "매우 어려운 일", "기쁜 일", "슬픈 일"],
      answer: "매우 어려운 일",
      difficulty: "easy"
    },
    {
      question: "'바람이 불면 ○장수가 돈 번다'에서 ○는?",
      options: ["통", "안경", "풍금", "풍년"],
      answer: "통",
      difficulty: "easy"
    },
    {
      question: "'콩 심은 데 콩 나고 ○ 심은 데 ○ 난다'에서 ○는?",
      options: ["쌀", "팥", "보리", "밀"],
      answer: "팥",
      difficulty: "easy"
    },
    //medium
    {
      question: "'우물을 파도 한 우물을 파라'가 주는 교훈은 무엇인가요?",
      options: ["여러 일을 동시에 하라", "한 가지 일에 집중하라", "쉽게 포기하라", "남에게 도움을 청하라"],
      answer: "한 가지 일에 집중하라",
      difficulty: "medium"
    },
    {
      question: "'등잔 밑이 어둡다'는 어떤 상황을 비유하나요?",
      options: ["가까운 것을 놓치기 쉽다", "어두운 곳을 찾아야 한다", "불을 끄는 것이 중요하다", "멀리 있는 것이 더 낫다"],
      answer: "가까운 것을 놓치기 쉽다",
      difficulty: "medium"
    },
    {
      question: "'백문이 불여일견'이 강조하는 가치는 무엇인가요?",
      options: ["듣는 것의 중요성", "직접 보는 것의 중요성", "말하는 것의 중요성", "기다리는 것의 중요성"],
      answer: "직접 보는 것의 중요성",
      difficulty: "medium"
    },
    {
      question: "'돌다리도 두들겨 보고 건너라'가 주는 교훈은 무엇인가요?",
      options: ["빠르게 행동하라", "항상 신중하게 확인하라", "모험을 즐겨라", "다리를 신뢰하라"],
      answer: "항상 신중하게 확인하라",
      difficulty: "medium"
    },
    {
      question: "'하늘이 무너져도 솟아날 구멍은 있다'가 주는 희망적인 메시지는 무엇인가요?",
      options: ["어려움에도 해결책이 있다", "하늘은 항상 안전하다", "포기하는 것이 최선이다", "쥐가 문제를 해결한다"],
      answer: "어려움에도 해결책이 있다",
      difficulty: "medium"
    },
    {
      question: "'산 넘어 산'은 어떤 삶의 상황을 표현하나요?",
      options: ["계속되는 성공", "연속되는 어려움", "즐거운 등산", "높은 목표의 달성"],
      answer: "연속되는 어려움",
      difficulty: "medium"
    },
    {
      question: "'공든 탑이 무너지랴'가 강조하는 가치는 무엇인가요?",
      options: ["쉽게 무너지는 노력", "정성 들인 일의 지속성", "탑의 높이", "빠른 완성의 중요성"],
      answer: "정성 들인 일의 지속성",
      difficulty: "medium"
    },
    {
      question: "'구사일생(九死一生)'은 어떤 상황을 묘사하는 사자성어인가요?",
      options: ["쉽게 성공하는 상황", "죽을 고비를 넘기는 상황", "끊임없는 고난", "선택의 기로"],
      answer: "죽을 고비를 넘기는 상황",
      difficulty: "medium"
    },
    {
      question: "'청출어람(靑出於藍)'이 나타내는 관계는 무엇인가요?",
      options: ["스승과 제자의 경쟁", "제자가 스승을 능가함", "친구 간의 우정", "부모와 자식의 갈등"],
      answer: "제자가 스승을 능가함",
      difficulty: "medium"
    },
    {
      question: "'열 번 찍어 안 넘어가는 나무 없다'가 주는 교훈은 무엇인가요?",
      options: ["포기가 중요하다", "꾸준한 노력이 성공을 가져온다", "나무를 자르지 말라", "한 번만 시도하라"],
      answer: "꾸준한 노력이 성공을 가져온다",
      difficulty: "medium"
    },
    {
      question: "'허례허식(虛禮虛飾)'이 비판하는 태도는 무엇인가요?",
      options: ["진심 어린 행동", "겉만 번지르르한 태도", "단순한 생활", "효율적인 행동"],
      answer: "겉만 번지르르한 태도",
      difficulty: "medium"
    },
    {
      question: "'윗물이 맑아야 아랫물이 맑다'가 강조하는 리더십의 요소는 무엇인가요?",
      options: ["속도", "도덕성과 모범", "강한 통제", "자유로운 결정"],
      answer: "도덕성과 모범",
      difficulty: "medium"
    },
    {
      question: "'콩 심은 데 콩 나고 팥 심은 데 팥 난다'가 나타내는 원리는 무엇인가요?",
      options: ["행동에 따른 결과의 필연성", "농사의 다양성", "작물의 우연한 성장", "노력의 무의미함"],
      answer: "행동에 따른 결과의 필연성",
      difficulty: "medium"
    },
    {
      question: "'공명정대(公明正大)'가 의미하는 행동 방식은 무엇인가요?",
      options: ["사적인 이익 추구", "공정하고 떳떳한 태도", "감정적인 결정", "숨겨진 의도"],
      answer: "공정하고 떳떳한 태도",
      difficulty: "medium"
    },
    {
      question: "'낫 놓고 기역자도 모른다'가 비유하는 사람의 상태는 무엇인가요?",
      options: ["기초 지식이 부족한 상태", "공부를 열심히 한 상태", "도구를 잘 다루는 상태", "문제를 쉽게 해결하는 상태"],
      answer: "기초 지식이 부족한 상태",
      difficulty: "medium"
    },
    {
      question: "'발 없는 말이 천리 간다'가 주는 경고는 무엇인가요?",
      options: ["말은 멀리 가지 않는다", "소문은 빠르게 퍼지니 조심하라", "말이 자유롭다", "소문을 믿어야 한다"],
      answer: "소문은 빠르게 퍼지니 조심하라",
      difficulty: "medium"
    },
    {
      question: "'빈 수레가 요란하다'가 비판하는 태도는 무엇인가요?",
      options: ["내용 있는 행동", "겉만 요란한 태도", "조용한 성격", "효율적인 일처리"],
      answer: "겉만 요란한 태도",
      difficulty: "medium"
    },
    {
      question: "'고생 끝에 ○ 이 온다'에서 ○는?",
      options: ["복", "기쁨", "낙", "해"],
      answer: "낙",
      difficulty: "medium"
    },
    {
      question: "'믿는 도끼에 ○○ 찍힌다'에서 ○○는?",
      options: ["발목", "무릎", "발등", "허리"],
      answer: "발등",
      difficulty: "medium"
    },
    {
      question: "'꿩 대신 ○'에서 ○는?",
      options: ["토끼", "닭", "사슴", "오리"],
      answer: "닭",
      difficulty: "medium"
    },
    {
      question: "'배은망덕(背恩忘德)'이 비판하는 행동은 무엇인가요?",
      options: ["은혜를 갚는 행동", "받은 은혜를 저버리는 행동", "친구를 돕는 행동", "도덕적 행동"],
      answer: "받은 은혜를 저버리는 행동",
      difficulty: "medium"
    },
    {
      question: "'명실상부(名實相符)'가 강조하는 가치는 무엇인가요?",
      options: ["이름과 실제의 불일치", "이름과 실제의 일치", "실속의 부재", "외형의 중요성"],
      answer: "이름과 실제의 일치",
      difficulty: "medium"
    },
    {
      question: "'반포지효(反哺之孝)'가 나타내는 가족 관계는 무엇인가요?",
      options: ["부모가 자식을 돌봄", "자식이 부모에게 효도함", "형제 간의 우애", "가족 간의 경쟁"],
      answer: "자식이 부모에게 효도함",
      difficulty: "medium"
    },
    {
      question: "'사공이 많으면 배가 산으로 간다'가 경계하는 상황은 무엇인가요?",
      options: ["협동의 중요성", "의견 충돌로 인한 혼란", "사공의 능력 부족", "배의 방향성 상실"],
      answer: "의견 충돌로 인한 혼란",
      difficulty: "medium"
    },
    {
      question: "'유비무환(有備無患)'이 강조하는 삶의 태도는 무엇인가요?",
      options: ["즉흥적인 행동", "미리 대비하는 태도", "걱정을 늘리는 태도", "무계획의 자유"],
      answer: "미리 대비하는 태도",
      difficulty: "medium"
    },
    {
      question: "'내 코가 ○○'에서 ○○는?",
      options: ["석자", "둘레", "높다", "작다"],
      answer: "석자",
      difficulty: "medium"
    },
    {
      question: "'도토리 키 재기'가 비유하는 상황은 무엇인가요?",
      options: ["중요한 경쟁", "의미 없는 비교", "도토리의 가치", "키 측정의 중요성"],
      answer: "의미 없는 비교",
      difficulty: "medium"
    },
    {
      question: "'개천에서 ○ 난다'에서 ○는?",
      options: ["봉황", "용", "나비", "새"],
      answer: "용",
      difficulty: "medium"
    },
    {
      question: "'금상첨화(錦上添花)'가 묘사하는 상황은 무엇인가요?",
      options: ["좋은 일에 좋은 일이 더해짐", "장식이 불필요함", "비단의 가치 하락", "꽃의 중요성"],
      answer: "좋은 일에 좋은 일이 더해짐",
      difficulty: "medium"
    },
    {
      question: "'이열치열(以熱治熱)'이 제시하는 문제 해결 방식은 무엇인가요?",
      options: ["차가운 것으로 문제를 해결", "비슷한 성질로 문제를 해결", "문제를 피함", "문제를 무시함"],
      answer: "비슷한 성질로 문제를 해결",
      difficulty: "medium"
    },
    //hard
    {
      question: "'각주구검(刻舟求劍)'의 역사적 유래와 현대적 적용은 무엇인가요?",
      options: ["춘추전국시대의 어리석은 행동, 변화에 적응하지 못하는 태도", "한나라의 전쟁 전략, 신중한 계획의 중요성", "조선시대의 학문적 태도, 고전 학습의 필요성", "고구려의 외교 정책, 협상의 기술"],
      answer: "춘추전국시대의 어리석은 행동, 변화에 적응하지 못하는 태도",
      difficulty: "hard"
    },
    {
      question: "'마부위침(磨斧爲針)'이 철학적으로 강조하는 삶의 태도는 무엇인가요?",
      options: ["즉흥적인 행동의 가치", "꾸준한 노력과 인내의 중요성", "도구의 효율적 사용", "목표의 빠른 달성"],
      answer: "꾸준한 노력과 인내의 중요성",
      difficulty: "hard"
    },
    {
      question: "'조삼모사(朝三暮四)'의 유래와 현대 정치에서의 적용 가능성은 무엇인가요?",
      options: ["춘추전국시대의 말장난, 정책 발표의 표현 조작", "한나라의 경제 정책, 세금 조정의 기술", "고려시대의 교육법, 학습 순서의 조정", "신라의 군사 전략, 병력 배치의 변화"],
      answer: "춘추전국시대의 말장난, 정책 발표의 표현 조작",
      difficulty: "hard"
    },
    {
      question: "'연목구어(緣木求魚)'가 비판하는 행동의 현대적 예시는 무엇인가요?",
      options: ["잘못된 투자 전략으로 자산 증대를 기대하는 행위", "효율적인 팀워크로 프로젝트를 완성하는 행위", "과학적 연구로 새로운 발견을 추구하는 행위", "교육 개혁으로 학습 성과를 높이는 행위"],
      answer: "잘못된 투자 전략으로 자산 증대를 기대하는 행위",
      difficulty: "hard"
    },
    {
      question: "'지록위마(指鹿爲馬)'의 역사적 배경과 현대 사회에서의 유사 사례는 무엇인가요?",
      options: ["진나라의 권력 남용, 가짜 뉴스의 유포", "당나라의 외교 정책, 동맹국의 설득", "고구려의 전쟁 전략, 적의 혼란 유도", "조선의 법제도, 공정한 판결"],
      answer: "진나라의 권력 남용, 가짜 뉴스의 유포",
      difficulty: "hard"
    },
    {
      question: "'토사구팽(兎死狗烹)'이 경계하는 윤리적 문제와 현대적 맥락은 무엇인가요?",
      options: ["인재 활용 후 배신, 기업의 인력 구조조정", "동물 보호의 필요성, 환경 정책의 강화", "전쟁 후 재건, 국가의 복구 노력", "교육의 공정성, 학생 선발의 투명성"],
      answer: "인재 활용 후 배신, 기업의 인력 구조조정",
      difficulty: "hard"
    },
    {
      question: "'형설지공(螢雪之功)'의 철학적 함의와 현대 교육에서의 적용은 무엇인가요?",
      options: ["어려운 환경에서의 노력, 자기주도 학습의 중요성", "자연과의 조화, 환경 교육의 필요성", "공정한 경쟁, 시험 제도의 개혁", "단체 학습, 팀워크의 강화"],
      answer: "어려운 환경에서의 노력, 자기주도 학습의 중요성",
      difficulty: "hard"
    },
    {
      question: "'우공이산(愚公移山)'의 유래와 현대적 리더십에 주는 교훈은 무엇인가요?",
      options: ["중국 고대의 끈기, 장기적 비전의 중요성", "한나라의 건설 기술, 인프라 개발의 필요성", "조선의 농업 개혁, 토지 관리의 효율성", "고려의 군사 전략, 방어 체계의 강화"],
      answer: "중국 고대의 끈기, 장기적 비전의 중요성",
      difficulty: "hard"
    },
    {
      question: "'망양지탄(望洋之歎)'의 철학적 배경과 현대적 응용은 무엇인가요?",
      options: ["자신의 한계 인식, 겸손한 태도의 필요성", "바다의 중요성, 해양 자원 개발", "지도자의 책임, 국가 정책의 조정", "여행의 가치, 새로운 경험의 추구"],
      answer: "자신의 한계 인식, 겸손한 태도의 필요성",
      difficulty: "hard"
    },
    {
      question: "'계란유골(鷄卵有骨)'이 비유하는 현대적 상황과 그 교훈은 무엇인가요?",
      options: ["운의 불확실성, 위험 관리의 중요성", "달걀의 강도, 품질 관리의 필요성", "닭의 번식, 농업 기술의 발전", "자원의 희소성, 경제 정책의 조정"],
      answer: "운의 불확실성, 위험 관리의 중요성",
      difficulty: "hard"
    },
    {
      question: "'고장난명(孤掌難鳴)'의 철학적 함의와 조직에서의 적용은 무엇인가요?",
      options: ["협력의 필요성, 팀워크의 중요성", "개인의 독립성, 자율적 의사결정", "소리의 중요성, 커뮤니케이션 기술", "박수의 상징성, 리더십의 상징"],
      answer: "협력의 필요성, 팀워크의 중요성",
      difficulty: "hard"
    },
    {
      question: "'교각살우(矯角殺牛)'의 역사적 맥락과 현대 경영에서의 교훈은 무엇인가요?",
      options: ["고대의 기술적 오류, 세부 조정의 위험성", "조선의 농업 기술, 소 관리의 중요성", "한나라의 군사 전략, 병력 배치의 효율성", "고구려의 건축 기술, 구조적 안정성"],
      answer: "고대의 기술적 오류, 세부 조정의 위험성",
      difficulty: "hard"
    },
    {
      question: "'군계일학(群鷄一鶴)'이 현대 사회에서 상징하는 인재상은 무엇인가요?",
      options: ["탁월한 리더십과 독창성", "평균적인 능력과 협력", "전통적 지식의 계승", "다양한 기술의 습득"],
      answer: "탁월한 리더십과 독창성",
      difficulty: "hard"
    },
    {
      question: "'금의환향(錦衣還鄕)'의 역사적 배경과 현대적 가치관에서의 재해석은 무엇인가요?",
      options: ["고대의 출세, 지역 사회로의 기여", "조선의 관료 제도, 공직자의 책임", "한나라의 전쟁, 군인의 명예", "고구려의 외교, 국제적 위상"],
      answer: "고대의 출세, 지역 사회로의 기여",
      difficulty: "hard"
    },
    {
      question: "'난형난제(難兄難弟)'의 철학적 맥락과 현대 경쟁 환경에서의 적용은 무엇인가요?",
      options: ["우열의 불분명성, 공정한 경쟁의 필요성", "형제의 우애, 가족 중심의 가치", "지도자의 책임, 리더십의 균형", "교육의 공정성, 평가 기준의 명확성"],
      answer: "우열의 불분명성, 공정한 경쟁의 필요성",
      difficulty: "hard"
    },
    {
      question: "'동병상련(同病相憐)'의 심리적 배경과 현대 사회에서의 응용은 무엇인가요?",
      options: ["공감의 심리, 커뮤니티 지원의 중요성", "질병의 치료, 의료 기술의 발전", "경쟁의 심리, 승리 전략의 필요성", "교육의 공정성, 학습 기회의 균등화"],
      answer: "공감의 심리, 커뮤니티 지원의 중요성",
      difficulty: "hard"
    },
    {
      question: "'독불장군(獨不將軍)'의 철학적 함의와 현대 조직에서의 교훈은 무엇인가요?",
      options: ["협력의 필수성, 조직 내 소통의 중요성", "독립적 리더십, 단독 결정의 가치", "군사적 전략, 단일 지휘 체계", "개인의 명예, 독립적 업적의 중요성"],
      answer: "협력의 필수성, 조직 내 소통의 중요성",
      difficulty: "hard"
    },
    {
      question: "'미생지신(尾生之信)'의 역사적 유래와 현대적 윤리적 딜레마는 무엇인가요?",
      options: ["고대 중국의 신의, 과도한 약속의 위험성", "조선의 도덕률, 사회적 신뢰의 중요성", "한나라의 법제도, 계약의 엄격성", "고구려의 외교, 동맹의 신뢰"],
      answer: "고대 중국의 신의, 과도한 약속의 위험성",
      difficulty: "hard"
    },
    {
      question: "'박학다식(博學多識)'의 철학적 가치와 현대 교육에서의 적용은 무엇인가요?",
      options: ["광범위한 지식 추구, 융합적 사고의 중요성", "전문성의 집중, 단일 분야의 깊이", "학문의 전통, 고전 학습의 필요성", "시험의 공정성, 평가의 다양성"],
      answer: "광범위한 지식 추구, 융합적 사고의 중요성",
      difficulty: "hard"
    },
    {
      question: "'배수진(背水陣)'의 역사적 맥락과 현대적 전략에서의 응용은 무엇인가요?",
      options: ["한나라의 전쟁 전략, 결단력 있는 리스크 테이킹", "조선의 방어 전략, 성곽 건설의 중요성", "고구려의 외교, 동맹의 강화", "고려의 경제 정책, 자원 배분의 효율성"],
      answer: "한나라의 전쟁 전략, 결단력 있는 리스크 테이킹",
      difficulty: "hard"
    },
    {
      question: "'설상가상(雪上加霜)'의 철학적 함의와 현대 위기 관리에서의 교훈은 무엇인가요?",
      options: ["악재의 연속성, 복합 위기 대비의 필요성", "겨울의 아름다움, 환경 보호의 중요성", "눈의 상징성, 문화적 전통의 계승", "서리의 위험성, 기후 변화 대응"],
      answer: "악재의 연속성, 복합 위기 대비의 필요성",
      difficulty: "hard"
    },
    {
      question: "'승승장구(乘勝長驅)'의 역사적 배경과 현대 비즈니스에서의 적용은 무엇인가요?",
      options: ["고대의 전쟁 승리, 시장 선점 전략의 중요성", "조선의 외교 정책, 국제 협력의 필요성", "한나라의 경제 성장, 자원 관리의 효율성", "고구려의 문화 발전, 예술의 진흥"],
      answer: "고대의 전쟁 승리, 시장 선점 전략의 중요성",
      difficulty: "hard"
    },
    {
      question: "'오리무중(五里霧中)'의 철학적 맥락과 현대 의사결정에서의 교훈은 무엇인가요?",
      options: ["불확실성의 인식, 정보 기반 의사결정의 필요성", "안개의 아름다움, 자연과의 조화", "길의 중요성, 인프라 개발의 필요성", "여행의 가치, 새로운 경험의 추구"],
      answer: "불확실성의 인식, 정보 기반 의사결정의 필요성",
      difficulty: "hard"
    },
    {
      question: "'유비무환(有備無患)'의 철학적 배경과 현대 리스크 관리에서의 적용은 무엇인가요?",
      options: ["선제적 대비의 중요성, 위기 관리 계획의 필요성", "즉흥적 행동의 가치, 유연한 대응", "걱정의 부재, 긍정적 사고의 중요성", "자원의 절약, 경제적 효율성"],
      answer: "선제적 대비의 중요성, 위기 관리 계획의 필요성",
      difficulty: "hard"
    },
    {
      question: "'작심삼일(作心三日)'의 심리적 배경과 현대 자기계발에서의 교훈은 무엇인가요?",
      options: ["결심의 일시성, 지속적 동기부여의 필요성", "결심의 중요성, 단기 목표의 가치", "시간의 경과, 빠른 성취의 필요성", "휴식의 가치, 재충전의 중요성"],
      answer: "결심의 일시성, 지속적 동기부여의 필요성",
      difficulty: "hard"
    },
    {
      question: "'전화위복(轉禍爲福)'의 철학적 함의와 현대 위기에서의 응용은 무엇인가요?",
      options: ["위기의 기회 전환, 혁신적 사고의 중요성", "불행의 영속성, 방어적 전략의 필요성", "복의 상징성, 문화적 전통의 계승", "재앙의 예측, 예방적 조치의 중요성"],
      answer: "위기의 기회 전환, 혁신적 사고의 중요성",
      difficulty: "hard"
    },
    {
      question: "'청출어람(靑出於藍)'의 역사적 유래와 현대 교육에서의 교훈은 무엇인가요?",
      options: ["고대 중국의 염색, 후배의 혁신적 학습 필요성", "조선의 학문, 전통 계승의 중요성", "한나라의 기술, 공정 개선의 필요성", "고구려의 문화, 예술의 발전"],
      answer: "고대 중국의 염색, 후배의 혁신적 학습 필요성",
      difficulty: "hard"
    },
    {
      question: "'침소봉대(針小棒大)'의 철학적 비판과 현대 미디어에서의 적용은 무엇인가요?",
      options: ["과장의 위험성, 정보 왜곡의 문제", "작은 것의 가치, 소규모 혁신의 중요성", "봉의 상징성, 리더십의 상징", "침의 효율성, 정밀 작업의 필요성"],
      answer: "과장의 위험성, 정보 왜곡의 문제",
      difficulty: "hard"
    },
    {
      question: "'타산지석(他山之石)'의 철학적 가치와 현대 학습에서의 응용은 무엇인가요?",
      options: ["외부의 교훈 활용, 열린 학습 태도의 중요성", "돌의 중요성, 자원 관리의 필요성", "산의 상징성, 환경 보호의 가치", "경쟁의 중요성, 비교 우위의 추구"],
      answer: "외부의 교훈 활용, 열린 학습 태도의 중요성",
      difficulty: "hard"
    },
    {
      question: "'호사다마(好事多魔)'의 철학적 배경과 현대 프로젝트 관리에서의 교훈은 무엇인가요?",
      options: ["성공의 장애 요인, 리스크 관리의 필요성", "좋은 일의 영속성, 낙관적 계획의 중요성", "마귀의 상징성, 문화적 전통의 계승", "복의 상징성, 긍정적 사고의 가치"],
      answer: "성공의 장애 요인, 리스크 관리의 필요성",
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
      question: "조만식의 주도로 평양에서 시작되어 '조선 사람 조선 것!', '내 살림 내 것으로!' 구호를 만든 민족 운동은?",
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
      question: "1920대 이상재 등이 중심이 되어 고등 교육 실현을 위해 전개한 민족 운동은?",
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
      options: ["동양 척식 주식화사가 설립됐다", "일제가 황무지 개간권을 요구했다", "조선어 학회가 해산되는 결과를 가져왔다", "메가타의 주도로 화폐 정리 사업이 시행됐다"],
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
      question: "'태양의 후예'라는 드라마에서 많이 사용한 광고로 영화나 드라마 등에서 특정 제품을 노출시켜 광고 효과를 노리는 것을 무엇이라 하는가?",
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
      question: "'이데아'를 주장한 철학자는 누구인가?",
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
      question: "'시치미 떼다'와 관련있는 동물은 무엇인가?",
      options: ["매", "꿩", "비둘기", "참새"],
      answer: "매",
      difficulty: "easy"
    },
    //medium
    {
      question: "경제적으로 어렵고 사회적으로 소외되어 있는 사람들이 뜻을 같이하고 힘을 한데 모아 스스로 자신들의 처지를 개선하고 필요를 충족시키기 위해 만든 경제조직을 무엇이라 하는가?",
      options: ["공제조합", "노동조합", "협동조합", "익명조합"],
      answer: "협동조합",
      difficulty: "medium"
    },
    {
      question: "다음 중 최초로 과거제도를 실시한 고려시대 왕은 누구인가? (2016, 한국연구재단)",
      options: ["태조", "태종", "광종", "성종"],
      answer: "광종",
      difficulty: "medium"
    },
    {
      question: "모차르트의 미완성 곡으로 죽은 이의 넋을 달래는 곡은 무엇인가?",
      options: ["레퀴엠", "소나타", "칸타타", "오라토리오"],
      answer: "레퀴엠",
      difficulty: "medium"
    },
    {
      question: "국악기 중 가장 낮은 음역에 속하는 현악기로 7줄을 갖고 있는 악기는 무엇이라 하는가?",
      options: ["거문고", "가야금", "소금", "아쟁"],
      answer: "아쟁",
      difficulty: "medium"
    },
    {
      question: "소셜 네트워크 서비스를 이용해 소규모 후원이나 투자 등의 목적으로 인터넷과 같은 플랫폼을 통해 다수의 개인들로부터 자금을 모으는 행위를 무엇이라 하는가?",
      options: ["스토리펀딩", "크라우드 펀딩", "매스펀딩", "컨슈머펀딩"],
      answer: "크라우드 펀딩",
      difficulty: "medium"
    },
    {
      question: "영장이 필요하지 않는 경우는 다음 중 어느 것인가?",
      options: ["심문", "구속", "압수", "수색"],
      answer: "심문",
      difficulty: "medium"
    },
    {
      question: "한국은행에서 매월 발표하는 정책금리를 무엇이라 하는가?",
      options: ["기준금리", "콜금리", "CD금리", "은행금리"],
      answer: "기준금리",
      difficulty: "medium"
    },
    {
      question: "컴퓨터 프로그램에 침입한 스팸과 컴퓨터 바이러스, 크래커를 탐지하는 가상 컴퓨터를 무엇이라 하는가?",
      options: ["클라우드 컴퓨팅", "허니팟", "피싱컴퓨팅", "크래커체킹"],
      answer: "허니팟",
      difficulty: "medium"
    },
    {
      question: "생산연령인구 비중이 하락하면서 경제성장이 지체되는 것을 무엇이라 하는가?",
      options: ["인구보너스", "인구오너스", "인구고령화", "인구초고령"],
      answer: "인구오너스",
      difficulty: "medium"
    },
    {
      question: "캣츠(cats)는 앤드루 로이드 웨버가 작곡을 하고 1981년 영국에서 초연을 하면서 세계에서 가장 흥행에 성공한 뮤지컬 중 하나이다. 캣츠는 누구의 시를 바탕으로 곡을 붙였는가?",
      options: ["T. S. 엘리엇", "G. G. 바이런", "W. 워즈워드", "P. B. 셸리"],
      answer: "T. S. 엘리엇",
      difficulty: "medium"
    },
    {
      question: "다음 중 작곡가와 작품명이 바르게 연결되지 못한 것은?",
      options: ["차이코프스키 - 비창", "멘델스존 - 스코틀랜드", "베를리오즈 - 환상 교향곡", "하이든 - 신세계 교향곡"],
      answer: "하이든 - 신세계 교향곡",
      difficulty: "medium"
    },
    {
      question: "하나의 상품을 구입함으로써 그 상품과 연관된 제품을 연속적으로 구입하게 되는 현상을 무엇이라 하는가?",
      options: ["애플 효과", "디드로 효과", "커넥션 효과", "스탕달 효과"],
      answer: "디드로 효과",
      difficulty: "medium"
    },
    {
      question: "타인에게 전가되는 세금은 무엇인가?",
      options: ["상속세", "부가가치세", "법인세", "재산세"],
      answer: "부가가치세",
      difficulty: "medium"
    },
    {
      question: "다음 중 조선시대 작품이 아닌 것은?",
      options: ["서경별곡", "관동별곡", "관서별곡", "성산별곡"],
      answer: "서경별곡",
      difficulty: "medium"
    },
    {
      question: "자신이 화가 나고 억압된 상태를 다른사람을 싫어하는 것으로 대신하는 정신병을 무엇이라 하는가?",
      options: ["편향", "투사", "반전", "해리"],
      answer: "투사",
      difficulty: "medium"
    },
    {
      question: "근대 5종과 철인 3종경기의 공통종목은 무엇인가?",
      options: ["펜싱", "수영", "승마", "사격"],
      answer: "수영",
      difficulty: "medium"
    },
    {
      question: "산성비는 ph 몇 이하인 경우를 말하는가?",
      options: ["8", "7", "6.5", "5.6"],
      answer: "5.6",
      difficulty: "medium"
    },
    {
      question: "보다 진보된 스마트 체계를 통해 언제 어디서나 다중 콘텐츠를 공유하고 실행할 수 있으며 끊김없는 이어보기가 가능한 사용자 중심적인 서비스이다. 하나의 콘텐츠를 스마트폰ㆍPCㆍ스마트TVㆍ태블릿PCㆍ자동차 등 다양한 디지털 정보기기에서 공유할 수 있는 차세대 컴퓨팅ㆍ네트워크 서비스를 무엇이라 하는가?",
      options: ["클라우드 서비스", "N스크린", "유비쿼터스 스크린", "유비쿼터스 서비스"],
      answer: "N스크린",
      difficulty: "medium"
    },
    {
      question: "모바일메신저 어플이 아닌 것은?",
      options: ["라인", "왓츠앱", "탱고", "심비안"],
      answer: "심비안",
      difficulty: "medium"
    },
    {
      question: "부동산 경기침체 장기화로 집값 하락이 지속되고 있는 가운데, 집을 팔더라도 대출금이나 세입자 전세금을 다 갚지 못하는 주택을 무엇이라 하는가?",
      options: ["세어(share) 주택", "깡통 주택", "푸어(poor) 주택", "하우스 푸어(house poor)"],
      answer: "깡통 주택",
      difficulty: "medium"
    },
    {
      question: "무위자연을 위시하여 겸허 등을 주장한 중국철학은 무엇인가?",
      options: ["노자철학", "장자철학", "성리학", "양명학"],
      answer: "노자철학",
      difficulty: "medium"
    },
    {
      question: "철학과 철학자의 내용의 연결이 잘못된 것은?",
      options: ["성선설 - 순자", "성악설 - 순자", "묵가 - 묵자", "유가 - 공자"],
      answer: "성선설 - 순자",
      difficulty: "medium"
    },
    {
      question: "유능한 인재를 모아도 좋은 성과를 내지 못하는 현상을 무엇이라 하는가?",
      options: ["아테네 신드롬", "아폴로 신드롬", "올림푸스 신드롬", "제우스 신드롬"],
      answer: "아폴로 신드롬",
      difficulty: "medium"
    },
    {
      question: "성종 때 시작해서 세조 때 완성된 것은 다음 중 어느 것인가?",
      options: ["동의보감", "경국대전", "대전통편", "국조보감"],
      answer: "경국대전",
      difficulty: "medium"
    },
    {
      question: "절기 중 여름에 속하는 8번째 절기는 다음 중 무엇인가?",
      options: ["곡우", "입하", "소만", "망종"],
      answer: "소만",
      difficulty: "medium"
    },
    {
      question: "다음 중 국제단위계가 아닌 것은?",
      options: ["압력(pascal)", "질량(kg)", "시간(s)", "길이(m)"],
      answer: "압력(pascal)",
      difficulty: "medium"
    },
    {
      question: "출퇴근 시간, 휴식 시간 등 짧은 시간에 간편하게 즐길 수 있는 문화 콘텐츠를 무엇이라 하는가?",
      options: ["서브컬쳐", "타임컬쳐", "미디어 컬쳐", "스낵컬쳐"],
      answer: "스낵컬쳐",
      difficulty: "medium"
    },
    {
      question: "유명한 명언과 학자의 이름이 바르게 연결되지 않은 것은?",
      options: ["스피노자 - 비록 내일 지구의 종말이 온다 하여도 오늘 한 그루의 사과나무를 심겠다.", "루소 - 자연으로 돌아가라", "데카르트 - 인간은 수단이 아닌 목적이 되어야 한다.", "소크라테스 - 내가 아는 단 한가지 사실은 나는 아무것도 모른다는 것이다."],
      answer: "데카르트 - 인간은 수단이 아닌 목적이 되어야 한다.",
      difficulty: "medium"
    },
    {
      question: "다음 중 보완재 관계가 아닌 것은?",
      options: ["버터 - 마가린", "커피 - 설탕", "안경테 - 안경알", "오른쪽 신발 - 왼쪽 신발"],
      answer: "버터 - 마가린",
      difficulty: "medium"
    },
    {
      question: "통화량 증가에 대한 효과로 옳은 것은?",
      options: ["저축성 예금 증가", "이자율 하락", "물가하락", "국민소득 감소"],
      answer: "이자율 하락",
      difficulty: "medium"
    },
    //hard
    {
      question: "중장년층을 중심으로 노화를 최대한 늦추고 나이에 비해 젊게 살아가려는 욕구가 확산되는 사회적 현상을 무엇이라 하는가?",
      options: ["무드셀라 증후군", "샹그릴라 증후군", "드메 증후군", "코르사코프 증후군"],
      answer: "샹그릴라 증후군",
      difficulty: "hard"
    },
    {
      question: "일회용 패스워드로 로그인 할 때마다 일회성 패스워드를 생성하는 보안시스템을 무엇이라 하는가?",
      options: ["CMS", "KIOS", "OTP", "ATM"],
      answer: "OTP",
      difficulty: "hard"
    },
    {
      question: "의회의 표결에서 가부동수(可否同數)일 때, 의장이 던지는 결정권 투표를 무엇이라 하는가?",
      options: ["필리버스터", "캐스팅 보트", "크로스보팅", "게리맨더링"],
      answer: "캐스팅 보트",
      difficulty: "hard"
    },
    {
      question: "다음 사자성어 중에서 숫자의 합은 얼마인가? 남가일몽, 장삼이사, 군계일학",
      options: ["4", "5", "9", "11"],
      answer: "9",
      difficulty: "hard"
    },
    {
      question: "자신을 위한 소비에 적극적인 20~30대 여성을 칭하는 유형을 무엇이라 하는가?",
      options: ["로엘족", "포미족", "메트로섹슈얼족", "여미족"],
      answer: "포미족",
      difficulty: "hard"
    },
    {
      question: "문화유적이나 예술 등을 무분별하게 파괴하는 행위를 무엇이라 하는가?",
      options: ["반달리즘", "쇼비니즘", "네가홀리즘", "노니즘"],
      answer: "반달리즘",
      difficulty: "hard"
    },
    {
      question: "황순원의 작품이 아닌 것은?",
      options: ["학", "별", "소나기", "광장"],
      answer: "광장",
      difficulty: "hard"
    },
    {
      question: "극비문서를 몰래 발표하는 저널리즘을 무엇이라 하는가?",
      options: ["시크릿 저널리즘", "새도우 저널리즘", "제록스 저널리즘", "블랙 저널리즘"],
      answer: "제록스 저널리즘",
      difficulty: "hard"
    },
    {
      question: "화폐유통의 '폐단'을 지적한 학자와 '필요성'을 지적한 학자를 바르게 연결한 것은?",
      options: ["유형원 - 유수원", "정약용 - 이익", "박제가 - 홍대용", "이익 - 박지원"],
      answer: "이익 - 박지원",
      difficulty: "hard"
    },
    {
      question: "다음 사자성어 중 한자 뜻이 다른 것은?",
      options: ["우이독경(牛耳讀經)", "우이송경(牛耳誦經)", "마부작침(磨斧作針)", "마이동풍(馬耳東風)"],
      answer: "마부작침(磨斧作針)",
      difficulty: "hard"
    },
    {
      question: "다음 중 4P가 아닌 것은?",
      options: ["people", "place", "price", "promotion"],
      answer: "people",
      difficulty: "hard"
    },
    {
      question: "어떤 상황이 처음에는 미미하게 진행되다가 어느 순간 균형을 깨고 모든 것이 한순간에 변화되는 극적인 순간을 무엇이라 하는가?",
      options: ["디아스포라", "티핑포인트", "퀀텀점프", "팻 핑거"],
      answer: "티핑포인트",
      difficulty: "hard"
    },
    {
      question: "근거가 없고 이치에 맞지 않는 것을 억지로 끌어대어 자기에게 유리하도록 맞춘다는 사자성어는 무엇인가?",
      options: ["권불십년(權不十年)", "견강부회(牽强附會)", "권토중래(捲土重來)", "누란지위(累卵之危)"],
      answer: "견강부회(牽强附會)",
      difficulty: "hard"
    },
    {
      question: "스마트폰 시장에서 제품수명이 짧아지는 법칙을 무엇이라 하는가?",
      options: ["애플법칙", "안드로이드 법칙", "샤오미 법칙", "SM 법칙"],
      answer: "안드로이드 법칙",
      difficulty: "hard"
    },
    {
      question: "우산혁명과 관련된 곳은 어느 인가?",
      options: ["이집트", "리비아", "시리아", "홍콩"],
      answer: "홍콩",
      difficulty: "hard"
    },
    {
      question: "인상적이고 계속 화재가 되는 제품을 개발하여 초기 소비자를 장악하는 마케팅 기법을 무엇이라 하는가?",
      options: ["플래그십 마케팅", "버즈 마케팅", "엠부시 마케팅", "퍼플카우 마케팅"],
      answer: "퍼플카우 마케팅",
      difficulty: "hard"
    },
    {
      question: "유니언잭 국기를 쓰지 않는 국가는?",
      options: ["뉴질랜드", "오스트레일리아", "오스트리아", "피지"],
      answer: "오스트리아",
      difficulty: "hard"
    },
    {
      question: "부익부 빈익빈, 승자독식효과를 무엇이라 하는가?",
      options: ["레드퀸 효과", "트리클 다운 효과", "마태효과", "사일로 효과"],
      answer: "마태효과",
      difficulty: "hard"
    },
    {
      question: "적대적 인수·합병(M&A)의 시도가 있을 때 기존 주주들에게 시가보다 싼 가격에 지분을 매수할 수 있도록 권리를 부여하는 것을 무엇이라 하는가?",
      options: ["포이즌 필", "황금주", "황금낙하산", "백기사"],
      answer: "포이즌 필",
      difficulty: "hard"
    },
    {
      question: "로마제국의 초대황제로 로마의 행정과 시설을 개혁하고 제국의 기틀을 닦은 인물은 누구인가?",
      options: ["카이사르", "안토니우스", "아우구스투스", "키케로"],
      answer: "아우구스투스",
      difficulty: "hard"
    },
    {
      question: "엔캐리 트레이드로 높은 이익을 얻는 개인투자자들을 일컫는 말은 무엇인가?",
      options: ["스미스 부인", "왕씨 부인", "소피아 부인", "와타나베 부인"],
      answer: "와타나베 부인",
      difficulty: "hard"
    },
    {
      question: "이슬람을 상징하는 것으로 다음 중 어느 달(moon)인가?",
      options: ["그믐달", "초승달", "반달", "보름달"],
      answer: "초승달",
      difficulty: "hard"
    }
  ]
};

// 카테고리 키와 표시할 이름 매핑
const categoryNames = {
  it: "IT",
  sports: "스포츠",

  literature: "문학",
  art: "예술",

  economy: "경제",
  proverb: "속담",

  history: "역사",
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
    console.log('카테고리 버튼 클릭됨:', btn.getAttribute('data-cat'));
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
      // 선택된 난이도에 해당하는 문제만 필터링 후 10문제만 랜덤으로 출제
      const filteredQuestions = quizData[currentCategory].filter(q => q.difficulty === currentDifficulty);
      currentQuizData = shuffleArray(filteredQuestions).slice(0, 10);
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

// 배열을 랜덤으로 섞는 함수
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
    const isCorrect = selectedOption === currentData.answer;
    
    if (isCorrect) {
      score++;
      resultEl.innerText = "정답입니다!";
    } else {
      resultEl.innerText = `오답입니다! 정답은: ${currentData.answer}`;
    }
  
    // 현재 문제의 결과를 저장
    const data = {
      category: categoryNames[currentCategory],
      difficulty: getDifficultyText(currentDifficulty),
      score: isCorrect ? 1 : 0,
      total: 1,
      question: currentData.question,
      user_answer: selectedOption,
      correct_answer: currentData.answer
    };
  
    // 서버에 결과 저장
    fetch('/quiz/save_result/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRFToken': getCookie('csrftoken')
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
      console.log('결과 저장 응답:', data);
    })
    .catch(error => {
      console.error('결과 저장 중 오류 발생:', error);
    });
  
    Array.from(optionsEl.children).forEach(li => {
      li.firstChild.disabled = true;
    });
    nextBtn.style.display = "block";
  }

function clearState() {
  resultEl.innerText = "";
  nextBtn.style.display = "none";
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

  // DB에 결과 저장
  const formData = new FormData();
  formData.append('category', currentCategory);
  formData.append('difficulty', currentDifficulty);
  formData.append('score', score);
  formData.append('total', currentQuizData.length);

  fetch('/quiz/save_result/', {
    method: 'POST',
    body: formData,
    headers: {
      'X-CSRFToken': getCookie('csrftoken')
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log('결과가 저장되었습니다:', data);
  })
  .catch(error => {
    console.error('결과 저장 중 오류 발생:', error);
  });
}

// CSRF 토큰을 가져오는 함수
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

menuBtn.addEventListener('click', () => {
  // 현재 상태 초기화
  clearState();
  currentQuiz = 0;
  score = 0;
  
  // 퀴즈 컨테이너 숨기기
  quizContainer.style.display = 'none';
  
  // 카테고리 선택 화면 표시
  categoryContainer.style.display = 'block';
  difficultyContainer.style.display = 'none';
});
