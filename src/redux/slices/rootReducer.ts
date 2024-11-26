import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import questionSlice from './questionSlice';
import sentenceSlice from './sentenceSlice';

const rootReducer = combineReducers({
    user: userSlice,
    question: questionSlice,
    sentence: sentenceSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
