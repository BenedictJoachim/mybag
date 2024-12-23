import React, { useState } from "react";
import InputField from "../components/atoms/InputField";
import Button from "../components/atoms/Button";

export default function Expenses() {
  const [expenses, setExpenses] = useState([
    { title: "Rent", amount: 1200, type: "Recurring" },
    { title: "Grocery", amount: 300, type: "One-Time" },
  ]);

  const [newExpense, setNewExpense] = useState({
    title: "",
    amount: "",
    type: "Recurring",
  });

  const handleAddExpense = () => {
    if (newExpense.title && newExpense.amount) {
      setExpenses([
        ...expenses,
        { ...newExpense, amount: Number(newExpense.amount) },
      ]);
      setNewExpense({ title: "", amount: "", type: "Recurring" });
    }
  };

  return (
    <div className="p-6 min-h-screen bg-gray-100">

      <div className="mt-4 p-2 border-2 border-gray-200 rounded-xl">
      <h1 className="text-xl font-bold mb-2">Expenses</h1>
      <hr className="bg-gray-500 mb-4" />

        {expenses.map((expense, index) => (
          <div
            key={index}
            className="flex justify-between p-4 bg-white shadow rounded mb-2"
          >
            <div>
              <h3 className="text-lg font-semibold">{expense.title}</h3>
              <p>Amount: Tsh{expense.amount}</p>
              <p>Type: {expense.type}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-lg font-semibold">Add New Expense</h2>
        <InputField
          label="Title"
          value={newExpense.title}
          onChange={(e) =>
            setNewExpense({ ...newExpense, title: e.target.value })
          }
        />
        <InputField
          label="Amount"
          value={newExpense.amount}
          onChange={(e) =>
            setNewExpense({ ...newExpense, amount: e.target.value })
          }
          placeholder="Enter amount in USD"
        />
        <div className="mt-2">
          <label className="text-gray-700">Type</label>
          <select
            value={newExpense.type}
            onChange={(e) =>
              setNewExpense({ ...newExpense, type: e.target.value })
            }
            className="block w-full p-2 border rounded mt-1"
          >
            <option value="Recurring">Recurring</option>
            <option value="One-Time">One-Time</option>
          </select>
        </div>
        <Button
          label="Add Expense"
          onClick={handleAddExpense}
          className="mt-4 bg-red-500 hover:bg-red-600"
        />
      </div>
    </div>
  );
}
