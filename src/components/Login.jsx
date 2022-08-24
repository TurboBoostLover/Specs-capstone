import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "../styles/Login.css";

function Login() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  let database = [];
  axios.get("http://localhost:6900/welcome").then((res) => {
    database = res.data[0];
    //window session storage for user_id

    return database;
  });
  const errors = {
    uname: "invalid username",
    pass: "invalid password",
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        let guy = userData.user_id;
        window.sessionStorage.setItem("user", guy);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? (
          <div>
            User is successfully logged in{" "}
            <Link to="/home">Click to Continue</Link>
          </div>
        ) : (
          renderForm
        )}
        {!isSubmitted ? (
          <div className="sign_up">
            <Link to="/signup">Sign up</Link>{" "}
          </div>
        ) : (
          !renderForm
        )}
      </div>
    </div>
  );
}

export default Login;
