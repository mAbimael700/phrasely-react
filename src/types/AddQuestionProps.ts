import { Question } from "@/types/question";

export interface AddQuestionProps {
  editingQuestion?: Question; // Pregunta que se está editando (opcional)
  onSaveComplete: () => void; // Callback cuando se complete el guardado
}
