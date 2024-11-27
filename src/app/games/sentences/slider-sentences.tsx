import { ExerciseLayout } from "@/components/quizz/exercise-layout"
import Room from "@/assets/room.jpg"
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { next as sentenceNext, prev as sentencePrev } from "@/redux/slices/sentenceSlice";

export const SentenceSlider = () => {
    const dispatch = useAppDispatch();
    const { current, topic, sentences } = useAppSelector(state => state.sentence);

    const handleNext = () => dispatch(sentenceNext());
    const handlePrev = () => dispatch(sentencePrev());
    return (
        <>  
            <ExerciseLayout 
                backgroundImage={Room} 
                data={sentences} 
                current={current} 
                topic={topic} 
                onNext={handleNext} 
                onPrev={handlePrev} 
            />
        </>
    )
}