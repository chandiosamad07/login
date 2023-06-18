import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <h1>Login</h1>
      <form action="post">
        <input
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter your email"
          name=""
          id=""
        ></input>
        <input
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your Password"
          name=""
          id=""
        ></input>
        <input type=""></input>
      </form>
      <br />
      <p>OR</p>
      <Link to="/singup">Singup</Link>
    </div>
  );
}

export default Login;
