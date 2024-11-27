import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loadQuestions, saveQuestions } from "@/lib/translation/questionStorage";
import { Question } from "@/types/question";

interface QuestionState {
  questions: Question[];
}

const initialState: QuestionState = {
  questions: [],
};

// Acción para cargar preguntas desde localStorage
export const loadQuestionsAction = createAsyncThunk<Question[]>(
  "questions/loadQuestions",
  async () => {
    console.log("Disparando loadQuestionsAction...");
    return await loadQuestions();
  }
);

// Acción para guardar preguntas en localStorage
export const saveQuestionsAction = createAsyncThunk<Question[], Question[]>(
  "questions/saveQuestions",
  async (questions, { rejectWithValue }) => {
    try {
      console.log("Disparando saveQuestionsAction con preguntas:", questions);
      await saveQuestions(questions);
      return questions;
    } catch (error) {
      console.error("Error al guardar preguntas:", error);
      return rejectWithValue("Error al guardar las preguntas");
    }
  }
);

const questionSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    addQuestion(state, action) {
      console.log("Agregando pregunta al estado:", action.payload);
      state.questions.push(action.payload);
    },
    deleteQuestion(state, action) {
      console.log("Eliminando pregunta con ID:", action.payload);
      state.questions = state.questions.filter((q) => q.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadQuestionsAction.fulfilled, (state, action) => {
      console.log("Preguntas cargadas exitosamente en el estado:", action.payload);
      state.questions = action.payload;
    });
    builder.addCase(saveQuestionsAction.fulfilled, (state, action) => {
      console.log("Preguntas guardadas exitosamente en el estado:", action.payload);
      state.questions = action.payload;
    });
  },
});

export const { addQuestion, deleteQuestion } = questionSlice.actions;
export default questionSlice.reducer;
