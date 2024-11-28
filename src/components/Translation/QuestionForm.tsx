import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store"; // Importar el tipo AppDispatch
import { saveQuestionsAction } from "@/redux/actions"; // Importar la acción
import { Question } from "@/types/question";

const QuestionForm = () => {
  const [question, setQuestion] = useState<string>("");
  const [answers, setAnswers] = useState<string[]>([""]);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");

  const dispatch = useDispatch<AppDispatch>(); // Tipar dispatch correctamente

  const handleSave = async () => {
    if (!question || answers.some((a) => !a.trim())) return;

    const newQuestion: Question = {
      id: Date.now(),
      question,
      answers,
      difficulty, // Esto ahora tendrá el tipo correcto
    };

    await dispatch(saveQuestionsAction([newQuestion])); // Ahora no habrá error
    setQuestion("");
    setAnswers([""]);
    setDifficulty("easy");
  };

  return (
    <div>
      <h2>Agregar Pregunta</h2>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Escribe la pregunta"
      />
      {answers.map((answer, index) => (
        <input
          key={index}
          type="text"
          value={answer}
          onChange={(e) => {
            const newAnswers = [...answers];
            newAnswers[index] = e.target.value;
            setAnswers(newAnswers);
          }}
          placeholder={`Respuesta ${index + 1}`}
        />
      ))}
      <button onClick={() => setAnswers([...answers, ""])}>Añadir Respuesta</button>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value as "easy" | "medium" | "hard")}
      >
        <option value="easy">Fácil</option>
        <option value="medium">Intermedio</option>
        <option value="hard">Difícil</option>
      </select>
      <button onClick={handleSave}>Guardar Pregunta</button>
    </div>
  );
};

export default QuestionForm;
