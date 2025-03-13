// 카테고리별 퀴즈 데이터 (문제들은 이후에 추가 가능)
const quizData = {
    history: [
      {
        question: "조선의 창업자는 누구인가?",
        options: ["윤석열", "세종대왕", "태조", "광해군"],
        answer: "태조"
      },
      {
        question: "대한민국 임시정부가 수립된 해는?",
        options: ["1919", "1945", "1931", "1950"],
        answer: "1919"
      }
    ],
    it: [
      {
        question: "HTML의 약자는 무엇일까요?",
        options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Markup Language", "Hyper Transfer Markup Language"],
        answer: "HyperText Markup Language"
      },
      {
        question: "최초의 프로그래밍 언어로 알려진 것은?",
        options: ["C", "FORTRAN", "Assembly", "Python"],
        answer: "FORTRAN"
      }
    ],
    sports: [
      {
        question: "올림픽은 몇 년마다 열리나요?",
        options: ["2년", "3년", "4년", "5년"],
        answer: "4년"
      },
      {
        question: "FIFA 월드컵에서 가장 많은 우승을 차지한 나라는?",
        options: ["독일", "브라질", "이탈리아", "아르헨티나"],
        answer: "브라질"
      }
    ],
    commonSense: [
      {
        question: "세계적인 음악 프로듀서 퀸시 존스의 국적은?",
        options: ["미국", "영국", "캐나다", "호주"],
        answer: "미국"
      },
      {
        question: "이탈리아의 물리학자 및 천문학자. '그래도 지구는 돈다' 라는 명언을 남긴 이 인물은?",
        options: ["뉴턴", "피타고라스", "코페루니쿠스", "갈릴레오 갈릴레이"],
        answer: "갈릴레오 갈릴레이"
      }
    ]
  };
  
  // 카테고리 키와 표시할 이름을 매핑하는 객체
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
  
  const categoryContainer = document.getElementById('categoryContainer');
  const quizContainer = document.getElementById('quizContainer');
  const quizTitle = document.getElementById('quizTitle');
  const questionEl = document.getElementById('question');
  const optionsEl = document.getElementById('options');
  const resultEl = document.getElementById('result');
  const nextBtn = document.getElementById('nextBtn');
  const menuBtn = document.getElementById('menuBtn');
  
  // 배열을 랜덤으로 섞는 함수 (Fisher-Yates 알고리즘)
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  
  // 카테고리 버튼 클릭 이벤트
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentCategory = btn.getAttribute('data-cat');
      startQuiz(currentCategory);
    });
  }
  
  );
  
  function startQuiz(category) {
    categoryContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    // 매핑된 한국어 카테고리명 사용
    quizTitle.innerText = `${categoryNames[category]} 퀴즈`;
    // 카테고리 문제 배열 복사 후 무작위 정렬
    currentQuizData = shuffleArray([...quizData[category]]);
    currentQuiz = 0;
    score = 0;
    loadQuiz();
  }
  
  function loadQuiz() {
    clearState();
    if (currentQuiz < currentQuizData.length) {
      const currentData = currentQuizData[currentQuiz];
      questionEl.innerText = currentData.question;
      // 옵션도 랜덤 순서로 섞어서 생성
      const shuffledOptions = shuffleArray([...currentData.options]);
      shuffledOptions.forEach(option => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;
        // 클릭 이벤트 시 선택된 버튼을 인자로 넘김
        btn.addEventListener('click', (e) => selectAnswer(option, e.currentTarget));
        li.appendChild(btn);
        optionsEl.appendChild(li);
      });
    }
  }
  
  function selectAnswer(selectedOption, clickedBtn) {
    // 클릭된 버튼에 선택 스타일 적용
    clickedBtn.classList.add('selected');
  
    const currentData = currentQuizData[currentQuiz];
    if (selectedOption === currentData.answer) {
      score++;
      resultEl.innerText = "정답입니다!";
    } else {
      resultEl.innerText = `오답입니다! 정답은: ${currentData.answer}`;
    }
    // 모든 옵션 버튼 비활성화 (색상 유지)
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
    // 결과 화면에 센스있는 메시지 출력
    questionEl.innerText = "";
    resultEl.innerText = `총 ${currentQuizData.length}문제 중 ${score}문제를 맞추셨어요. 계속 도전해보세요!`;
    nextBtn.style.display = "none";
    menuBtn.style.display = "block";
  }
  
  
  menuBtn.addEventListener('click', () => {
    quizContainer.style.display = 'none';
    categoryContainer.style.display = 'block';
  });
  