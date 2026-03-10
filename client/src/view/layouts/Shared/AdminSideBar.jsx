import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdDashboard, MdSettings } from "react-icons/md";

const AdminSidebar = ({ sidebarOpen }) => {
  const location = useLocation();

  const sidebarMenus = [
    {
      title: "Dashboard",
      path: "dashboard",
      icon: MdDashboard,
    },
    {
      title: "Blog",
      basePath: "/admin",
      icon: MdSettings,
      children: [
        { title: "Blog List", path: "/blog" },
        { title: "Categories", path: "/category" },
      ],
    },
    {
      title: "Settings",
      basePath: "/admin/setting",
      icon: MdSettings,
      children: [
        { title: "General Setting", path: "/general" },
        { title: "Social Links", path: "/social-links" },
        { title: "Profile Setting", path: "/profile" },
      ],
    },
  ];

  return (
    <div
      className="sidebar"
      style={{
        width: sidebarOpen ? "250px" : "0px",
      }}
    >
      <div className="sidebar-header">Admin Panel</div>

      <ul className="sidebar-menu">
        {sidebarMenus.map((menu, index) => {
          const Icon = menu.icon;

          const isActive = menu.basePath
            ? location.pathname.startsWith(menu.basePath)
            : false;

          if (!menu.children) {
            return (
              <li key={index}>
                <NavLink to={menu.path} className="sidebar-link">
                  {Icon && <Icon />}
                  <span>{menu.title}</span>
                </NavLink>
              </li>
            );
          }

          return (
            <li key={index}>
              <details open={isActive}>
                <summary className="sidebar-link">
                  {Icon && <Icon />}
                  <span>{menu.title}</span>
                </summary>

                <ul className="sidebar-submenu">
                  {menu.children.map((child, i) => (
                    <li key={i}>
                      <NavLink
                        to={menu.basePath + child.path}
                        className="sidebar-sublink"
                      >
                        {child.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AdminSidebar;
