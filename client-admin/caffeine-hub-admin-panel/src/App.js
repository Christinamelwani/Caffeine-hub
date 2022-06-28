import "./App.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./views/dashboard";
import { useState, useEffect } from "react";

function App() {
  const [displayAddForm, setDisplayAddForm] = useState(false);
  return (
    <div className="App  flex flex-row">
      <Sidebar setDisplayAddForm={setDisplayAddForm} />
      <div>
        <Dashboard
          displayAddForm={displayAddForm}
          setDisplayAddForm={setDisplayAddForm}
        />
      </div>
    </div>
  );
}

export default App;
