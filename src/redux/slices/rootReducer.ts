import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import questionSlice from './questionSlice';

const rootReducer = combineReducers({
    user: userSlice,
    question: questionSlice
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
