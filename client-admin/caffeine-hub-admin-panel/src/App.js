import "./App.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./views/dashboard";
import Add from "./views/addDrink";
import Update from "./views/updateDrink";
import { Routes, Route, useNavigate } from "react-router-dom";
function App() {
  const Navigation = useNavigate();
  return (
    <div className="App flex flex-row">
      <Sidebar />
      <div>
        <Routes>
          <Route
            path="/"
            element={<Dashboard Navigation={Navigation} />}
          ></Route>
          <Route path="/add" element={<Add Navigation={Navigation} />}></Route>
          <Route
            path="/edit/:id"
            element={<Update Navigation={Navigation} />}
          ></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
