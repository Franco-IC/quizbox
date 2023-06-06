import { shuffleArray } from "./shuffleArray";

export function setQuestionAnswers(data) {
  for (const question in data) {
    let answers = [];
    let currentQuestion = data[question];
    currentQuestion.answers = [];

    if (currentQuestion.type === "multiple") {
      let array = [
        currentQuestion.correct_answer,
        ...currentQuestion.incorrect_answers,
      ];
      answers = shuffleArray(array);
    } else answers = ["True", "False"];

    currentQuestion.answers = answers;
  }
}
