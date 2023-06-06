import triggerAlert from "./triggerWarningAlert";

export function handleAnswerSubmit(
  userAnswer,
  correctAnswer,
  currentQuestionIndex,
  setGameEnded,
  changeCurrentQuestionAndUpdateScore
) {
  // When user doesn't select an option and clicks submit button
  if (userAnswer === "") return triggerAlert();

  changeCurrentQuestionAndUpdateScore(userAnswer, correctAnswer);

  if (currentQuestionIndex === 9) setGameEnded(true);
}
