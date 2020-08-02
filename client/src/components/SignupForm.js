import React from "react";
import { useDispatch } from "react-redux";
import { Field, reduxForm } from "redux-form";
import RenderInput from "./RenderInput";
import { required, maxLength, minLength, email } from "../services/validation";
import * as sessionOperations from "../redux/session/sessionOperations";

const SignupForm = ({ handleSubmit }) => {
  const dispatch = useDispatch();

  const onFormSubmit = (user) => {
    dispatch(sessionOperations.signup(user));
  };

  return (
    <form className="loginForm" onSubmit={handleSubmit(onFormSubmit)}>
      <label className="inputLabel" htmlFor="loginNameId">
        <span className="inputLabelText">Name</span>
        <Field
          // component="input" // if we're not using our own component
          component={RenderInput}
          id="signupNameId"
          name="name"
          type="name"
          placeholder="Enter name"
          validate={[required]}
        />
      </label>
      <label className="inputLabel" htmlFor="loginEmailId">
        <span className="inputLabelText">Email</span>
        <Field
          // component="input" // if we're not using our own component
          component={RenderInput}
          id="signupEmailId"
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
        Sign Up
      </button>
    </form>
  );
};

export default reduxForm({
  form: "signup",
})(SignupForm);
