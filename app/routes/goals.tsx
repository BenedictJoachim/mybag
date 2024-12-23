import React, { useState } from "react";
import Button from "../components/atoms/Button";
import InputField from "../components/atoms/InputField";

export const handle = {routeName: "Financial Goals"};

export default function Goals() {
  const [goals, setGoals] = useState([
    { title: "Vacation Fund", amount: 3000 },
    { title: "Emergency Fund", amount: 10000 },
  ]);

  const [newGoal, setNewGoal] = useState({ title: "", amount: "" });

  const handleAddGoal = () => {
    if (newGoal.title && newGoal.amount) {
      setGoals([...goals, { ...newGoal, amount: Number(newGoal.amount) }]);
      setNewGoal({ title: "", amount: "" });
    }
  };

  return (
    <div className="p-6">

      <div className="mt-4 p-2 border-2 border-gray-200 rounded-xl">
      <h1 className="text-xl font-bold">Financial Goals</h1>
      <hr className="bg-gray-500 mb-4" />

        {goals.map((goal, index) => (
          <div
            key={index}
            className="flex justify-between p-4 bg-white shadow rounded mb-2"
          >
            <div>
              <h3 className="text-lg font-semibold">{goal.title}</h3>
              <p>Amount: Tsh{goal.amount}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Add New Goal</h2>
        <InputField
          label="Title"
          value={newGoal.title}
          onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
        />
        <InputField
          label="Amount"
          value={newGoal.amount}
          onChange={(e) => setNewGoal({ ...newGoal, amount: e.target.value })}
          placeholder="Enter amount in USD"
        />
        <Button
          label="Add Goal"
          onClick={handleAddGoal}
          className="mt-4 bg-green-500 hover:bg-green-600"
        />
      </div>
    </div>
  );
}
