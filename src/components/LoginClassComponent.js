import React, { useState } from "react";
import { initEmForms, required, email, EmFormErrorMessage, EmFormGroup, EmForm } from "@enfometa/em-forms";

class LoginClassComponent extends React.Component {
  constructor(props) {
    super(props);
    //this.state = {};

    this.forms = initEmForms(
      {
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
      },
      this,
      "forms"
    );
  }

  login = () => {
    if (this.forms.validate()) {
      const model = this.forms.toModel();
      console.log(model);
    }
  };

  reset = () => {
    this.forms.reset([{ name: "rememberMe", value: true }]);
  };

  render() {
    return (
      <div className="container">
        <main>
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <h4 className="mb-3">Class component Login with FormGroup</h4>
              <div className="row g-3">
                <EmFormGroup emForms={this.forms}>
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
                  <div className="col-12">
                    <EmForm formName="rememberMe" valuePropName="checked" valueFunc={(e) => e.target.checked}>
                      <input type="checkbox" />
                    </EmForm>
                  </div>
                </EmFormGroup>

                <button className="w-100 btn btn-primary btn-lg" type="button" onClick={this.login}>
                  Login
                </button>
                <button className="w-100 btn btn-primary btn-lg" type="button" onClick={this.reset}>
                  Reset
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default LoginClassComponent;
