import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, QuestionState } from '../types/questionTypes';

const initialState: QuestionState = {
    questions: [],
    current: 0,
};

const questionSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
        // Buscar una pregunta especifica
        setQuestion(state, action: PayloadAction<number>) {
            if (action.payload >= 0 && action.payload < state.questions.length) {
                state.current = action.payload;
            }
        },
        // Añadir pregunta
        addQuestion(state, action: PayloadAction<Question>) {
            state.questions.push(action.payload);
        },
        // Siguiente pregunta
        next(state) {
            if (state.current < state.questions.length - 1) {
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

export const { addQuestion, reset } = questionSlice.actions;
export default questionSlice.reducer;