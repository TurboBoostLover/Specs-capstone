import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/Signup.css"

const Signup = () => {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      username: username,
      password: password,
    };
    axios.post("http://localhost:6900/signup", body).then(() => {
      setUsername = "";
      setPassword = "";
      alert(`Added!`);
    }).catch((err) => alert(err.response.data + ' Username taken'));
  };
  const setStateUsername = (e) => {
    setUsername(e.target.value);
  };
  const setStatePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="app2">
    <div className="main-div6">
      <div className="box">
        <h2>Sign up</h2>
        <form className="signup" onSubmit={submitHandler}>
          <input
            onChange={setStateUsername}
            placeholder="Username?"
            type="text"
            className="h1234"
          />
          <input
            onChange={setStatePassword}
            placeholder="Password?"
            type="password"
            className="h1234"
          />
          <button value="Submit" type="submit" className="h12345">
            Submit
          </button>
        </form>
      </div>
      <Link to="/" className="h4">
        {" "}
        <h4>Go to Login Page</h4>
      </Link>
    </div>
    </div>
  );
};
export default Signup;
