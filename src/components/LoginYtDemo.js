import React from "react";
import "../ytlogin.css";

function LoginYtDemo(props) {
  return (
    <div className="login">
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />

      <div className="checkbox">
        <input id="rememberMe" type="checkbox" />
        <label htmlFor="rememberMe" className="label">
          Remember me
        </label>
      </div>
      <button>Login</button>
    </div>
  );
}

export default LoginYtDemo;
