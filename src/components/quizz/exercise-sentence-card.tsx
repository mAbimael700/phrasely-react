import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Question } from '@/types/questionType';
import { Sentence } from '@/types/sentenceType';
import { GoPerson } from "react-icons/go";
import { capitalizeText } from "@/lib/utils";
import { Button } from "../ui/button"

interface ExerciseSentenceCardProps {
    title: string;
    guest: string;
    label: string;
    answers: Array<String>;
    onAnswerSelect: (answerIdx: number) => void;
    selectedAnswer: number | null;
    isCorrect: boolean | null;
    data: (Question | Sentence)[]; 
    current: number; 
    Glassbackground: String;
}

export const ExerciseSentenceCard = ({ title, guest, label, answers, onAnswerSelect, selectedAnswer, isCorrect, data, current, Glassbackground = "bg-white/10" }: ExerciseSentenceCardProps) => {
    return (
        <Card className={`rounded-2xl min-w-[600px] min-h-[300px] ${Glassbackground} backdrop-blur-2xl border border-white/20 shadow-lg`}>
            <CardHeader className="flex flex-row justify-between p-4">
                <div className="flex items-center space-x-2 text-white">
                    <GoPerson size={20} fontSize={700} />
                    <p className="text-base font-medium">{capitalizeText(guest)}</p>
                </div>

                <CardTitle className="text-lg text-white">
                    {capitalizeText(title)}
                </CardTitle>
            </CardHeader>
            <div className="h-px bg-white/20 backdrop-blur-sm my-1"></div>

            <CardContent className="rounded-2xl">
                <p className="text-3xl text-center text-slate-100 pt-5 py-2">
                    {label}
                </p>

                <div className="flex items-center w-full justify-center gap-6 py-10">
                    {answers.map((item, idx) => {
                        let buttonClass = "min-w-28 bg-[#594668] hover:bg-[#AA85C6] rounded-2xl text-white";
                        if (selectedAnswer !== null) {
                            if (selectedAnswer === idx && isCorrect) {
                                buttonClass = "w-28 bg-green-500 rounded-2xl text-white";  
                            } else if (selectedAnswer === idx && !isCorrect) {
                                buttonClass = "w-28 bg-red-500 rounded-2xl text-white"; 
                            }
                        }

                        return (
                            <Button
                                key={idx}
                                className={buttonClass}
                                onClick={() => onAnswerSelect(idx)} 
                                disabled={selectedAnswer !== null}
                            >
                                {item}
                            </Button>
                        );
                    })}
                </div>

                {isCorrect !== null && (
                    <div className="text-center">
                        {isCorrect ? (
                            <p className="text-white text-xl font-semibold">¡Respuesta correcta!</p>
                        ) : (
                            <p className="text-white text-xl font-semibold">La respuesta era: {answers[(data as (Question[] | Sentence[]))[current].correct]}</p>
                        )}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};