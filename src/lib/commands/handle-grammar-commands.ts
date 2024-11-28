import { UseFormSetValue } from "react-hook-form";

// Función para manejar comandos de gramática en cualquier campo de texto
export const handleGrammarCommands = (
    event: React.KeyboardEvent<HTMLInputElement>,
    fieldName: string,
    setValue: UseFormSetValue<any>
) => {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = inputElement.value;
    const cursorStart = inputElement.selectionStart || 0;
    const cursorEnd = inputElement.selectionEnd || 0;

    let newValue = currentValue;

    // Crear una clave única para la combinación de teclas
    const keyCombination = `${event.ctrlKey ? "Ctrl+" : ""}${event.altKey ? "Alt+" : ""}${event.key.toLowerCase()}`;

    // Definir las combinaciones de teclas permitidas
    const keyActions: Record<string, () => string> = {
        "Ctrl+e": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "ed"),
        "Ctrl+i": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "ing"),
        "Ctrl+s": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "s"),
        "Ctrl+r": () => capitalizeWord(currentValue, cursorStart, cursorEnd),
        "Ctrl+u": () => currentValue.toUpperCase(),
        "Ctrl+l": () => currentValue.toLowerCase(),
        "Alt+t": () => encloseInQuotes(currentValue, cursorStart, cursorEnd),
        "Alt+p": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "pos."),
        "Alt+n": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "neg."),
        "Alt+q": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "que."),
        "Alt+i": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "ing."),
        "Ctrl+Alt+p": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "pres."),
        "Ctrl+Alt+n": () => insertAtCursor(currentValue, cursorStart, cursorEnd, "past."),
    };

    // Verificar si la combinación está definida
    if (keyActions[keyCombination]) {
        event.preventDefault(); // Evitar el comportamiento predeterminado del navegador
        newValue = keyActions[keyCombination](); // Ejecutar la acción correspondiente

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
