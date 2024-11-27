import { useAppDispatch } from '@/redux/reduxHooks';
import { addQuestion, removeQuestion } from '@/redux/slices/questionSlice';
import { Question } from '@/types/questionType';

export const useQuestion = () => {
    const dispatch = useAppDispatch();

    const handleNewQuestion = (question: Question[]) => {
        dispatch(addQuestion(question));
    };

    const deleteSentence = (index: number) => {
        dispatch(removeQuestion(index));
    };

    return {
        handleNewQuestion,
        deleteSentence
    };
};