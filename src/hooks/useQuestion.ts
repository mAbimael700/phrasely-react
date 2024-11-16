import { useAppDispatch } from '../redux/reduxHooks';
import { addQuestion } from '@/redux/slices/questionSlice';
import { Question } from '@/types/questionType';

export const useQuestion = () => {
    const dispatch = useAppDispatch();

    const handleNewQuestion = (question: Question) => {
        dispatch(addQuestion(question));
    };

    return {
        handleNewQuestion,
    };
};
