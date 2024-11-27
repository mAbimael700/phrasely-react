import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import AddQuestion from "./AddQuestion";
import QuestionCard from "@/components/Translation/QuestionCard";

const QuestionList = () => {
  const questions = useSelector((state: RootState) => state.questions.questions);

  return (
    <div>
      <h1>Lista de Preguntas</h1>
      {questions.map((q) => (
        <QuestionCard key={q.id} question={q} />
      ))}
      <AddQuestion
        onSaveComplete={() => {
          console.log("Pregunta guardada");
        }}
      />
    </div>
  );
};

export default QuestionList;
