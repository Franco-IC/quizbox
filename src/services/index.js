import axios from "axios";
import { setQuestionAnswers } from "../utils/setQuestionAnswers";

export async function getQuestions() {
  try {
    const response = await axios({
      method: "GET",
      url: "https://opentdb.com/api.php?amount=10",
    });

    if (response.status !== 200) return;

    const data = response.data.results;
    setQuestionAnswers(data);

    return data;
  } catch (error) {
    console.error(error.message);
  }
}
