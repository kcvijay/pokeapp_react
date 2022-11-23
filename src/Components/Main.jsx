import React from "react";
import { Outlet } from "react-router-dom";
import "./Main.css";

const Main = () => {
  return (
    <main>
      <Outlet></Outlet>
    </main>
  );
};

export default Main;
