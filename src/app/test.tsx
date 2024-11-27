import { ExerciseLayout } from "@/components/quizz/exercise-layout"
import Cube from "@/assets/cube.jpg"
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { Question } from "@/types/questionType"
import { next as questionNext, prev as questionPrev } from "@/redux/slices/questionSlice";

const questions: Question[] = [
    {
        id: '1',
        label: '¿Cuál es el planeta más cercano al Sol?',
        options: ['Venus', 'Marte', 'Mercurio'],
        correct: 2,
    },
    {
        id: '2',
        label: '¿Cuál es el elemento químico más abundante en la Tierra?',
        options: ['Oxígeno', 'Silicio', 'Hidrógeno'],
        correct: 0,
    },
];

export const TestCode = () => {
    const dispatch = useAppDispatch();
    const { current, topic } = useAppSelector(state => state.question);

    const handleNext = () => dispatch(questionNext());
    const handlePrev = () => dispatch(questionPrev());
    return (
        <>  
            <ExerciseLayout 
                backgroundImage={Cube} 
                data={questions} 
                current={current} 
                topic={topic} 
                onNext={handleNext} 
                onPrev={handlePrev} 
            />
        </>
    )
}
