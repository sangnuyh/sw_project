// 퀴즈 데이터 (예시)
const quizData = {
  history: [
    {
      question: "조선의 창업자는 누구인가?",
      options: ["이성계", "세종대왕", "태조", "광해군"],
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
  personality: [
    {
      question: "세계적인 음악 프로듀서 퀸시 존스의 국적은?",
      options: ["미국", "영국", "캐나다", "호주"],
      answer: "미국"
    },
    {
      question: "대한민국 최초의 여성 대통령은?",
      options: ["박근혜", "문재인", "이낙연", "없음"],
      answer: "없음"
    }
  ]
};

// 카테고리 키와 표시할 이름 매핑
const categoryNames = {
  history: "역사",
  it: "IT",
  sports: "스포츠",
  personality: "인물"
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

// 카테고리 버튼 클릭 이벤트
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentCategory = btn.getAttribute('data-cat');
    // 카테고리 선택 후 난이도 선택 화면으로 전환
    categoryContainer.style.display = 'none';
    difficultyContainer.style.display = 'block';
    difficultyTitle.innerText = `${categoryNames[currentCategory]} 카테고리`;
  });
});

// 난이도 버튼 클릭 이벤트
document.querySelectorAll('.difficulty-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    currentDifficulty = btn.getAttribute('data-difficulty');
    // 난이도 선택 후 퀴즈 진행 화면으로 전환
    difficultyContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    quizTitle.innerText = `${categoryNames[currentCategory]} (${getDifficultyText(currentDifficulty)}) 퀴즈`;
    // 난이도에 따라 문제 필터링 가능 (현재는 전체 문제 사용)
    currentQuizData = shuffleArray([...quizData[currentCategory]]);
    currentQuiz = 0;
    score = 0;
    loadQuiz();
  });
});

// 난이도 텍스트 반환 함수
function getDifficultyText(diff) {
  if (diff === 'easy') return "쉬움";
  if (diff === 'medium') return "보통";
  if (diff === 'hard') return "어려움";
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
      btn.className = 'option-btn';
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
  resultEl.innerText = `훌륭해요! ${categoryNames[currentCategory]} (${getDifficultyText(currentDifficulty)}) 퀴즈에서 총 ${currentQuizData.length}문제 중 ${score}문제를 맞추셨어요. 계속 도전해보세요!`;
  nextBtn.style.display = "none";
  menuBtn.style.display = "block";
}

menuBtn.addEventListener('click', () => {
  quizContainer.style.display = 'none';
  categoryContainer.style.display = 'block';
});
