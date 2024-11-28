import { UseFormSetValue } from "react-hook-form";
import { ISenteceFormSchema } from "../types/ISentenceFormSchema";

export function useSentenceHandlers(setValue: UseFormSetValue<ISenteceFormSchema>) {
    const handleAutoCompleteParentheses = (
        event: React.ChangeEvent<HTMLInputElement>,
        sentenceIndex: number
    ) => {
        const currentValue = event.target.value;
        const cursorPosition = event.target.selectionStart || currentValue.length;

        if (currentValue[cursorPosition - 1] === "(") {
            const updatedValue =
                currentValue.slice(0, cursorPosition) + ")" + currentValue.slice(cursorPosition);

            setValue(`sentences.${sentenceIndex}.sentence_to_show`, updatedValue);

            setTimeout(() => {
                const input = event.target;
                input.setSelectionRange(cursorPosition, cursorPosition);
            }, 0);
        } else {
            setValue(`sentences.${sentenceIndex}.sentence_to_show`, currentValue);
        }
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        sentenceIndex: number
    ) => {
        if (event.ctrlKey && event.key.toLowerCase() === "b") {
            event.preventDefault();
            const inputElement = event.target as HTMLInputElement;
            const currentValue = inputElement.value;
            const cursorPosition = inputElement.selectionStart || 0;

            const updatedValue =
                currentValue.slice(0, cursorPosition) + "___" + currentValue.slice(cursorPosition);

            setValue(`sentences.${sentenceIndex}.sentence_to_show`, updatedValue);

            setTimeout(() => {
                inputElement.setSelectionRange(cursorPosition + 3, cursorPosition + 3);
            }, 0);
        }
    };

    return { handleAutoCompleteParentheses, handleKeyDown };
}
