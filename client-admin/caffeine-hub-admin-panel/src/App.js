import "./App.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./views/dashboard";
import Add from "./views/addDrink";
import Update from "./views/updateDrink";
import Login from "./views/login";
import Categories from "./views/categories";
import ProtectedRoute from "./views/protected";

import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const Navigation = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App flex flex-row">
      <Sidebar />
      <div>
        <Routes>
          <Route
            path="/login"
            element={
              <Login Navigation={Navigation} setIsLoggedIn={setIsLoggedIn} />
            }
          ></Route>

          <Route
            path="/"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Dashboard Navigation={Navigation} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Add Navigation={Navigation} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/edit/:id"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Update Navigation={Navigation} />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/categories"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Categories Navigation={Navigation} />{" "}
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/categories/add"
            element={
              <ProtectedRoute isLoggedIn={isLoggedIn}>
                <Add Navigation={Navigation} />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
