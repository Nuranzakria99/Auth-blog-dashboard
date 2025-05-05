import React from "react";
import { NavLink } from "react-router-dom";

export default function MainNavigation() {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold mb-10">My Dashboard</h1>
      <nav className="flex flex-col space-y-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `${
              isActive ? "bg-gray-700" : "bg-gray-800"
            } px-4 py-2 rounded hover:bg-gray-700 transition-colors`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            `${
              isActive ? "bg-gray-700" : "bg-gray-800"
            } px-4 py-2 rounded hover:bg-gray-700 transition-colors`
          }
          to="/posts"
        >
          Posts
        </NavLink>
      </nav>
    </div>
  );
}
