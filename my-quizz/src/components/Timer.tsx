import { Clock } from "lucide-react";
import React from "react";

function Timer() {
  return (
    <div className={`flex items-center space-x-2`}>
      <Clock size={20} />
      <span className="font-mono text-lg font-semibold ">Time left</span>
    </div>
  );
}

export default Timer;
