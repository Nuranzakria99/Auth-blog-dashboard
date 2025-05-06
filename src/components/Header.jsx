import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LogoutButton from "./logout";

export default function Header() {
  const { user } = useSelector((state) => state.auth);

  return (
    <header className="flex items-center justify-between px-4 py-4">
      {user ? (
        <h1 className="text-2xl font-bold">{user.email}</h1>
      ) : (
        <h1 className="text-2xl font-bold">Welcome</h1>
      )}

   

      <LogoutButton/>
    </header>
  );
}
