import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BaseLayout from "./components/layout/BaseLayout";
import { emFormsGlobalConfig } from "@enfometa/em-forms";

emFormsGlobalConfig.registerEmFormElements([
  {
    valuePropName: "value",
    onChangePropName: "onChange",
    valueFunc: (e) => e.target.value,
    elements: [{ type: "input" }],
  },
  {
    valuePropName: "value",
    onChangePropName: "onChange",
    valueFunc: (e) => e.target.value,
    elements: [{ type: "select" }],
  },
  {
    valuePropName: "checked",
    onChangePropName: "onChange",
    valueFunc: (e) => e.target.checked,
    elements: [
      {
        type: "input",
        props: [{ name: "type", value: "checkbox" }],
      },
    ],
  },
  {
    valuePropName: "selectedValue",
    onChangePropName: "onChange",
    valueFunc: (e) => e.target.value,
    elements: [{ type: "RadioGroupComponent" }],
  },
]);

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
