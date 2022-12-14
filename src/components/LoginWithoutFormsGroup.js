import React from "react";
import { useEmForms, required, email, EmFormErrorMessage } from "@enfometa/em-forms";

const LoginWithoutFormsGroup = (props) => {
  const forms = useEmForms({
    forms: [
      {
        name: "username",
        value: "",
        validators: [
          { name: "required", func: required, message: "Username is required" },
          { name: "email", func: email, message: "Invalid email address" },
        ],
      },
      {
        name: "password",
        value: "",
        validators: [{ name: "required", func: required, message: "Password is required" }],
      },
      {
        name: "rememberMe",
        value: false,
      },
    ],
  });

  const login = () => {
    if (forms.validate()) {
      const model = forms.toModel();
      //do something with the model
      console.log(model);
    }
  };

  const reset = () => {
    forms.reset();
    // forms.reset([
    //   { name: "username", value: "" },
    //   { name: "password", value: "" },
    //   { name: "rememberMe", value: false },
    // ]);
  };

  const updateFormValue = (formName, value) => {
    forms.setFormValue(formName, value);
  };

  const setFormTouch = (formName) => {
    forms.setFormTouch(formName, true);
  };

  return (
    <div className="container">
      <main>
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <h4 className="mb-3">Functional component Login without FormGroup</h4>
            <div className="row g-3">
              <div className="col-12">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  onChange={(e) => updateFormValue("username", e.target.value)}
                  value={forms.getFormValue("username")}
                  onBlur={(e) => setFormTouch("username")}
                />
                <div className="error-message">
                  <EmFormErrorMessage emForms={forms} formName="username" validatorName="required" />
                  <EmFormErrorMessage emForms={forms} formName="username" validatorName="email" />
                </div>
              </div>
              <div className="col-12">
                <input
                  type="password"
                  className="form-control"
                  placeholder="password"
                  onChange={(e) => updateFormValue("password", e.target.value)}
                  value={forms.getFormValue("password")}
                  onBlur={(e) => setFormTouch("password")}
                />
                <div className="error-message">
                  <EmFormErrorMessage emForms={forms} formName="password" validatorName="required" />
                </div>
              </div>
              <div className="col-12">
                <input
                  type="checkbox"
                  onChange={(e) => updateFormValue("rememberMe", e.target.checked)}
                  checked={forms.getFormValue("rememberMe")}
                  onBlur={(e) => setFormTouch("rememberMe")}
                />
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

export default LoginWithoutFormsGroup;
