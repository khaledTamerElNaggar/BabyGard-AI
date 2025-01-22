import React from 'react';
import { Plus, Eye } from 'lucide-react';

const VaccinationHistory = () => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl p-4 shadow-sm">
      <h2 className="text-lg font-medium text-violet-900 dark:text-violet-200 mb-3">Vaccination & Medical History</h2>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <button className="flex items-center justify-center gap-2 p-3 bg-violet-50 dark:bg-gray-700 rounded-xl text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-gray-600">
            <Eye className="w-5 h-5" />
            <span>View vaccination</span>
          </button>
          <button className="flex items-center justify-center gap-2 p-3 bg-violet-50 dark:bg-gray-700 rounded-xl text-violet-600 dark:text-violet-400 hover:bg-violet-100 dark:hover:bg-gray-600">
            <Plus className="w-5 h-5" />
            <span>Add Vaccination</span>
          </button>
        </div>
        <div className="p-3 bg-violet-50 dark:bg-gray-700 rounded-xl text-center">
          <span className="text-violet-600 dark:text-violet-400">Next vaccination in 20 days</span>
        </div>
      </div>
    </div>
  );
};
export default VaccinationHistory;