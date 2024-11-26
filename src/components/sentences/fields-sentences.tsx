import { UseFormReturn } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Cross1Icon, TrashIcon } from "@radix-ui/react-icons";
import { handleGrammarCommands } from "@/lib/commands/handle-grammar-commands";

interface FieldsSentencesProps {
    form: UseFormReturn<{
        title: string;
        sentences: {
            original_sentence: string;
            sentence_to_show: string;
            answers: string[];
        }[];
    }>;
}

export function FieldsSentences({ form }: FieldsSentencesProps) {
    const { register, watch, setValue, getValues, formState } = form;


    // Observe the current state of sentences
    const sentences = watch("sentences");

    // Custom handler to add an answer to a specific sentence
    const addAnswer = (sentenceIndex: number) => {
        const currentAnswers = getValues(`sentences.${sentenceIndex}.answers`) || [];
        setValue(`sentences.${sentenceIndex}.answers`, [...currentAnswers, ""]);
    };

    // Custom handler to remove an answer from a specific sentence
    const removeAnswer = (sentenceIndex: number, answerIndex: number) => {
        const currentAnswers = getValues(`sentences.${sentenceIndex}.answers`) || [];
        const updatedAnswers = currentAnswers.filter((_, i) => i !== answerIndex);
        setValue(`sentences.${sentenceIndex}.answers`, updatedAnswers);
    };

    // Custom handler to add a new sentence
    const addSentence = () => {
        const currentSentences = getValues("sentences") || [];
        setValue("sentences", [
            ...currentSentences,
            {
                original_sentence: "",
                sentence_to_show: "",
                answers: [""], // Initialize with one empty answer
            },
        ]);
    };

    // Custom handler to remove a sentence
    const removeSentence = (sentenceIndex: number) => {
        const currentSentences = getValues("sentences") || [];
        const updatedSentences = currentSentences.filter((_, i) => i !== sentenceIndex);
        setValue("sentences", updatedSentences);
    };


    // Handler para agregar un espacio en blanco ("___")
    const addWhiteSpace = (
        inputElement: HTMLInputElement,
        sentenceIndex: number
    ) => {
        const currentValue = inputElement.value;
        const cursorPosition = inputElement.selectionStart || 0;

        // Inserta "___" en la posición del cursor
        const updatedValue =
            currentValue.slice(0, cursorPosition) +
            " ___" +
            currentValue.slice(cursorPosition);

        // Actualiza el valor en el formulario
        setValue(`sentences.${sentenceIndex}.sentence_to_show`, updatedValue);

        // Opcional: Mueve el cursor al final del texto insertado
        setTimeout(() => {
            inputElement.setSelectionRange(
                cursorPosition + 3, // Mueve el cursor después de "___"
                cursorPosition + 3
            );
        }, 0);
    };


    // Handler para autocompletar paréntesis
    const handleAutoCompleteParentheses = (
        event: React.ChangeEvent<HTMLInputElement>,
        sentenceIndex: number
    ) => {
        const currentValue = event.target.value;
        const cursorPosition = event.target.selectionStart || currentValue.length;

        // Autocompletar si se escribe un paréntesis de apertura
        if (currentValue[cursorPosition - 1] === "(") {
            const updatedValue =
                currentValue.slice(0, cursorPosition) + ")" + currentValue.slice(cursorPosition);

            setValue(`sentences.${sentenceIndex}.sentence_to_show`, updatedValue);

            // Opcional: Mueve el cursor dentro de los paréntesis
            setTimeout(() => {
                const input = event.target;
                input.setSelectionRange(cursorPosition, cursorPosition);
            }, 0);
        } else {
            // Si no hay paréntesis, actualiza normalmente
            setValue(`sentences.${sentenceIndex}.sentence_to_show`, currentValue);
        }
    };

    const handleKeyDown = (
        event: React.KeyboardEvent<HTMLInputElement>,
        sentenceIndex: number
    ) => {
        if (event.ctrlKey && event.key.toLowerCase() === "b") {
            event.preventDefault(); // Evita el comportamiento predeterminado
            addWhiteSpace(event.target as HTMLInputElement, sentenceIndex); // Agrega la línea en la posición del cursor
        }
    };





    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Sentences</h2>


            <div className="">
                {sentences.map((sentence, index) => (
                    <Card key={index} className="space-y-4 border p-4 rounded-md">

                        <CardHeader className="pb-1 flex flex-row items-center justify-between">
                            <CardTitle className="text-2xl">
                                Sentence {index + 1}
                            </CardTitle>

                            <Button
                                variant='ghost'
                                size='icon'
                                onClick={() => removeSentence(index)}
                                className="text-destructive hover:underline"
                            >
                                <Cross1Icon />
                            </Button>
                        </CardHeader>


                        <CardContent className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium">Complete sentence</label>
                                <Input
                                    type="text"
                                    {...register(`sentences.${index}.original_sentence`)}
                                    className="w-full p-2 border rounded"
                                    onKeyDown={(e) => handleGrammarCommands(e, `sentences.${index}.original_sentence`, setValue)}
                                />

                                {formState.errors.sentences?.[index]?.original_sentence && (
                                    <span className="text-destructive text-sm">
                                        {formState.errors.sentences[index]?.original_sentence?.message || "Invalid sentence"}
                                    </span>
                                )}
                            </div>


                            <div>
                                <label className="block text-sm font-medium">Sentence to show</label>

                                <div >
                                    <Input
                                        type="text"
                                        {...register(`sentences.${index}.sentence_to_show`)}
                                        className="w-full p-2 border rounded"
                                        onChange={(e) => handleAutoCompleteParentheses(e, index)}
                                        onKeyDown={(e) => {
                                            handleKeyDown(e, index)
                                            handleGrammarCommands(e, `sentences.${index}.sentence_to_show`, setValue)
                                        }} // Detecta Ctrl + B

                                    />


                                    <span className="text-xs text-muted-foreground">
                                        Press{" "}
                                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                            <span className="text-xs">⌘</span>B
                                        </kbd>
                                        {" "}
                                        for add a blank space to input.
                                    </span>
                                </div>

                                {formState.errors.sentences?.[index]?.sentence_to_show && (
                                    <span className="text-destructive text-sm">
                                        {formState.errors.sentences[index]?.sentence_to_show?.message || "Invalid sentence"}
                                    </span>
                                )}
                            </div>




                        </CardContent>


                        <CardFooter>
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold">Answers</h3>
                                {sentence.answers.map((_answer: string, answerIndex: number) => (
                                    <div key={answerIndex} className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            {...register(
                                                `sentences.${index}.answers.${answerIndex}`
                                            )}


                                            onKeyDown={(e) => handleGrammarCommands(e, `sentences.${index}.answers.${answerIndex}`, setValue)}
                                            placeholder={`Answer ${answerIndex + 1}`}
                                            className="flex-1 p-2 border rounded"
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            onClick={() => removeAnswer(index, answerIndex)}

                                        >
                                            <TrashIcon className="h-5 w-5" />
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    variant="secondary"
                                    type="button"
                                    onClick={() => addAnswer(index)}
                                    className="mt-2 border"
                                >
                                    Add answer
                                </Button>


                            </div>
                        </CardFooter>





                    </Card>
                ))}
            </div>


            <Button type="button" onClick={addSentence}>
                Add Sentence
            </Button>
        </div>
    );
}
