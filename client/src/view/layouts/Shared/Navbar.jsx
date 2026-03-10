import React, { useState } from "react";

import defaultAvatar from "../../../../src/assets/avatar.png";
import { getRoleName } from "../../../utility/roles";

export default function Navbar(props) {
  const { sidebarOpen, setSidebarOpen } = props;
  const { auth, logoutUser } = props.userInfo;

  const user = auth?.auth;

  const [openDropdown, setOpenDropdown] = useState(false);
  console.log(openDropdown); // after click output: show true / false

  return (
    <nav className="navbar">
      {/* left side */}
      <div className="navbar-left">
        <button
          className="sidebar-toggle"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          ☰
        </button>
      </div>

      {/* right side */}
      <div className="navbar-right">
        <div className="avatar-dropdown">
          <div
            className="avatar-trigger"
            onClick={(e) => {
              e.stopPropagation();
              setOpenDropdown(!openDropdown);
            }}
          >
            <img src={defaultAvatar} alt="avatar" />

            <div className="avatar-info">
              <span className="user-name">{user?.name || "Admin"}</span>
              <span className="user-role">{getRoleName(user?.role)}</span>
            </div>
          </div>

          {openDropdown && (
            <ul className="dropdown-menu">
              <li>Profile</li>
              <li>Settings</li>
              <li className="divider"></li>
              <li onClick={logoutUser}>Logout</li>
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
}
