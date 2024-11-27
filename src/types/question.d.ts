export interface Question {
    id: number;
    question: string;
    answers: string[];
    correctAnswers: number[];
    difficulty: "easy" | "medium" | "hard";
  }
  
  
  
  export interface AddQuestionProps {
    editingQuestion?: Question; // Pregunta que se está editando (opcional)
    onSaveComplete: () => void; // Callback cuando se complete el guardado
  }
  