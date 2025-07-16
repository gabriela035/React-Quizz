import { BookOpen, Play } from "lucide-react";
import React from "react";
import { useDispatch } from "react-redux";
import startQuiz from "../store/quizSlice";

function QuizStart() {
  const dispatch = useDispatch();
  const handleStartQuiz = () => {
    dispatch(startQuiz());
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mb-6">
            <BookOpen className="w-12 h12" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            {" "}
            Knowledge Quizes
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Test your knowledge with multiple quizes
          </p>
        </div>

        {/* cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-blue-800 mb-2"> 8 </div>
            <div className="text-2xl font-medium">Question </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-8 h-8 text-blue" />
            </div>
            <div className="text-2xl font-bold text-purple-800 mb-2"> 8 </div>
            <div className="text-2xl font-medium">Question </div>
          </div>
        </div>
        <button
          className="inline-flex items-center space-x-3 py-4 px-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg font-semibold text-lg cursor-pointer"
          onClick={handleStartQuiz}
        >
          <Play size={24} />
          <span> Start </span>
        </button>
      </div>
    </div>
  );
}

export default QuizStart;
