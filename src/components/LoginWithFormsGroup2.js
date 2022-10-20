import React from "react";

import { useEmForms, required, email, minLength, EmFormErrorMessage, EmFormGroup, EmForm } from "@enfometa/em-forms";

const Login = (props) => {
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
        validators: [
          { name: "required", func: required, message: "Password is required" },
          { name: "minLength", func: minLength, message: "Minimum Length required is 6", param: { minLength: 6 } },
        ],
      },
    ],
  });

  const submit = () => {
    if (forms.validate()) {
      const model = forms.toModel();
    }
  };

  const reset = () => {
    forms.reset();
  };

  return (
    <div>
      <EmFormGroup emForms={forms}>
        <div>
          <EmForm formName="username">
            <input type="email" placeholder="Email" />
          </EmForm>

          <EmFormErrorMessage formName="username" validatorName="required" />
          <EmFormErrorMessage formName="username" validatorName="email" />
        </div>
        <div>
          <EmForm formName="password">
            <input type="password" placeholder="password" />
          </EmForm>
          <EmFormErrorMessage formName="password" validatorName="required" />
          <EmFormErrorMessage formName="password" validatorName="minLength" />
        </div>
      </EmFormGroup>

      <input type="button" value="Login" onClick={submit} />
      <input type="button" value="Reset" onClick={reset} />
    </div>
  );
};

export default Login;
