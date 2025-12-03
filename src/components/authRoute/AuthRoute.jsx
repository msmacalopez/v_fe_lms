import React from "react";
import { Navigate } from "react-router-dom";

export default function AuthRoute({ children }) {
  //user real data

  const isAuth = true;

  return <>{isAuth ? children : <Navigate to="/login" />}</>;
}
