import { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, FormControl } from "@mui/material";

import { handleAnswerSubmit } from "../utils/handleAnswerSubmit";

export default function AnswersForm({
  questions,
  answers,
  currentQuestionIndex,
  changeCurrentQuestionAndUpdateScore,
  setGameEnded,
}) {
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const correctAnswer = questions[currentQuestionIndex].correct_answer;

  useEffect(() => setSelectedAnswer(""), [correctAnswer]);

  function handleChange(e) {
    setSelectedAnswer(e.target.value);
  }

  return (
    <>
      <form className="answers-form" onChange={handleChange}>
        <FormControl>
          <RadioGroup>
            {answers.map((answer, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={answer}
                  control={<Radio />}
                  label={answer}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </form>
      <div>
        <Button
          size="small"
          type="submit"
          onClick={() => {
            handleAnswerSubmit(
              selectedAnswer,
              correctAnswer,
              currentQuestionIndex,
              setGameEnded,
              changeCurrentQuestionAndUpdateScore
            );
          }}
        >
          Submit answer
        </Button>
      </div>
    </>
  );
}
