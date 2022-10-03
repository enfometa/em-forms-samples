import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="*" element={<BaseLayout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
