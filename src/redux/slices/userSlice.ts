import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Teacher, Guest, UserState } from '../../types/userType';

const initialState: UserState = {
    teacher: null,
    guests: [] as Guest[], 
    currentIndex: 0,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        // Registrar maestro
        registerTeacher(state, action: PayloadAction<Teacher>) {
            state.teacher = action.payload;
        },
        // Registrar invitado
        registerGuest(state, action: PayloadAction<Guest>) {
            if (!state.guests) {
                state.guests = [];
            }
            state.guests.push(action.payload);
        },          
        nextGuest: (state) => {
            state.currentIndex = (state.currentIndex + 1) % state.guests.length;
        },
        updateScore: (state, action: PayloadAction<number>) => {
            const currentGuest = state.guests[state.currentIndex];
            currentGuest.score += action.payload;
        },
        // Restablecer Invitados
        resetGuests(state) {
            state.guests = [];
        },
        // Elimitar invitados
        removeGuest(state, action: PayloadAction<string>) {
            state.guests = state.guests.filter(guest => guest.id !== action.payload);
        },
        // Restablecer todo
        resetUser() {
            return initialState;
        },
    },
});

export const { registerTeacher, registerGuest, nextGuest, updateScore, resetGuests, removeGuest, resetUser } = userSlice.actions;
export default userSlice.reducer;