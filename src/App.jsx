// eslint-disable-next-line no-unused-vars
import { useState } from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import ThemeSwitcher from "./components/ThemeSwitcher/ThemeSwitcher.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ThemeSwitcher />
    </>
  );
}

export default App;
