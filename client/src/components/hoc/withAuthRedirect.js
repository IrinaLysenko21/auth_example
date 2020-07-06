import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import * as sessionSelectors from "../../redux/session/sessionSelectors";

const withAuthRedirect = (BaseComponent) => {
  const WithAuth = (props) => {
    const history = useHistory();
    const location = useLocation();
    const authenticated = useSelector(sessionSelectors.isAuthenticated);

    useEffect(() => {
      if (!authenticated) return;
      history.replace("/");
    }, []);

    useEffect(() => {
      if (!authenticated) return;

      if (location.state && location.state.from) {
        return history.replace(location.state.from);
      }

      history.replace("/");
    }, [authenticated, history, location, props]);

    return <BaseComponent {...props} />;
  };

  return WithAuth;
};

export default withAuthRedirect;
