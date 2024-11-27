import { ExerciseLayout } from "@/components/quizz/exercise-layout"
import Cube from "@/assets/cube.jpg"
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { Question } from "@/types/questionType"
import { next as questionNext, prev as questionPrev } from "@/redux/slices/questionSlice";

const questions: Question[] = [
    {
        id: '1',
        label: 'You ____ (cook) for the class',
        options: ['Cooking', 'is cooking', 'are cooking'],
        correct: 2,
    },
    {
        id: '2',
        label: 'I am (work) for my fathers business',
        options: ['Worked', 'Working', 'Works'],
        correct: 1,
    }
];

export const TestCode = () => {
    const dispatch = useAppDispatch();
    const { current, topic } = useAppSelector(state => state.question);

    const handleNext = () => dispatch(questionNext());
    const handlePrev = () => dispatch(questionPrev());
    return (
        <>  
            <ExerciseLayout 
                Glassbackground="bg-purple-300/20"
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
