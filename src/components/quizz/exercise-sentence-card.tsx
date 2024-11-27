import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "../ui/button"
import { Question } from '@/types/questionType';
import { Sentence } from '@/types/sentenceType';

interface ExerciseSentenceCardProps {
    title: string;
    label: string;
    answers: Array<String>;
    onAnswerSelect: (answerIdx: number) => void;
    selectedAnswer: number | null;
    isCorrect: boolean | null;
    data: (Question | Sentence)[]; 
    current: number; 
}

export const ExerciseSentenceCard = ({ title, label, answers, onAnswerSelect, selectedAnswer, isCorrect, data, current }: ExerciseSentenceCardProps) => {
    return (
        <Card className="bg-orange-100 border-orange-600 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg">
            <CardHeader>
                <CardTitle className=" text-2xl text-center rounded-t-md text-white">{title}</CardTitle>
            </CardHeader>

            <CardContent className="rounded-2xl">
                <p className="text-3xl text-center text-slate-100">
                    {label}
                </p>

                <div className="flex items-center w-full justify-center gap-6 py-10">
                    {answers.map((item, idx) => {
                        let buttonClass = "w-28 bg-[#594668] hover:bg-[#AA85C6] rounded-2xl text-white";
                        if (selectedAnswer !== null) {
                            if (selectedAnswer === idx && isCorrect) {
                                buttonClass = "w-28 bg-green-500 rounded-lg text-white";  
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
                    <div className="text-center mt-4">
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