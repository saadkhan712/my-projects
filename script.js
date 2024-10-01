const quizData = [
  {
    question: "Which of the following is used to declare a variable in JavaScript?",
    answers: ["var", "let", "const", "All of the above"],
    correct: 3
  },
  {
    question: "Which symbol is used for comparison in JavaScript?",
    answers: ["=", "==", "===", "<>"],
    correct: 2
  },
  {
    question: "What will be the output of console.log(typeof []);?",
    answers: ["array", "object", "undefined", "null"],
    correct: 1
  },
  {
    question: "Which method is used to convert a string to a number in JavaScript?",
    answers: ["Number()", "toString()", "parseString()", "convert()"],
    correct: 0
  },
  {
    question: "What will be the output of '2' + 2 in JavaScript?",
    answers: ["4", "'22'", "NaN", "undefined"],
    correct: 1
  },
];

const answerEls = document.querySelectorAll(".answer");
const [questionElement, option_1, option_2, option_3, option_4] =
  document.querySelectorAll("#question, #option_1, #option_2, #option_3, #option_4");
const submitBtn = document.getElementById("submit");
let currentQuiz = 0;
let score = 0;

const loadQuiz = () => {
  document.querySelectorAll('input[name="answer"]').forEach((el) => (el.checked = false));
  
  const { question, answers } = quizData[currentQuiz];
  questionElement.innerText = question;

  answers.forEach((answer, index) => {
    const label = document.getElementById(`option_${index + 1}`);
    if (label) {
      label.innerText = answer;
    }
  });
};

submitBtn.addEventListener("click", function () {
  const selectedOption = document.querySelector('input[name="answer"]:checked');

  if (selectedOption) {
    const selectedIndex = parseInt(selectedOption.value); 

    if (selectedIndex === quizData[currentQuiz].correct) {
      score++;
    }

    currentQuiz++; 

    if (currentQuiz < quizData.length) {
      loadQuiz(); 
    } else {
      document.getElementById("quiz").innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly.</h2>
        <button onclick="location.reload()">Restart Quiz</button>
      `;
    }
  } else {
    alert("Please select an option before proceeding!");
  }
});

loadQuiz();
