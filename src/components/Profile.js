import React, { useState } from "react";
import { useEmForms, required, email, EmFormErrorMessage, EmFormGroup, EmFormControl, range, minLength } from "@enfometa/em-forms";
import RadioGroup from "./base/RadioGroup";

const Profile = (props) => {
  const forms = useEmForms({
    forms: [
      {
        name: "name",
        value: "",
        validators: [
          { name: "required", func: required, message: "Name is required" },
          { name: "minLength", func: minLength, message: "min Length required is 3", param: { minLength: 6 } },
        ],
      },
      {
        name: "email",
        value: "",
        validators: [
          { name: "required", func: required, message: "Email is required" },
          { name: "email", func: email, message: "Invalid email" },
        ],
      },
      {
        name: "age",
        value: 10,
        validators: [
          { name: "required", func: required, message: "Age is required" },
          { name: "range", func: range, message: "Age must be between 18 and 50", param: { min: 18, max: 50 } },
        ],
      },
      {
        name: "gender",
        value: "M",
        validators: [{ name: "required", func: required, message: "Gender is required" }],
      },
      {
        name: "accountType",
        value: null,
        validators: [{ name: "required", func: required, message: "Account type is required" }],
      },
    ],
  });

  const accountTypes = [
    { text: "Admin", value: "admin" },
    { text: "User", value: "user" },
    { text: "Visitor", value: "visitor" },
  ];

  //fake http call
  const getProfile = () => {
    return { name: "Enfometa", email: "enfometa@gmial.com", age: 30, gender: "M", accountType: "admin" };
  };

  //fake http call
  const updateProfile = (model) => {
    console.log("Profile updated", model);
  };

  //get values from server and set em-forms object
  useState(() => {
    const profile = getProfile();
    forms.setValuesFromModel(profile);
  }, []);

  const update = () => {
    if (forms.validate()) {
      const model = forms.toModel();
      updateProfile(model);
    }
  };

  const reset = () => {
    forms.reset();
  };

  return (
    <div className="container">
      <main>
        <div className="row g-5">
          <ul className="error-message">
            {forms.getErrors().map((form, indx) => (
              <li key={indx}>{form.message}</li>
            ))}
          </ul>
        </div>
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <h4 className="mb-3">Profile component</h4>
            <div className="row g-3">
              <EmFormGroup emForms={forms}>
                <div className="col-12">
                  <EmFormControl formName="name">
                    <input type="text" className="form-control" />
                  </EmFormControl>

                  <div className="error-message">
                    <EmFormErrorMessage formName="name" validatorName="required" />
                    <EmFormErrorMessage formName="name" validatorName="minLength" />
                  </div>
                </div>
                <div className="col-12">
                  <EmFormControl formName="email">
                    <input type="text" className="form-control" />
                  </EmFormControl>

                  <div className="error-message">
                    <EmFormErrorMessage formName="email" validatorName="required" />
                    <EmFormErrorMessage formName="email" validatorName="email" />
                  </div>
                </div>
                <div className="col-12">
                  <EmFormControl formName="age">
                    <input type="number" className="form-control" />
                  </EmFormControl>

                  <div className="error-message">
                    <EmFormErrorMessage formName="age" validatorName="required" />
                    <EmFormErrorMessage formName="age" validatorName="range" />
                  </div>
                </div>
                <div className="col-12">
                  <EmFormControl formName="gender">
                    <select>
                      <option value="">Please select</option>
                      <option value="M">Male</option>
                      <option value="F">Female</option>
                    </select>
                  </EmFormControl>

                  <div className="error-message">
                    <EmFormErrorMessage formName="gender" validatorName="required" />
                  </div>
                </div>

                <div className="col-12">
                  <EmFormControl formName="accountType">
                    <RadioGroup name={"accountType"} dataSource={accountTypes} />
                  </EmFormControl>

                  <div className="error-message">
                    <EmFormErrorMessage formName="accountType" validatorName="required" />
                  </div>
                </div>
              </EmFormGroup>

              <button className="w-100 btn btn-primary btn-lg" type="button" onClick={update}>
                Update
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

export default Profile;
