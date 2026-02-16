import React from "react";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <div className="d-flex">
        {/* <AdminSidebar /> */}
        <div className="content p-3">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
