function showScore() {
  resetState();
  questionElement.innerText = `✅ Correct: ${score} / ❌ Incorrect: ${questions.length - score}`;
  nextButton.innerText = "Play Again";
  nextButton.style.display = "block";
}
