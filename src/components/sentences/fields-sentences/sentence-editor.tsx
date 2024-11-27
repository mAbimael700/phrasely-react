
import { useFormContext } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross1Icon } from "@radix-ui/react-icons";
import { handleGrammarCommands } from "@/lib/commands/handle-grammar-commands";
import { useSentenceHandlers } from "./hooks/useSentenceHandlers";
import { ISenteceFormSchema } from "./types/ISentenceFormSchema";

interface SentenceEditorProps {
    selectedIndex: number;
    sentences: ISenteceFormSchema["sentences"];
    addSentence: () => void;
}

export function SentenceEditor({ selectedIndex, sentences, addSentence }: SentenceEditorProps) {
    const { register, setValue, formState } = useFormContext<ISenteceFormSchema>();
    const { handleAutoCompleteParentheses, handleKeyDown } = useSentenceHandlers(setValue);

    const currentSentence = sentences[selectedIndex] || {};

    return (
        <Card key={selectedIndex} className="border p-4 rounded-lg border-orange-300 space-y-4">
            <CardHeader className="border-b">
                <CardTitle className="text-2xl">Edit Sentence {selectedIndex + 1}</CardTitle>
                <CardDescription className="font-light text-base">
                    Configure the sentence for your exercise.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Complete sentence</label>
                    <Input
                        type="text"
                        {...register(`sentences.${selectedIndex}.original_sentence`)}
                        className="w-full p-2 border rounded"
                        onKeyDown={(e) =>
                            handleGrammarCommands(
                                e,
                                `sentences.${selectedIndex}.original_sentence`,
                                setValue
                            )
                        }
                    />
                    <div className="text-sm text-muted-foreground mt-2">
                        This is how the sentence will look in the correct form.
                    </div>
                    {formState.errors.sentences?.[selectedIndex]?.original_sentence && (
                        <span className="text-destructive text-sm">
                            {formState.errors.sentences[selectedIndex]?.original_sentence?.message}
                        </span>
                    )}
                </div>
                <div>
                    <label className="block text-sm font-medium">Sentence to show</label>
                    <Input
                        type="text"
                        {...register(`sentences.${selectedIndex}.sentence_to_show`)}
                        className="w-full p-2 border rounded"
                        onChange={(e) => handleAutoCompleteParentheses(e, selectedIndex)}
                        onKeyDown={(e) => {
                            handleKeyDown(e, selectedIndex)
                            handleGrammarCommands(e, `sentences.${selectedIndex}.sentence_to_show`,
                                setValue)
                        }}
                    />
                    <div className="text-xs text-muted-foreground mt-2">
                        Press{" "}
                        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
                            <span className="text-xs">⌘</span>B
                        </kbd>{" "}
                        to add a blank space to input.
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-sm font-medium">Answers</h3>
                    {currentSentence.answers?.map((_answer, answerIndex) => (
                        <div key={answerIndex} className="flex items-center gap-2">
                            <Input
                                type="text"
                                {...register(`sentences.${selectedIndex}.answers.${answerIndex}`)}
                                className="flex-1 p-2 border rounded"
                                onKeyDown={(e) => {
                                    handleGrammarCommands(e, `sentences.${selectedIndex}.sentence.answers.${answerIndex}`,
                                        setValue)
                                }}
                            />
                            <Button
                                variant="destructive"
                                size="icon"
                                onClick={() =>
                                    setValue(
                                        `sentences.${selectedIndex}.answers`,
                                        currentSentence.answers.filter((_, i) => i !== answerIndex)
                                    )
                                }
                            >
                                <Cross1Icon />
                            </Button>
                        </div>
                    ))}


                    {formState.errors.sentences?.[selectedIndex]?.answers && (
                        <span className="text-destructive text-sm">
                            {formState.errors.sentences[selectedIndex]?.answers?.message}
                        </span>
                    )}

                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() =>
                            setValue(`sentences.${selectedIndex}.answers`, [
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
    );
}
