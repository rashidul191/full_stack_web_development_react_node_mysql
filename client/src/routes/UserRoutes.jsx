import React from "react";
import { Route } from "react-router-dom";
import UserLayout from "../view/layouts/UserLayout";

const UserRoutes = () => {
  return (
    <Route path="/user" element={<UserLayout />}>
      <Route path="dashboard" element={<h1>User Dashboard</h1>} />
      <Route path="profile" element={<h1>User Profile</h1>} />
    </Route>
  );
};

export default UserRoutes;
