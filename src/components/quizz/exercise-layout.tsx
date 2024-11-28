import { useState, useEffect } from "react";
import { ExerciseSentenceCard } from "@/components/quizz/exercise-sentence-card";
import { IoArrowBackOutline, IoArrowForwardOutline, IoTrashOutline } from "react-icons/io5";
import { GrHomeRounded } from "react-icons/gr";
import { CustomButton } from "./control-button";
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { Question } from "@/types/questionType";
import { Sentence } from "@/types/sentenceType";
import { updateScore, nextGuest } from "@/redux/slices/userSlice";
import { useNavigate } from 'react-router-dom';

interface ExerciseLayoutProps {
    backgroundImage: string;
    Glassbackground: string;
    data: Question[] | Sentence[];
    current: number;
    topic: string;
    onNext: () => void;
    onPrev: () => void;
    onReset: () => void;
}

export const ExerciseLayout: React.FC<ExerciseLayoutProps> = ({  
    backgroundImage, 
    Glassbackground,
    data, 
    current, 
    topic, 
    onNext, 
    onPrev,
    onReset,
}) => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
    const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

    const { guests = [], currentIndex = 0 } = useAppSelector(state => state.user);
    const currentGuest = guests?.[currentIndex];

    const handleAnswerSelect = (answerIdx: number) => {
        setSelectedAnswer(answerIdx);
        const correctAnswer = (data as Question[] | Sentence[])[current]?.correct;
        setIsCorrect(answerIdx === correctAnswer);
    };

    const handleNextQuestion = () => {
        if (selectedAnswer !== null) {
            if (isCorrect) {
                dispatch(updateScore(1));
            }

            if (current >= data.length - 1) {
                navigate("/console/rank"); 
            } else {
                dispatch(nextGuest());
                onNext();
                setSelectedAnswer(null);
                setIsCorrect(null);
            }
        }
    };

    const handleNavigate = () => {
        navigate("/console")
    }

    useEffect(() => {
        if (!data) navigate('/console');
    }, [data, navigate]); 

    return (
        <div 
            className="w-full min-h-screen px-10 bg-[#F35F31] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen">
                <ExerciseSentenceCard 
                    title={topic}
                    Glassbackground={Glassbackground}
                    guest={currentGuest.displayName}
                    label={(data as (Question | Sentence)[])[current]?.label}
                    answers={(data as (Question | Sentence)[])[current]?.options}
                    onAnswerSelect={handleAnswerSelect}
                    selectedAnswer={selectedAnswer}
                    isCorrect={isCorrect}
                    data={data} 
                    current={current} 
                />
                <div className="flex flex-row space-x-3 my-9">
                    <CustomButton 
                        onClick={onPrev} 
                        icon={<IoArrowBackOutline size={22} />} 
                    />
                    <CustomButton 
                        onClick={onReset} 
                        icon={<IoTrashOutline size={22} />} 
                    />
                    <CustomButton 
                        onClick={handleNavigate} 
                        icon={<GrHomeRounded size={22} />} 
                    />
                    <CustomButton 
                        onClick={handleNextQuestion} 
                        icon={<IoArrowForwardOutline size={22} />} 
                    />
                </div>
            </div>
        </div>
    );
};