const quizForm = document.querySelector('#quiz-form');
const resultDiv = document.querySelector('#result');
const correctAnswers = ['a', 'c', 'b', 'd', 'c', 'a', 'b', 'd', 'a', 'd'];

quizForm.addEventListener('submit', e => {
  e.preventDefault();
  
  let score = 0;

  const userAnswers = [quizForm.q1.value,quizForm.q2.value,quizForm.q3.value,quizForm.q4.value,quizForm.q5.value,quizForm.q6.value,quizForm.q7.value,quizForm.q8.value,quizForm.q9.value,quizForm.q10.value];

  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 1;
    }
  });

  resultDiv.innerHTML = `Your score is ${score}/${correctAnswers.length}`;
});