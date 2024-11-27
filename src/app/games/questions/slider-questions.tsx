import { ExerciseLayout } from "@/components/quizz/exercise-layout"
import Cube from "@/assets/cube.jpg"
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { next as questionNext, prev as questionPrev } from "@/redux/slices/questionSlice";

export const QuestionSlider = () => {
    const dispatch = useAppDispatch();
    const { current, topic, questions } = useAppSelector(state => state.question);

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