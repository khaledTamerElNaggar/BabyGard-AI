import React from 'react';
import Header from '../../components/Header';
import Navbar from '../../components/Navbar';
import { useUser } from '../../contexts/UserContext';
import { Mail, Calendar, Baby, User } from 'lucide-react';

const Profile = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-violet-50 dark:bg-gray-900">
      {/* Page Header */}
      <Header title="Profile" />

      {/* Main Content */}
      <main className="max-w-lg mx-auto p-4 pb-24 space-y-6">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
          {/* User Avatar */}
          <div className="flex items-center justify-center mb-6">
            <div className="w-24 h-24 bg-violet-100 dark:bg-violet-900 rounded-full flex items-center justify-center">
              <span className="text-3xl font-semibold text-violet-600 dark:text-violet-400">
                {user?.name ? user.name.charAt(0) : '?'}
              </span>
            </div>
          </div>

          {/* User Details */}
          <div className="space-y-4">
            {/* Name */}
            <div className="flex items-center space-x-3 p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
              <User className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {user?.name || 'Unknown'}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-3 p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
              <Mail className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  {user?.email || 'Not Provided'}
                </p>
              </div>
            </div>

            {/* Member Since */}
            <div className="flex items-center space-x-3 p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
              <Calendar className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Member Since</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  January 2024
                </p>
              </div>
            </div>

            {/* Status */}
            <div className="flex items-center space-x-3 p-3 bg-violet-50 dark:bg-gray-700 rounded-lg">
              <Baby className="w-5 h-5 text-violet-600 dark:text-violet-400" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Status</p>
                <p className="font-medium text-gray-900 dark:text-gray-100">
                  Expecting Mother
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Bottom Navbar */}
      <Navbar />
    </div>
  );
};
export default Profile;