import React, { PropsWithChildren } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../store";

export default function GuardingRoutes({ children }: PropsWithChildren<{}>) {
  const { user } = useSelector((state: RootState) => state.auth);

  if (!user) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
}
