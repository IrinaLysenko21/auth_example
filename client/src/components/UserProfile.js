import React from "react";
import { useTranslation } from "react-i18next";

const UserProfile = ({ user, handleLogout }) => {
  const { t } = useTranslation();

  return (
    <div className="userProfile">
      <span className="account">{user.name}</span>
      <button className="logoutBtn" type="button" onClick={handleLogout}>
        {t("modals.auth.logout")}
      </button>
    </div>
  );
};

export default UserProfile;
