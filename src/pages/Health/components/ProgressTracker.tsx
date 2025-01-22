import React from 'react';

const ProgressTracker = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-medium text-violet-900 dark:text-violet-200 mb-3">Progress Tracker</h2>
      <div className="relative w-48 h-48 mx-auto">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="10"
            className="dark:stroke-gray-700"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#7C3AED"
            strokeWidth="10"
            strokeDasharray="283"
            strokeDashoffset="70"
            transform="rotate(-90 50 50)"
            className="dark:stroke-violet-400"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-2xl font-bold text-violet-900 dark:text-violet-200">75%</span>
          <span className="text-sm text-gray-600 dark:text-gray-400">Progress</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressTracker;