import { useAppDispatch } from '@/redux/reduxHooks';
import { addQuestion, removeQuestion, addTopic, reset } from '@/redux/slices/questionSlice';
import { Question, QuestionState } from '@/types/questionType';

export const useQuestion = () => {
    const dispatch = useAppDispatch();

    const registerTopicSentence = (topic: QuestionState['topic']) => {
        dispatch(addTopic(topic))
    }

    const handleNewQuestion = (question: Question[]) => {
        dispatch(addQuestion(question));
    };

    const deleteSentence = (index: number) => {
        dispatch(removeQuestion(index));
    };

    const handleResetQuestions = () => {
        dispatch(reset());
    }

    return {
        registerTopicSentence,
        handleNewQuestion,
        deleteSentence,
        handleResetQuestions
    };
};