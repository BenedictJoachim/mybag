import React from 'react';
import GoalCard from '../molecules/GoalCard';

const DashboardSummary: React.FC = () => (
  <div className="p-6">
    <h1 className="text-xl font-bold">Dashboard</h1>

    <section className="mt-4">
      <h2 className="text-lg font-semibold">Your Financial Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
        <GoalCard title="Vacation Fund" progress={50} amount={3000} />
        <GoalCard title="Emergency Fund" progress={75} amount={10000} />
      </div>
    </section>
  </div>
);

export default DashboardSummary;
