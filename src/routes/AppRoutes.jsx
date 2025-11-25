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
import { UserLayout } from "../components/layouts/UserLayout.jsx";

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
      {/* ROOT route will be always /user/... */}
      <Route path="/user" element={<UserLayout />}>
        <Route index element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}
