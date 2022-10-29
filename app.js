let operators = ["+", "-", "*", "/"];
const startBtn = document.getElementById("start-btn");
const question = document.getElementById("question");
const controls = document.querySelector("controls-container");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submit-btn");
const errorMsg = document.getElementById("error-msg");
let answerValue;
let operatorQuestion;

//Random value generator
const randomVale = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const questionGenerator = () => {
  //Two random values between 1 and 20
  let [num1, num2] = [randomVale(1, 20), randomVale(1, 20)];
  //   console.log(num1, num2);

  //For Getting random operator
  let randomOperator = operators[Math.floor(Math.random() * operators.length)];
  console.log(randomOperator);
};
questionGenerator();
