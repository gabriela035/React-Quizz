import React, { useEffect } from "react";
import QuizStart from "./QuizStart";
import ProgressionBar from "./ProgressionBar";
import Timer from "./Timer";
import TestingQuestions from "./Question";
import Results from "./Results";
import { useDispatch, useSelector } from "react-redux";
import Question from "./Question";
import { testingQuestions } from "../data/testingQuestions";
import { setQuestions } from "../store/quizSlice";

function Quiz() {
  const dispatch = useDispatch();

  //load question
  useEffect(() => {
    dispatch(setQuestions(testingQuestions));
  }, dispatch);

  const {
    question,
    currentQuestionIndex,
    isQuizCompleted,
    isTimerActive,
    answers,
  } = useSelector((state: any) => state.quiz);

  //loading
  if (question.length === 0) {
    return (
      <div className="min-h-screen bg-gradient to-br from-blue-50 via-white to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto">
            {" "}
          </div>
          <p className="mt-4 text-gray-600">Loading</p>
        </div>
      </div>
    );
  }

  //completed
  isQuizCompleted && (
    <div className="min-h-screen bg-gradient to-br from-blue-50 via-white to-purple-50 py-8 px-4 flex items-center justify-center">
      <Results />
    </div>
  );

  //quiz start
  if (!isTimerActive && answers.length === 0) {
    return (
      <div className="min-h-screen bg-gradient to-br from-blue-50 via-white to-purple-50 py-8 px-4 flex items-center justify-center">
        <QuizStart />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-8 px-4">
      <div className="max-w-4xl mx-auto mb-8">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
            <div className="flex-1">
              <ProgressionBar />
            </div>
            <div className="md:ml-6">
              <Timer />
            </div>
          </div>
        </div>
      </div>
      <Question />
    </div>
  );
}

export default Quiz;
