import React from "react";
import { Link } from "react-router-dom";
import SignupForm from "../components/SignupForm";
import WithAuthRedirect from "../components/hoc/withAuthRedirect";

const SignupPage = () => (
  <main className="container">
    <h1 className="pageTitle">Sign Up</h1>
    <SignupForm />
    <div className="authOption">
      <span>or</span>
      <Link className="authLink" to="/login">
        Log In
      </Link>
    </div>
  </main>
);

export default WithAuthRedirect(SignupPage);
