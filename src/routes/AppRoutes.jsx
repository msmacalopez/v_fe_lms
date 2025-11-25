import React from "react";

//lms implementation
import { Routes, Route } from "react-router-dom";

// import HomePage from "../pages/home/HomePage.jsx";
// Import pages from index.js
import {
  HomePage,
  DashboardPage,
  SignUpPage,
  SignInPage,
  ForgetPasswordPage,
} from "../pages/index.js";
import DefaultOutletLayout from "../components/layouts/DefaultLayout.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      {/* public pages  */}
      <Route path="/" element={<DefaultOutletLayout />}>
        <Route index element={<HomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="login" element={<SignInPage />} />
        <Route path="forget-pass" element={<ForgetPasswordPage />} />
      </Route>

      {/* private pages  */}
      <Route path="/user" element={<DashboardPage />} />
    </Routes>
  );
}
