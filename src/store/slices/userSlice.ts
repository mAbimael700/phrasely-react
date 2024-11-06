import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Teacher, Guest, UserState } from '../types/userTypes';

const initialState: UserState = {
    teacher: null,
    guests: [],
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
            state.guests.push(action.payload);
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

export const { registerTeacher, registerGuest, resetGuests, removeGuest, resetUser } = userSlice.actions;
export default userSlice.reducer;