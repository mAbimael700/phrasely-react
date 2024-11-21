import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Sentence, SentenceState } from '@/types/sentenceType';

const initialState: SentenceState = {
    sentences: [],
    current: 0,
    topic: '',
};

const sentenceSlice = createSlice({
    name: 'sentence',
    initialState,
    reducers: {
        addTopic(state, action: PayloadAction<string>) {
            state.topic = action.payload; 
        },
        // Añadir pregunta
        addSentence(state, action: PayloadAction<Sentence>) {
            state.sentences.push(action.payload);
        },
        // Siguiente pregunta
        next(state) {
            if (state.current < state.sentences.length - 1) {
                state.current += 1;
            }
        },
        // Pregunta anterior
        prev(state) {
            if (state.current > 0) {
                state.current -= 1;
            }
        },
        // Restablecer todo
        reset() {
            return initialState;
        },
    },
});

export const { addSentence, next, prev, reset } = sentenceSlice.actions;
export default sentenceSlice.reducer;