import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
function Singup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.prvenDefault();

    try {
      await axios.post("http://localhost:8000/", {
        email,
        password,
      });
    } catch {
      console.log(e);
    }
  }

  return (
    <div className="login">
      <h1>Singup</h1>
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
        <input type="submit" onClick={submit}></input>
      </form>
      <br />
      <p>OR</p>
      <Link to="/">Login</Link>
    </div>
  );
}

export default Singup;
