import { useContext } from "react";
import { Typography } from "@mui/material";

import { QuestionContext } from "./context/QuestionContext.jsx";
import QuestionCard from "./components/QuestionCard.jsx";
import Footer from "./components/Footer.jsx";
import Alert from "./components/Alert.jsx";
import QuizResultsCard from "./components/QuizResultsCard.jsx";

function App() {
  const {
    questions,
    currentQuestionIndex,
    score,
    gameEnded,
    changeCurrentQuestionAndUpdateScore,
    setGameEnded,
  } = useContext(QuestionContext);

  function handleGameEnded() {
    const questionCard = document.querySelector(".question-card");
    const scoreDiv = document.querySelector(".score-div");
    questionCard.style.display = "none";
    scoreDiv.style.display = "none";

    return <QuizResultsCard score={score} />;
  }
  return (
    <>
      <div className="main-content">
        {gameEnded ? handleGameEnded() : null}
        <div className="score-div">
          <Typography sx={{ fontSize: 24, marginBottom: "20px" }}>
            Score: {score}
          </Typography>
        </div>
        <div>
          {questions ? (
            <div>
              <QuestionCard
                question={questions[currentQuestionIndex]}
                questions={questions}
                currentQuestionIndex={currentQuestionIndex}
                changeCurrentQuestionAndUpdateScore={
                  changeCurrentQuestionAndUpdateScore
                }
                setGameEnded={setGameEnded}
              />
            </div>
          ) : (
            <Typography sx={{ fontSize: 20 }}>Loading questions...</Typography>
          )}
        </div>
      </div>
      <Footer />
      <Alert />
    </>
  );
}

export default App;
