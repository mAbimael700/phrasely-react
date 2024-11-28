import { UseFormSetValue } from "react-hook-form";
import { IQuestionFormSchema } from "@/components/questions/types/IQuestionFormSchema";

export function useQuestionHandlers(setValue: UseFormSetValue<IQuestionFormSchema>) {
    const handleAutoCompleteParentheses = (
        event: React.ChangeEvent<HTMLInputElement>,
        questionIndex: number
    ) => {
        const currentValue = event.target.value;
        const cursorPosition = event.target.selectionStart || currentValue.length;

        if (currentValue[cursorPosition - 1] === "(") {
            const updatedValue =
                currentValue.slice(0, cursorPosition) + ")" + currentValue.slice(cursorPosition);

            setValue(`questions.${questionIndex}.question`, updatedValue);

            setTimeout(() => {
                const input = event.target;
                input.setSelectionRange(cursorPosition, cursorPosition);
            }, 0);
        } else {
            setValue(`questions.${questionIndex}.question`, currentValue);
        }
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        questionIndex: number
    ) => {
        if (event.ctrlKey && event.key.toLowerCase() === "b") {
            event.preventDefault();
            const inputElement = event.target as HTMLInputElement;
            const currentValue = inputElement.value;
            const cursorPosition = inputElement.selectionStart || 0;

            const updatedValue =
                currentValue.slice(0, cursorPosition) + "___" + currentValue.slice(cursorPosition);

            setValue(`questions.${questionIndex}.question`, updatedValue);

            setTimeout(() => {
                inputElement.setSelectionRange(cursorPosition + 3, cursorPosition + 3);
            }, 0);
        }
    };

    return { handleAutoCompleteParentheses, handleKeyDown };
}
