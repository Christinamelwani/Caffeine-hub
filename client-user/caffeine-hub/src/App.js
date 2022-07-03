import "./App.css";
import Navigation from "./components/navbar";
import Menu from "./views/menu";
import Splash from "./views/splash";
import Detail from "./views/detail";

import { Route, Routes } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import React from "react";

function App() {
  let navigate = useNavigate();

  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navigation />
      </header>
      <div className="relative">
        <Routes>
          <Route path="/" element={<Splash navigate={navigate} />}></Route>
          <Route path="/drinks" element={<Menu navigate={navigate} />}></Route>
          <Route path="/drinks/:id" element={<Detail />}></Route>
        </Routes>
      </div>
      <footer className="sticky bottom-0 z-50"></footer>
    </div>
  );
}

export default App;
