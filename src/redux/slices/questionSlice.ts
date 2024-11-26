import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Question, QuestionState } from '@/types/questionType';

const initialState: QuestionState = {
    questions: [],
    current: 0,
    topic: '',
};

const questionSlice = createSlice({
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
        // Añadir pregunta
        addQuestion(state, action: PayloadAction<Question>) {
            state.questions.push(action.payload);
        },
        // Eliminar pregunta
        removeQuestion(state, action: PayloadAction<number>) {
            const index = action.payload;
            if (index >= 0 && index < state.questions.length) {
                state.questions.splice(index, 1); 
            }
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

export const { addTopic, resetTopic, addQuestion, removeQuestion, next, prev, reset } = questionSlice.actions;
export default questionSlice.reducer;