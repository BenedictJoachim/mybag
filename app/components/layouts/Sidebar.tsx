import { NavLink } from "@remix-run/react";
import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    console.log("TOGGLE CLICK");
    
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", icon: "🏠", path: "/dashboard" },
    { name: "Goals", icon: "💰", path: "/goals" },
    { name: "Expenses", icon: "📈", path: "/expenses" },
    { name: "Insurance", icon: "🛡️", path: "/insurance" },
    { name: "Reports", icon: "📊", path: "/reports" },
    { name: "Entertainment", icon: "🎮", path: "/entertainment" },
  ];

  return (
    <div
      className={`h-screen bg-blue-600 text-white flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } transition-all duration-300`}
    >
      {/* Sidebar Header with Toggle */}
      <div className="p-4 flex items-center justify-between">
        {isOpen && (
          <span className="text-2xl font-bold transition-opacity">myBag</span>
        )}
        <button
          className="text-white hover:bg-blue-700 p-2 rounded-md"
          onClick={toggleSidebar}
        >
          {isOpen ? "⬅️" : "➡️"}
        </button>      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-4 p-3 rounded-lg ${
                    isActive ? "bg-blue-800" : "hover:bg-blue-700"
                  }`
                }
              >
                <span className="text-xl">{item.icon}</span>
                <span className={`${isOpen ? "block" : "hidden"}`}>
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer Links */}
      <div className="p-4 border-t border-blue-700">
        <NavLink
          to="/settings"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-700"
        >
          ⚙️ <span className={`${isOpen ? "block" : "hidden"}`}>Settings</span>
        </NavLink>
        <NavLink
          to="/logout"
          className="flex items-center gap-4 p-3 rounded-lg hover:bg-blue-700"
        >
          🚪 <span className={`${isOpen ? "block" : "hidden"}`}>Logout</span>
        </NavLink>
      </div>
    </div>
  );
}
