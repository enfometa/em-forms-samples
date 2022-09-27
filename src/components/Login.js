import React from "react";
// import { useEmForms } from "@enfometa/emforms";
import Test from "./Test";

const Login = (props) => {
  const var1 = true;
  const var2 = true;
  // const forms = useEmForms({
  //   forms: [
  //     {
  //       name: "username",
  //       value: "hali",
  //       validators: [{ name: "required", func: required, message: "Username is required" }],
  //     },
  //     {
  //       name: "password",
  //       value: "a1!",
  //       validators: [{ name: "required", func: required, message: "Password is required" }],
  //     },
  //   ],
  // });
  return (
    <div className="container">
      <main>
        <div className="row g-5">
          <div className="col-md-6 col-lg-4">
            <h4 className="mb-3">Login</h4>
            <form className="needs-validation" noValidate>
              <div className="row g-3">
                <div className="col-12">
                  <Test>
                    <h3>This is h3</h3>
                    <h3>This is h3</h3>
                  </Test>
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="email" />
                </div>
                <button className="w-100 btn btn-primary btn-lg" type="submit">
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
