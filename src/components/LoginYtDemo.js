import React from "react";
import "../ytlogin.css";

function LoginYtDemo(props) {
  return (
    <form class="login">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  );
}

export default LoginYtDemo;
