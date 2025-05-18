import React from "react";
import { Outlet , useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function Layout() {
  const navigation = useNavigation()
  
  return (
    <div className="flex min-h-screen">
 
      <MainNavigation />

      <main className="flex-1 p-6 bg-gray-100">
      {navigation.state === 'loading' && <p>loading....</p>}
        <Outlet />
      </main>
    </div>
  );
}

