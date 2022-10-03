import React from "react";
import Header from "./Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginWithFormsGroup from "../LoginWithFormsGroup";
import LoginWithoutFormsGroup from "../LoginWithoutFormsGroup";
import LoginClassComponent from "../LoginClassComponent";

function BaseLayout(props) {
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "70px" }}>
        <Routes>
          <Route exact path="/" element={<LoginWithFormsGroup />} />
          <Route exact path="/loginwithformsgroup" element={<LoginWithoutFormsGroup />} />
          <Route exact path="/loginclasscomponent" element={<LoginClassComponent />} />
        </Routes>
      </div>
    </React.Fragment>
  );
}

export default BaseLayout;
