import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "@/redux/slice";

const store = configureStore({
  reducer: {
    questions: questionReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
