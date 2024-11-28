import { useFormContext } from "react-hook-form";
import { Cross1Icon } from "@radix-ui/react-icons";
import { useSentenceSelection } from "@/contexts/sentence-form-context";

import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ISenteceFormSchema } from "@/components/sentences/fields-sentences/types/ISentenceFormSchema";
import { cn } from "@/lib/utils";


interface SentenceCardFormProps {
    index: number;
}

export const SentenceCardForm = ({ index }: SentenceCardFormProps) => {
    const { watch, getValues, setValue, register } = useFormContext<ISenteceFormSchema>();

    const currentSentence = watch(`sentences.${index}`);
    const { setSelectedSentenceIndex } = useSentenceSelection();

    const removeSentence = (sentenceIndex: number) => {
        const currentSentences = getValues("sentences") || [];
        const updatedSentences = currentSentences.filter((_, i) => i !== sentenceIndex);

        // Actualizar el estado del formulario
        setValue("sentences", updatedSentences);

        // Ajustar el índice seleccionado
        if (updatedSentences.length === 0) {
            // No hay sentencias restantes
            setSelectedSentenceIndex(null); // O usa -1 si prefieres un número
        } else if (sentenceIndex >= updatedSentences.length) {
            // Si se eliminó la última sentencia, selecciona la anterior
            setSelectedSentenceIndex(updatedSentences.length - 1);
        } else {
            // Mantén el índice actual si es válido
            setSelectedSentenceIndex(sentenceIndex);
        };
    }



    const handleEdit = () => {
        setSelectedSentenceIndex(index); // Alternar la selección
    };

    return (
        <Card>
            <CardHeader className="pb-1 flex flex-row items-center justify-between">
                <CardTitle className="text-2xl">Sentence {index + 1}</CardTitle>
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


                {currentSentence?.sentence_to_show ? <p>{currentSentence?.sentence_to_show}</p> :
                    <p>Waiting for completing the sentence...</p>}

            </CardContent>
            <CardFooter>


                <RadioGroup defaultValue="0" className="flex gap-2">



                    {currentSentence?.answers.length > 0 && currentSentence?.answers.map((answer, idx) => {

                        if (answer != "")
                            return (

                                <div key={idx + "answ"}>
                                    <RadioGroupItem {...register(`sentences.${index}.correct_answer`)} className="hidden" value={(idx).toString()} id={answer} />
                                    <Label className={buttonVariants({ variant: "secondary", className: cn(currentSentence.correct_answer == idx && "bg-green-400 hover:bg-green-500") })} htmlFor={answer}
                                        onClick={() => { setValue(`sentences.${index}.correct_answer`, idx) }}
                                    >{answer}</Label>
                                </div>
                            )
                    })}

                </RadioGroup>
            </CardFooter>
        </Card>
    );
};
