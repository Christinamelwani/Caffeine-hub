import "./App.css";
import Sidebar from "./components/sidebar";
import Dashboard from "./views/dashboard";

function App() {
  return (
    <div className="App  flex flex-row">
      <Sidebar />
      <div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
