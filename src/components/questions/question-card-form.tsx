
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { IQuestionFormSchema } from "@/components/questions/types/IQuestionFormSchema";

import { cn } from "@/lib/utils";
import { useQuestionSelection } from "@/contexts/question-form-context";
import { useFormContext } from "react-hook-form";


interface QuestionCardFormProps {
    index: number;
}

export const QuestionCardForm = ({ index }: QuestionCardFormProps) => {
    const { watch, getValues, setValue, register } = useFormContext<IQuestionFormSchema>();

    const currentQuestion = watch(`questions.${index}`);
    const { setSelectedQuestionIndex } = useQuestionSelection();

    const removeSentence = (sentenceIndex: number) => {
        const currentQuestions = getValues("questions") || [];
        const updatedQuestions = currentQuestions.filter((_, i) => i !== sentenceIndex);

        // Actualizar el estado del formulario
        setValue("questions", updatedQuestions);

        // Ajustar el índice seleccionado
        if (updatedQuestions.length === 0) {
            // No hay sentencias restantes
            setSelectedQuestionIndex(null); // O usa -1 si prefieres un número
        } else if (sentenceIndex >= updatedQuestions.length) {
            // Si se eliminó la última sentencia, selecciona la anterior
            setSelectedQuestionIndex(updatedQuestions.length - 1);
        } else {
            // Mantén el índice actual si es válido
            setSelectedQuestionIndex(sentenceIndex);
        };
    }



    const handleEdit = () => {
        setSelectedQuestionIndex(index); // Alternar la selección
    };

    return (
        <Card>
            <CardHeader className="pb-1 flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">Question {index + 1}</CardTitle>
                <div className="flex space-x-2">
                    <Button variant="secondary" onClick={handleEdit}>
                        Edit
                    </Button>
                    <Button
                        variant='ghost'
                        size='icon'
                        onClick={() => removeSentence(index)}
                        className="text-destructive hover:underline"
                    >
                        <Cross1Icon />
                    </Button>
                </div>
            </CardHeader>
            <CardContent>


                {currentQuestion?.question ? <p>{currentQuestion?.question}</p> :
                    <p>Waiting for completing the question...</p>}

            </CardContent>
            <CardFooter>


                <RadioGroup defaultValue="0" className="flex gap-2">



                    {currentQuestion?.answers.length > 0 && currentQuestion?.answers.map((answer, idx) => {

                        if (answer != "")
                            return (

                                <div key={idx + "answ"}>
                                    <RadioGroupItem {...register(`questions.${index}.correct_answer`)} className="hidden" value={(idx).toString()} id={answer} />
                                    <Label className={buttonVariants({ variant: "secondary", className: cn(currentQuestion.correct_answer == idx && "bg-green-400 hover:bg-green-500") })} htmlFor={answer}
                                        onClick={() => { setValue(`questions.${index}.correct_answer`, idx) }}
                                    >{answer}</Label>
                                </div>
                            )
                    })}

                </RadioGroup>
            </CardFooter>
        </Card>
    );
};
