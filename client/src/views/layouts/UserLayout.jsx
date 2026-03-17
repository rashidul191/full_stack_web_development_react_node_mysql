import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const UserLayout = () => {
  const { auth } = useContext(AuthContext);
  return (
    <>
      <div className="d-flex">
        {/* <UserSidebar /> */}
        <div className="content p-3">
          <span>Name: {auth?.auth?.name}</span>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
