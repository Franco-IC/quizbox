import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AnswersForm from "./AnswersForm";

export default function QuestionCard({
  question,
  questions,
  currentQuestionIndex,
  changeCurrentQuestionAndUpdateScore,
  setGameEnded,
}) {
  return (
    <Card sx={{ minWidth: 275 }} className="question-card">
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          {question.category}
        </Typography>

        <Typography sx={{ mb: 1.5 }} color="text.primary">
          {question.question}
        </Typography>
        <Divider></Divider>

        <AnswersForm
          questions={questions}
          answers={question.answers}
          currentQuestionIndex={currentQuestionIndex}
          changeCurrentQuestionAndUpdateScore={
            changeCurrentQuestionAndUpdateScore
          }
          setGameEnded={setGameEnded}
        />
      </CardContent>
    </Card>
  );
}
