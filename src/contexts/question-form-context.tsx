import { createContext, useContext, useState } from "react";

// Define la estructura del contexto
interface QuestionSelectionContextType {
    selectedQuestionIndex: number | null; // Índice seleccionado o null si no hay selección
    setSelectedQuestionIndex: (index: number | null) => void; // Método para actualizar
}

// Crea el contexto
const QuestionSelectionContext = createContext<QuestionSelectionContextType | undefined>(undefined);

// Proveedor del contexto
export const QuestionSelectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedQuestionIndex, setSelectedQuestionIndex] = useState<number | null>(null);

    return (
        <QuestionSelectionContext.Provider value={{ selectedQuestionIndex, setSelectedQuestionIndex }}>
            {children}
        </QuestionSelectionContext.Provider>
    );
};

// Hook para usar el contexto
export const useQuestionSelection = () => {
    const context = useContext(QuestionSelectionContext);
    if (!context) {
        throw new Error("useQuestionSelection must be used within a QuestionSelectionProvider");
    }
    return context;
};
