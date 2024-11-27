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
        // Añadir tema
        addTopic(state, action: PayloadAction<string>) {
            state.topic = action.payload; 
        },
        // Restablecer tema al estado inicial
        resetTopic(state) {
            state.topic = initialState.topic; 
        },
        // Añadir oración
        addSentence(state, action: PayloadAction<Sentence[]>) {
            state.sentences = action.payload;
        },
        // Eliminar oración
        removeSentence(state, action: PayloadAction<number>) {
            const index = action.payload;
            if (index >= 0 && index < state.sentences.length) {
                state.sentences.splice(index, 1); 
            }
        },
        // Siguiente oración
        next(state) {
            if (state.current < state.sentences.length - 1) {
                state.current += 1;
            }
        },
        // Oración anterior
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

export const { addTopic, resetTopic, addSentence, removeSentence, next, prev, reset } = sentenceSlice.actions;
export default sentenceSlice.reducer;