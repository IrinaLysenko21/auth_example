import React from "react";

const UserProfile = ({ user, handleLogout }) => (
  <div>
    <span className="account">{user.name}</span>
    <button className="logoutBtn" type="button" onClick={handleLogout}>
      Log Out
    </button>
  </div>
);

export default UserProfile;
