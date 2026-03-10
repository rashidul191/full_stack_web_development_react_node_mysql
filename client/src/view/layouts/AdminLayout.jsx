import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import { AuthContext } from "../../context/AuthContext";
import AdminSideBar from "./Shared/AdminSideBar";

const AdminLayout = () => {
  const userInfo = useContext(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="backend-layout">
      <AdminSideBar sidebarOpen={sidebarOpen} />

      <div className="backend-main">
        <Navbar
          userInfo={userInfo}
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        <div className="backend-body">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
