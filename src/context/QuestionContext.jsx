import { createContext, useEffect, useState } from "react";

import { getQuestions } from "../services/index.js";

export const QuestionContext = createContext();

export function QuestionContextProvider(props) {
  const [questions, setQuestions] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameEnded, setGameEnded] = useState(false);

  async function loadQuestions() {
    const data = await getQuestions();

    data ? setQuestions(data) : setQuestions(null);
  }

  function changeCurrentQuestionIndex() {
    if (currentQuestionIndex !== 9)
      setCurrentQuestionIndex(currentQuestionIndex + 1);
  }

  function changeCurrentQuestionAndUpdateScore(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
      changeCurrentQuestionIndex();
      setScore(score + 1);
    } else {
      changeCurrentQuestionIndex();
    }
  }

  useEffect(() => {
    loadQuestions();
  }, []);

  return (
    <QuestionContext.Provider
      value={{
        questions,
        currentQuestionIndex,
        score,
        changeCurrentQuestionAndUpdateScore,
        gameEnded,
        setGameEnded,
      }}
    >
      {props.children}
    </QuestionContext.Provider>
  );
}
