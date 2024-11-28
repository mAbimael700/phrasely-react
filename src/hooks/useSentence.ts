import { useAppDispatch } from '@/redux/reduxHooks';
import { addSentence, addTopic, removeSentence, reset } from '@/redux/slices/sentenceSlice';
import { Sentence, SentenceState } from '@/types/sentenceType';

export const useSentence = () => {
    const dispatch = useAppDispatch();

    const registerTopicSentence = (topic: SentenceState['topic']) => {
        dispatch(addTopic(topic))
    }

    const registerNewSentence = (sentence: Sentence[]) => {
        dispatch(addSentence(sentence));
    };

    const deleteSentence = (index: number) => {
        dispatch(removeSentence(index));
    };

    const handleResetSentences = () => {
        dispatch(reset());
    }

    return {
        registerNewSentence,
        deleteSentence,
        registerTopicSentence,
        handleResetSentences
    };
};
