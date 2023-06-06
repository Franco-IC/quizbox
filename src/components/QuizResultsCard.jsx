import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function QuizResultsCard({ score }) {
  return (
    <Card
      sx={{
        minWidth: 275,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardContent>
        <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
          Final Score: {score}
        </Typography>
      </CardContent>
    </Card>
  );
}
