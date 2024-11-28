import { useFormContext } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { SentenceCardForm } from "./sentence-card-form";
import { handleGrammarCommands } from "@/lib/commands/handle-grammar-commands";
import { useSentenceSelection } from "@/contexts/sentence-form-context";
import { ISenteceFormSchema } from "./fields-sentences/types/ISentenceFormSchema";
import React from "react";
import { Cross1Icon } from "@radix-ui/react-icons";



export function FieldsSentences() {
    const { register, watch, setValue, getValues, formState } = useFormContext<ISenteceFormSchema>();

    // Mantener el índice de la sentencia seleccionada
    const { selectedSentenceIndex, setSelectedSentenceIndex } = useSentenceSelection();

    // Observar el estado actual de las sentencias
    const sentences = watch("sentences");


    const currentSentence = sentences[selectedSentenceIndex ?? 0] || {};

    // Función para agregar una nueva sentencia
    const addSentence = () => {
        const currentSentences = getValues("sentences") || [];
        setValue("sentences", [
            ...currentSentences,
            {
                original_sentence: "",
                sentence_to_show: "",
                answers: [""], // Inicializa con una respuesta vacía,
                correct_answer: 0
            },
        ]);

        setSelectedSentenceIndex(currentSentences.length)
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
            "___" +
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
        <div className="space-y-4 selection:text-primary-foreground selection:bg-primary">

            <h2 className="text-2xl font-semibold">Let's gonna add some sentences!</h2>
            <div className="grid md:grid-cols-2 gap-5">
                {/* Card para editar la sentencia activa */}
                {
                    selectedSentenceIndex != null &&

                    <Card key={selectedSentenceIndex} className="border p-4 rounded-md space-y-4">
                        <CardHeader className="border-b">
                            <CardTitle className="text-2xl">Edit Sentence {selectedSentenceIndex + 1}</CardTitle>
                            <CardDescription>
                                Here you will configure the sentence that you want to add to the exercise.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            {/* Campo original_sentence */}
                            <div>
                                <label className="block text-sm font-medium">Complete sentence</label>
                                <Input
                                    type="text"
                                    {...register(`sentences.${selectedSentenceIndex}.original_sentence`)}
                                    className="w-full p-2 border rounded"
                                    onKeyDown={(e) =>
                                        handleGrammarCommands(
                                            e,
                                            `sentences.${selectedSentenceIndex}.original_sentence`,
                                            setValue
                                        )
                                    }
                                />
                                <div className="text-xs text-muted-foreground mt-2">
                                    This is how the sentence will look in the correct form.
                                </div>
                                {formState.errors.sentences?.[selectedSentenceIndex]?.original_sentence && (
                                    <span className="text-destructive text-sm">
                                        {formState.errors.sentences[selectedSentenceIndex]?.original_sentence?.message}
                                    </span>
                                )}
                            </div>

                            {/* Campo sentence_to_show */}
                            <div>
                                <label className="block text-sm font-medium">Sentence to show</label>
                                <Input
                                    type="text"
                                    {...register(`sentences.${selectedSentenceIndex}.sentence_to_show`)}
                                    className="w-full p-2 border rounded"
                                    onChange={(e) => {
                                        handleAutoCompleteParentheses(e, selectedSentenceIndex);
                                    }}
                                    onKeyDown={(e) => {
                                        handleGrammarCommands(
                                            e,
                                            `sentences.${selectedSentenceIndex}.sentence_to_show`,
                                            setValue
                                        );
                                        handleKeyDown(e, selectedSentenceIndex);
                                    }}
                                />
                                <div className="text-xs text-muted-foreground mt-2">
                                    Press{" "}
                                    <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                                        <span className="text-xs">⌘</span>B
                                    </kbd>{" "}
                                    to add a blank space to input.
                                </div>
                                {formState.errors.sentences?.[selectedSentenceIndex]?.sentence_to_show && (
                                    <span className="text-destructive text-sm">
                                        {formState.errors.sentences[selectedSentenceIndex]?.sentence_to_show?.message ||
                                            "Invalid sentence"}
                                    </span>
                                )}
                            </div>

                            {/* Respuestas */}
                            <div className="space-y-2">
                                <h3 className="text-sm font-bold">Answers</h3>
                                {currentSentence.answers?.map((_answer: string, answerIndex: number) => (
                                    <div key={answerIndex} className="flex items-center gap-2">
                                        <Input
                                            type="text"
                                            {...register(
                                                `sentences.${selectedSentenceIndex}.answers.${answerIndex}`
                                            )}
                                            className="flex-1 p-2 border rounded"
                                            onKeyDown={(e) =>
                                                handleGrammarCommands(
                                                    e,
                                                    `sentences.${selectedSentenceIndex}.answers.${answerIndex}`,
                                                    setValue
                                                )
                                            }
                                        />
                                        <Button
                                            type="button"
                                            variant="destructive"
                                            size="icon"
                                            onClick={() =>
                                                setValue(
                                                    `sentences.${selectedSentenceIndex}.answers`,
                                                    currentSentence.answers.filter((_, i) => i !== answerIndex)
                                                )
                                            }
                                        >
                                            <Cross1Icon />
                                        </Button>
                                    </div>
                                ))}
                                <Button
                                    variant="secondary"
                                    onClick={() =>
                                        setValue(`sentences.${selectedSentenceIndex}.answers`, [
                                            ...(currentSentence.answers || []),
                                            "",
                                        ])
                                    }
                                >
                                    Add answer
                                </Button>
                            </div>
                        </CardContent>

                        <CardFooter>
                            <Button type="button" className="w-full" onClick={addSentence}>
                                Add Sentence
                            </Button>
                        </CardFooter>
                    </Card>

                }


                {/* Lista de sentencias */}
                <div className="space-y-2">
                    {sentences.map((_, index) => (
                        <SentenceCardForm
                            key={index}
                            index={index}

                        />
                    ))}
                </div>
            </div>

            

        </div>
    );
}
