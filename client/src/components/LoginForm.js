import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import RenderInput from "./RenderInput";
import { required, maxLength, minLength, email } from "../services/validation";
import * as sessionOperations from "../redux/session/sessionOperations";

const LoginForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const onFormSubmit = ({ email, password }) => {
    dispatch(sessionOperations.login({ email, password }));
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit(onFormSubmit)}>
      <label className="inputLabel" htmlFor="loginEmailId">
        <span className="inputLabelText">Email</span>
        <Field
          // component="input" // if we're not using our own component
          component={RenderInput}
          id="loginEmailId"
          name="email"
          type="email"
          placeholder="Enter email"
          validate={[required, email]}
        />
      </label>
      <label className="inputLabel" htmlFor="loginPasswordId">
        <span className="inputLabelText">Password</span>
        <Field
          // component="input" // if we're not using our own component
          component={RenderInput}
          id="loginPasswordId"
          name="password"
          type="password"
          placeholder="Enter password"
          validate={[required, maxLength, minLength]}
        />
      </label>
      <button className="submitBtn" type="submit">
        Log In
      </button>
    </form>
  );
};

export default reduxForm({
  form: "login",
})(LoginForm);
