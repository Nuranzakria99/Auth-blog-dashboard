import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="flex items-center justify-between px-4 py-4">
      {user ? (
        <h1 className="text-2xl font-bold">{user.email}</h1>
      ) : (
        <h1 className="text-2xl font-bold">Welcome</h1>
      )}

      <Link
        to="/posts/new"
        className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
      >
        + New Post
      </Link>
    </header>
  );
}
