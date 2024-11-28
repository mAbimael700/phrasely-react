import { Question } from "@/types/question";

const LOCAL_STORAGE_KEY = "questions";

// Carga las preguntas desde localStorage
export const loadQuestions = async (): Promise<Question[]> => {
  console.log("Intentando cargar preguntas desde localStorage...");
  const data = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (data) {
    console.log("Preguntas encontradas en localStorage:", JSON.parse(data));
    return JSON.parse(data) as Question[];
  } else {
    console.log("No se encontraron preguntas en localStorage.");
  }
  return [];
};

// Guarda las preguntas en localStorage
export const saveQuestions = async (questions: Question[]): Promise<void> => {
  console.log("Guardando preguntas en localStorage:", questions);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(questions));
};
