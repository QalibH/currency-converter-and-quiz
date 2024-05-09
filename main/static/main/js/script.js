"use strict";

const quizData = [
 {
  question: "When was the movie ‘The Godfather’ released?",
  a: "1962",
  b: "1972",
  c: "1982",
  d: "1992",
  correct: "b"
 },

 {
  question: "What ingredient is not used to make a Ratatouille?",
  a: "Courgette",
  b: "Aubergine",
  c: "Spinach",
  d: "Tomato",
  correct: "c"
 },

 {
  question: "When did the construction of the Golden Gate Bridge in San Francisco start?",
  a: "1933",
  b: "1943",
  c: "1953",
  d: "1963",
  correct: "a"
 },

 {
  question: "On which time zone is London?",
  a: "Greenwich Mean Time",
  b: "Central European Standard Time",
  c: "Australian Eastern Daylight Time",
  d: "Eastern Standard Time",
  correct: "a"
 },

 {
  question: "When was the book ‘Of Mice and Men’ by John Steinbeck first published?",
  a: "1927",
  b: "1937",
  c: "1947",
  d: "1957",
  correct: "b"
 },

  {
  question: "Which of the following is a literature prize?",
  a: "Academy Awards",
  b: "Golden Globe Awards",
  c: "Grammy Awards",
  d: "Pulitzer Prize",
  correct: "d"
 },

  {
  question: "How many bones are there in an adult human body?",
  a: "186",
  b: "196",
  c: "206",
  d: "216",
  correct: "c"
 },

  {
  question: "When did Friends air for the first time?",
  a: "1992",
  b: "1994",
  c: "1996",
  d: "1998",
  correct: "b"
 },

  {
  question: "Who was the president of the United States during the Cuban missile crisis?",
  a: "Dwight D. Eisenhower",
  b: "Lyndon B. Johnson",
  c: "Richard Nixon",
  d: "John F. Kennedy",
  correct: "d"
 },

  {
  question: "How long is a marathon?",
  a: "22.195 km",
  b: "32.195 km",
  c: "42.195 km",
  d: "52.195 km",
  correct: "c"
 }

];

const quiz = document.querySelector(".quiz-body");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const footerEl = document.querySelector(".quiz-footer");
const quizDetailEl = document.querySelector(".quiz-details");
const liEl = document.querySelector("ul li");

const a_txt = document.getElementById("a_text");
const b_txt = document.getElementById("b_text");
const c_txt = document.getElementById("c_text");
const d_txt = document.getElementById("d_text");
const btnSubmit = document.getElementById("btn");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
 deselectAnswers();
 const currentQuizData = quizData[currentQuiz];
 questionEl.innerText = currentQuizData.question;
 a_txt.innerText = currentQuizData.a;
 b_txt.innerText = currentQuizData.b;
 c_txt.innerText = currentQuizData.c;
 d_txt.innerText = currentQuizData.d;
 quizDetailEl.innerHTML = `<p>${currentQuiz + 1} of ${quizData.length}</p>`;
}

// deselect
function deselectAnswers() {
 answerEl.forEach((answerEl) => {
  answerEl.checked = false;
 });
}

// get selected
function getSelected() {
 let answer;
 answerEl.forEach((answerEls) => {
  if (answerEls.checked) {
   answer = answerEls.id;
  }
 });
 return answer;
}

btnSubmit.addEventListener("click", function () {
 const answers = getSelected();

 if (answers) {
  if (answers === quizData[currentQuiz].correct) {
   score++;
  }
  nextQuestion();
 }
});

// next Slide
function nextQuestion() {
 currentQuiz++;

 if (currentQuiz < quizData.length) {
  loadQuiz();
 } else {
  quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} question correctly</h2>
    <button type="button" onclick="location.reload()">Reload</button>
    `;
  footerEl.style.display = "none";
 }
}