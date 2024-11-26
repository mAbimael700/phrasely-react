import { UseFormSetValue } from "react-hook-form";

// Función para manejar comandos de gramática en cualquier campo de texto
export const handleGrammarCommands = (
    event: React.KeyboardEvent<HTMLInputElement>,
    fieldName: string, // Nombre del campo (e.g., "sentences.0.sentence_to_show")
    setValue: UseFormSetValue<any> // Función setValue de react-hook-form
) => {
    if (event.ctrlKey) {
        const inputElement = event.target as HTMLInputElement;
        const currentValue = inputElement.value;
        const cursorStart = inputElement.selectionStart || 0;
        const cursorEnd = inputElement.selectionEnd || 0;

        let newValue = currentValue;

        switch (event.key.toLowerCase()) {
            case "e": // Add "-ed"
                event.preventDefault();
                newValue = insertAtCursor(currentValue, cursorStart, cursorEnd, "ed");
                break;

            case "i": // Add "-ing"
                event.preventDefault();
                newValue = insertAtCursor(currentValue, cursorStart, cursorEnd, "ing");
                break;

            case "s": // Convert to plural
                event.preventDefault();
                newValue = insertAtCursor(currentValue, cursorStart, cursorEnd, "s");
                break;

            case "r": // Capitalize first letter
                event.preventDefault();
                newValue = capitalizeWord(currentValue, cursorStart, cursorEnd);
                break;

            case "u": // Convert to uppercase
                event.preventDefault();
                newValue = currentValue.toUpperCase();
                break;

            case "l": // Convert to lowercase
                event.preventDefault();
                newValue = currentValue.toLowerCase();
                break;

            case "t": // Enclose in quotes
                event.preventDefault();
                newValue = encloseInQuotes(currentValue, cursorStart, cursorEnd);
                break;

            default:
                return; // No matching command
        }

        // Actualizar el valor del campo genérico
        setValue(fieldName, newValue);

        // Restaurar la posición del cursor
        setTimeout(() => {
            inputElement.setSelectionRange(cursorStart, cursorEnd);
        }, 0);
    }
};

// Función auxiliar para insertar texto en el cursor o sobre una selección
const insertAtCursor = (
    text: string,
    start: number,
    end: number,
    insertion: string
): string => {
    return text.slice(0, start) + insertion + text.slice(end);
};

// Función auxiliar para capitalizar la primera letra
const capitalizeWord = (
    text: string,
    start: number,
    end: number
): string => {
    const word = text.slice(start, end || text.length);
    const capitalized = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    return text.slice(0, start) + capitalized + text.slice(end || text.length);
};

// Función auxiliar para envolver texto en comillas
const encloseInQuotes = (
    text: string,
    start: number,
    end: number
): string => {
    const selection = text.slice(start, end || text.length);
    return text.slice(0, start) + `"${selection}"` + text.slice(end || text.length);
};
