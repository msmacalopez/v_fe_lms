import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function DefaultOutletLayout() {
  return (
    <div>
      {/* navbar */}
      <Header />

      {/* main body*/}
      {/* <main className="main">{children}</main> */}
      <main className="main">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
}
