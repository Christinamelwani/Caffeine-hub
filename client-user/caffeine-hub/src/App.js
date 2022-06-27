import "./App.css";
import Navigation from "./components/navbar";
import Menu from "./views/menu";
import Splash from "./views/splash";

import React, { useState } from "react";
function App() {
  const [showMenu, setShowMenu] = useState(false);
  const showMenuOnClick = () => setShowMenu(true);
  return (
    <div>
      <header className="sticky top-0 z-50">
        <Navigation setShowMenu={setShowMenu} />
      </header>
      <div className="relative">
        {showMenu ? <Menu /> : <Splash showMenuOnClick={showMenuOnClick} />}
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
