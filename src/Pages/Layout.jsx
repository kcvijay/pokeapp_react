import React from "react";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Footer from "../Components/Footer";

export default function Layout() {
  return (
    <div className="page-wrapper">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
