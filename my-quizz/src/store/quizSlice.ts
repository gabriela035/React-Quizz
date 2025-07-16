import { createSlice } from "@reduxjs/toolkit";

interface QuizState {
  question: any[]; // ideally, replace `any` with a proper `Question` type
  currentQuestionIndex: number;
  answers: any[];
  isQuizCompleted: boolean;
  score: number;
  timeLeft: number;
  isTimeActive: boolean;
  showExplanation: boolean;
}

const initialState: QuizState = {
  question: [],
  currentQuestionIndex: 0,
  answers: [],
  isQuizCompleted: false,
  score: 0,
  timeLeft: 300,
  isTimeActive: false,
  showExplanation: false,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.question = action.payload;
    },

    startQuiz: (state) => {
      state.currentQuestionIndex = 0;
      state.answers = [];
      state.isQuizCompleted = false;
      state.score = 0;
      state.timeLeft = 300;
      (state.isTimeActive = true), (state.showExplanation = false);
    },
  },
});

export const { setQuestions } = quizSlice.actions;

export default quizSlice.reducer;
