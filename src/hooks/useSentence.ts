import { useAppDispatch } from '../redux/reduxHooks';
import { addSentence, removeSentence } from '../redux/slices/sentenceSlice';
import { Sentence } from '../types/sentenceType';

export const useUser = () => {
    const dispatch = useAppDispatch();

    const registerNewSentence = (sentence: Sentence) => {
        dispatch(addSentence(sentence));
    };

    const deleteSentence = (index: number) => {
        dispatch(removeSentence(index));
    };

    return {
        registerNewSentence,
        deleteSentence
    };
};
