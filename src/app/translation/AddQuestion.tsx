import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { addQuestion, saveQuestionsAction } from "@/redux/slice";
import { Question } from "@/types/question";

const AddQuestion = () => {
  const dispatch = useDispatch<AppDispatch>();
  const questions = useSelector((state: RootState) => state.questions.questions);

  const [questionText, setQuestionText] = useState("");
  const [answers, setAnswers] = useState<string[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard">("easy");

  const addAnswer = () => setAnswers([...answers, ""]);
  const removeAnswer = (index: number) =>
    setAnswers(answers.filter((_, i) => i !== index));
  const toggleCorrectAnswer = (index: number) => {
    if (correctAnswers.includes(index)) {
      setCorrectAnswers(correctAnswers.filter((i) => i !== index));
    } else {
      setCorrectAnswers([...correctAnswers, index]);
    }
  };

  const handleSubmit = () => {
    if (!["easy", "medium", "hard"].includes(difficulty)) {
      alert("Por favor, selecciona una dificultad válida: easy, medium o hard.");
      return;
    }
  
    const newQuestion: Question = {
      id: Date.now(),
      question: questionText,
      answers,
      correctAnswers,
      difficulty: difficulty as "easy" | "medium" | "hard", // Cast explícito
    };
  
    dispatch(addQuestion(newQuestion));
    dispatch(saveQuestionsAction([...questions, newQuestion])); // Guarda en localStorage
  
    // Reinicia los campos del formulario
    setQuestionText("");
    setAnswers([]);
    setCorrectAnswers([]);
  };
  

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Agregar Pregunta</h1>
      <input
        className="border p-2 w-full mb-4"
        type="text"
        placeholder="Escribe la pregunta"
        value={questionText}
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <div className="space-y-2">
        {answers.map((answer, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              className="border p-2 flex-grow"
              type="text"
              placeholder={`Respuesta ${index + 1}`}
              value={answer}
              onChange={(e) =>
                setAnswers(
                  answers.map((a, i) => (i === index ? e.target.value : a))
                )
              }
            />
            <button
              className={`p-2 rounded ${
                correctAnswers.includes(index) ? "bg-green-500" : "bg-gray-300"
              }`}
              onClick={() => toggleCorrectAnswer(index)}
            >
              Correcta
            </button>
            <button
              className="p-2 bg-red-500 text-white rounded"
              onClick={() => removeAnswer(index)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <button
        className="p-2 bg-blue-500 text-white rounded mt-4"
        onClick={addAnswer}
      >
        Añadir Respuesta
      </button>
      <button
        className="p-2 bg-green-500 text-white rounded mt-4"
        onClick={handleSubmit}
      >
        Guardar Pregunta
      </button>
    </div>
  );
};

export default AddQuestion;
