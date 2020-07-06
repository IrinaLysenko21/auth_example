import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import * as sessionOperations from "../redux/session/sessionOperations";

const notyf = new Notyf();

const LoginForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = ({ target }) => {
    target.name === "name"
      ? setName(target.value)
      : target.name === "email"
      ? setEmail(target.value)
      : setPassword(target.value);
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setPassword("");
  };

  const handleFormSubmit = (evt) => {
    evt.preventDefault();

    const user = { name, email, password };

    if (
      user.name.trim() === "" ||
      user.email.trim() === "" ||
      user.password.trim() === ""
    )
      return notyf.error("Fill all form fields");

    dispatch(sessionOperations.signup(user));
    resetForm();
  };

  return (
    <form className="loginForm" onSubmit={handleFormSubmit}>
      <label className="inputLabel" htmlFor="loginNameId">
        <span className="inputLabelText">Name</span>
        <input
          className="input"
          id="loginNameId"
          name="name"
          type="text"
          onChange={handleInputChange}
        />
      </label>
      <label className="inputLabel" htmlFor="loginEmailId">
        <span className="inputLabelText">Email</span>
        <input
          className="input"
          id="loginEmailId"
          name="email"
          type="email"
          onChange={handleInputChange}
        />
      </label>
      <label className="inputLabel" htmlFor="loginPasswordId">
        <span className="inputLabelText">Password</span>
        <input
          className="input"
          id="loginPasswordId"
          name="password"
          type="password"
          onChange={handleInputChange}
        />
      </label>
      <button className="submitBtn" type="submit">
        Sign Up
      </button>
    </form>
  );
};

export default LoginForm;
