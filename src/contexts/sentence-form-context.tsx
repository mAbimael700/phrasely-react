import { createContext, useContext, useState } from "react";

// Define la estructura del contexto
interface SentenceSelectionContextType {
    selectedSentenceIndex: number | null; // Índice seleccionado o null si no hay selección
    setSelectedSentenceIndex: (index: number | null) => void; // Método para actualizar
}

// Crea el contexto
const SentenceSelectionContext = createContext<SentenceSelectionContextType | undefined>(undefined);

// Proveedor del contexto
export const SentenceSelectionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [selectedSentenceIndex, setSelectedSentenceIndex] = useState<number | null>(null);

    return (
        <SentenceSelectionContext.Provider value={{ selectedSentenceIndex, setSelectedSentenceIndex }}>
            {children}
        </SentenceSelectionContext.Provider>
    );
};

// Hook para usar el contexto
export const useSentenceSelection = () => {
    const context = useContext(SentenceSelectionContext);
    if (!context) {
        throw new Error("useSentenceSelection must be used within a SentenceSelectionProvider");
    }
    return context;
};
