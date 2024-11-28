import { ExerciseLayout } from "@/components/quizz/exercise-layout"
import Foodies from "@/assets/glass.png"
import { useAppDispatch, useAppSelector } from "@/redux/reduxHooks";
import { next as questionNext, prev as questionPrev } from "@/redux/slices/questionSlice";
import { useNavigate } from "react-router-dom";
import { useQuestion } from "@/hooks/useQuestion";

export const QuestionSlider = () => {
    const dispatch = useAppDispatch();
    const { current, topic, questions } = useAppSelector(state => state.question);



    const { handleResetQuestions } = useQuestion()
    const navigate = useNavigate()
    const handleReset = () => {
        handleResetQuestions()
        navigate("/console")
    }

    const handleNext = () => dispatch(questionNext());
    const handlePrev = () => dispatch(questionPrev());
    return (
        <>
            <ExerciseLayout
                Glassbackground="bg-purple-300/20"
                onReset={handleReset}
                backgroundImage={Foodies}
                data={questions}
                current={current}
                topic={topic}
                onNext={handleNext}
                onPrev={handlePrev}
            />
        </>
    )
}