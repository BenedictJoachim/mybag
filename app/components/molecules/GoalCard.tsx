import React from 'react';

interface GoalCardProps {
  title: string;
  progress: number; // Progress in percentage
  amount: number;
}

const GoalCard: React.FC<GoalCardProps> = ({ title, progress, amount }) => (
  <div className="bg-white shadow rounded p-4">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-sm text-gray-500">Amount: Tsh{amount}</p>
    <div className="w-full bg-gray-200 rounded-full h-3 mt-2">
      <div
        className="bg-green-500 h-3 rounded-full"
        style={{ width: `${progress}%` }}
      />
    </div>
    <p className="text-sm text-gray-600 mt-1">{progress}% Achieved</p>
  </div>
);

export default GoalCard;
