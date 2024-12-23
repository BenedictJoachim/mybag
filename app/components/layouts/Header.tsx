import { useMatches } from "@remix-run/react";

export default function Header() {
  const matches = useMatches();
  const currentRoute = matches[matches.length - 1]?.handle?.routeName || "Home";

  return (
    <header className="bg-white shadow-md flex justify-between items-center px-6 py-4 rounded-md">
      {/* Route Name */}
      <h1 className="text-xl font-semibold text-gray-800">{currentRoute}</h1>

      {/* User Info */}
      <div className="flex items-center gap-4">
        <span className="text-gray-600">Ngosha Madereke</span>
        <img
          src="https://via.placeholder.com/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}
