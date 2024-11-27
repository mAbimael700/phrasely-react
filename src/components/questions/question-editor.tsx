
import { useFormContext } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Cross1Icon } from "@radix-ui/react-icons";
import { handleGrammarCommands } from "@/lib/commands/handle-grammar-commands";
import { useQuestionHandlers } from "@/components/questions/hooks/useQuestionHandlers";
import { IQuestionFormSchema } from "@/components/questions/types/IQuestionFormSchema";

interface QuestionEditorProps {
    selectedIndex: number;
    questions: IQuestionFormSchema["questions"];
    addQuestion: () => void;
}

export function QuestionEditor({ selectedIndex, questions, addQuestion }: QuestionEditorProps) {
    const { register, setValue, formState } = useFormContext<IQuestionFormSchema>();
    const { handleAutoCompleteParentheses, handleKeyDown } = useQuestionHandlers(setValue);

    const currentQuestion = questions[selectedIndex] || {};

    
    return (
        <Card key={selectedIndex} className="border p-4 rounded-lg border-orange-300 space-y-4">
            <CardHeader className="border-b">
                <CardTitle className="text-2xl">Edit Question {selectedIndex + 1}</CardTitle>
                <CardDescription className="font-light text-base">
                    Configure the question for your exercise.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <label className="block text-sm font-medium">Question</label>
                    <Input
                        type="text"
                        {...register(`questions.${selectedIndex}.question`)}
                        className="w-full p-2 border rounded"


                        onChange={(e) => handleAutoCompleteParentheses(e, selectedIndex)}
                        onKeyDown={(e) => {
                            handleKeyDown(e, selectedIndex)
                            handleGrammarCommands(
                                e,
                                `questions.${selectedIndex}.questions`,
                                setValue
                            )
                        }}
                    />
                    <div className="text-sm text-muted-foreground mt-2">
                        This the question that will appear in the game.
                    </div>
                    {formState.errors.questions?.[selectedIndex]?.question && (
                        <span className="text-destructive text-sm">
                            {formState.errors.questions[selectedIndex]?.question?.message}
                        </span>
                    )}
                </div>


                <div className="space-y-2">
                    <h3 className="text-sm font-medium">Answers</h3>
                    {currentQuestion.answers?.map((_answer, answerIndex) => (
                        <div key={answerIndex} className="flex items-center gap-2">
                            <Input
                                type="text"
                                {...register(`questions.${selectedIndex}.answers.${answerIndex}`)}
                                className="flex-1 p-2 border rounded"
                                onKeyDown={(e) => {
                                    handleGrammarCommands(e, `questions.${selectedIndex}.aswers.${answerIndex}`,
                                        setValue)
                                }}
                            />
                            <Button
                                variant="destructive"
                                size="icon"
                                onClick={() =>
                                    setValue(
                                        `questions.${selectedIndex}.answers`,
                                        currentQuestion.answers.filter((_, i) => i !== answerIndex)
                                    )
                                }
                            >
                                <Cross1Icon />
                            </Button>
                        </div>
                    ))}


                    {formState.errors.questions?.[selectedIndex]?.answers && (
                        <span className="text-destructive text-sm">
                            {formState.errors.questions[selectedIndex]?.answers?.message}
                        </span>
                    )}

                    <Button
                        type="button"
                        variant="secondary"
                        onClick={() =>
                            setValue(`questions.${selectedIndex}.answers`, [
                                ...(currentQuestion.answers || []),
                                "",
                            ])
                        }
                    >
                        Add answer
                    </Button>
                </div>
            </CardContent>
            <CardFooter>
                <Button type="button" className="w-full" onClick={addQuestion}>
                    Add question
                </Button>
            </CardFooter>
        </Card>
    );
}
