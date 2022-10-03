import React, { useState } from "react";
import { useEmForms, required, email, EmFormErrorMessage, EmFormGroup, EmForm } from "@enfometa/em-forms";

const LoginWithFormsGroup = (props) => {
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

  return (
    <div className="container">
      <main>
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <h4 className="mb-3">Functional component Login with FormGroup</h4>
            <div className="row g-3">
              <EmFormGroup emForms={forms}>
                <div className="col-12">
                  <EmForm formName="username">
                    <input type="email" className="form-control" placeholder="Email" />
                  </EmForm>

                  <div className="error-message">
                    <EmFormErrorMessage formName="username" validatorName="required" />
                    <EmFormErrorMessage formName="username" validatorName="email" />
                  </div>
                </div>
                <div className="col-12">
                  <EmForm formName="password">
                    <input type="password" className="form-control" placeholder="password" />
                  </EmForm>

                  <div className="error-message">
                    <EmFormErrorMessage formName="password" validatorName="required" />
                  </div>
                </div>
              </EmFormGroup>

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

export default LoginWithFormsGroup;
