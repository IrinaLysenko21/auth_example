import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import * as sessionSelectors from "../redux/session/sessionSelectors";

const ProtectedRoute = ({
  redirectTo = "/",
  component: Component,
  ...rest
}) => {
  const authenticated = useSelector(sessionSelectors.isAuthenticated);

  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
