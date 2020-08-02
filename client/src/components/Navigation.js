import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import UserProfile from "./UserProfile";
import * as sessionSelectors from "../redux/session/sessionSelectors";
import * as sessionOperations from "../redux/session/sessionOperations";

const activeLink = {
  color: "#ebbc56",
};

const Navigation = () => {
  const authenticated = useSelector(sessionSelectors.isAuthenticated);
  const user = useSelector(sessionSelectors.getUser);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(sessionOperations.logOut());
  };

  return (
    <div className="header">
      <nav className="nav">
        <ul className="navList">
          <li className="navListItem">
            <NavLink className="navLink" activeStyle={activeLink} exact to="/">
              Home
            </NavLink>
          </li>
          <li className="navListItem">
            <NavLink className="navLink" activeStyle={activeLink} to="/about">
              About
            </NavLink>
          </li>
          {authenticated && (
            <>
              <li className="navListItem">
                <NavLink
                  className="navLink"
                  activeStyle={activeLink}
                  to="/account"
                >
                  Account
                </NavLink>
              </li>
            </>
          )}
          {!authenticated && (
            <>
              <li className="navListItem">
                <NavLink
                  className="navLink"
                  activeStyle={activeLink}
                  to="/login"
                >
                  Login
                </NavLink>
              </li>
              <li className="navListItem">
                <NavLink
                  className="navLink"
                  activeStyle={activeLink}
                  to="/signup"
                >
                  Signup
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      {authenticated && <UserProfile user={user} handleLogout={handleLogout} />}
    </div>
  );
};

export default Navigation;
