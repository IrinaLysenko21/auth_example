import React from "react";
import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import WithAuthRedirect from "../components/hoc/withAuthRedirect";

const LoginPage = () => (
  <main className="container">
    <h1 className="pageTitle">Log In</h1>
    <LoginForm />
    <div className="authOption">
      <span>or</span>
      <Link className="authLink" to="/signup">
        Sign Up
      </Link>
    </div>
  </main>
);

export default WithAuthRedirect(LoginPage);
