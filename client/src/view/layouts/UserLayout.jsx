import React from "react";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <>
      <div className="d-flex">
        {/* <UserSidebar /> */}
        <div className="content p-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default UserLayout;
