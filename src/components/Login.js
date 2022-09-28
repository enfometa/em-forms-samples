import React, { useState } from "react";
import { useEmForms, required, EmFormErrorMessage } from "@enfometa/em-forms";
import Test from "./Test";

const Login = (props) => {
  const [data, setData] = useState(567);
  const forms = useEmForms({
    forms: [
      {
        name: "username",
        value: "",
        validators: [{ name: "required", func: required, message: "Username is required" }],
      },
      {
        name: "password",
        value: "",
        validators: [{ name: "required", func: required, message: "Password is required" }],
      },
    ],
  });

  const login = () => {
    forms.validate();
  };

  const reset = () => {
    forms.reset([
      { name: "username", value: "" },
      { name: "password", value: "" },
    ]);
  };

  const updateFormValue = (formName, value) => {
    forms.setFormValue(formName, value);
  };

  return (
    <div className="container">
      <main>
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <h4 className="mb-3">Login</h4>

            <div className="row g-3">
              <div className="col-12">
                <Test>
                  <h3>This is h3</h3>
                  <h3>This is h3</h3>
                </Test>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="username"
                  onChange={(e) => updateFormValue("username", e.target.value)}
                  value={forms.getFormValue("username")}
                />
                <div className="error-message">
                  <EmFormErrorMessage
                    emForms={forms}
                    formName="username"
                    validatorName="required"
                    onChange={(e) => updateFormValue("username", e.target.value)}
                  />
                </div>
              </div>
              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  id="email"
                  placeholder="password"
                  onChange={(e) => updateFormValue("password", e.target.value)}
                  value={forms.getFormValue("password")}
                />
                <div className="error-message">
                  <EmFormErrorMessage emForms={forms} formName="password" validatorName="required" />
                </div>
              </div>
              <button className="w-100 btn btn-primary btn-lg" type="button" onClick={login}>
                Login
              </button>
              <button className="w-100 btn btn-primary btn-lg" type="button" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
