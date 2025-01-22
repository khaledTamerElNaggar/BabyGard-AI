import React from 'react';
import { FileText, Plus } from 'lucide-react';

const InfantHealth = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-medium text-violet-900 dark:text-violet-200 mb-3">Infant Health</h2>
      <div className="grid grid-cols-2 gap-3">
        <button className="flex items-center justify-center gap-2 p-3 bg-violet-50 dark:bg-gray-700 rounded-xl text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-gray-600">
          <FileText className="w-5 h-5" />
          <span>Log symptoms</span>
        </button>
        <button className="flex items-center justify-center gap-2 p-3 bg-violet-50 dark:bg-gray-700 rounded-xl text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-gray-600">
          <Plus className="w-5 h-5" />
          <span>Add observation</span>
        </button>
      </div>
    </div>
  );
};
export default InfantHealth;