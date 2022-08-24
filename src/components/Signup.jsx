import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    <div className="main-div">
      <div className="box">
        <h2>Sign up</h2>
        <form className="signup" onSubmit={submitHandler}>
          <input
            onChange={setStateUsername}
            placeholder="Username?"
            type="text"
          />
          <input
            onChange={setStatePassword}
            placeholder="Password?"
            type="password"
          />
          <button value="Submit" type="submit">
            Submit
          </button>
        </form>
      </div>
      <Link to="/">
        {" "}
        <h3>Go to Login Page</h3>
      </Link>
    </div>
  );
};
export default Signup;
