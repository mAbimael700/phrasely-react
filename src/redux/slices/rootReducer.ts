import { combineReducers } from '@reduxjs/toolkit';
import userSlice from './userSlice';
import questionSlice from './questionSlice';
import sentenceSlice from './sentenceSlice';
import questionReducer from "@/redux/slice";

const rootReducer = combineReducers({
    user: userSlice,
    question: questionSlice,
    sentence: sentenceSlice,
    questions: questionReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
