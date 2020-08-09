import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import UserProfile from "./UserProfile";
import * as sessionSelectors from "../redux/session/sessionSelectors";
import * as sessionOperations from "../redux/session/sessionOperations";
import LanguageSwitcher from "./LanguageSwitcher";

const activeLink = {
  color: "#ebbc56",
};

const Navigation = () => {
  const authenticated = useSelector(sessionSelectors.isAuthenticated);
  const user = useSelector(sessionSelectors.getUser);

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleLogout = () => {
    dispatch(sessionOperations.logOut());
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="navList">
          <li className="navListItem">
            <NavLink className="navLink" activeStyle={activeLink} exact to="/">
              {t("modals.nav.home")}
            </NavLink>
          </li>
          <li className="navListItem">
            <NavLink className="navLink" activeStyle={activeLink} to="/about">
              {t("modals.nav.about")}
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
                  {t("modals.nav.account")}
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
                  {t("modals.auth.login")}
                </NavLink>
              </li>
              <li className="navListItem">
                <NavLink
                  className="navLink"
                  activeStyle={activeLink}
                  to="/signup"
                >
                  {t("modals.auth.signup")}
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>
      <div className="profileWrap">
        {authenticated && (
          <UserProfile user={user} handleLogout={handleLogout} />
        )}
        <LanguageSwitcher />
      </div>
    </header>
  );
};

export default Navigation;
