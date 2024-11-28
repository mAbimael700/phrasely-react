import { useDispatch } from "react-redux";
import { deleteQuestion } from "@/redux/slice";
import { Question } from "@/types/question";

interface QuestionCardProps {
  question: Question;
}

const QuestionCard = ({ question }: QuestionCardProps) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{question.question}</h3>
      <ul>
        {question.answers.map((answer, idx) => (
          <li key={idx}>{answer}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(deleteQuestion(question.id))}>Eliminar</button>
    </div>
  );
};

export default QuestionCard;
