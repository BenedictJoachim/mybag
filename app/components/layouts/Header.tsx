import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <header className="bg-blue-500 text-white p-4">
      <nav className="flex gap-4">
        <Link to="/dashboard" className="hover:underline">Dashboard</Link>
        <Link to="/goals" className="hover:underline">Goals</Link>
        <Link to="/expenses" className="hover:underline">Expenses</Link>
        <Link to="/reports" className="hover:underline">Reports</Link>
        <Link to="/settings" className="hover:underline">Settings</Link>
      </nav>
    </header>
  );
}
