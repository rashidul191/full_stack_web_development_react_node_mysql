import React from "react";
import AdminLayout from "../view/layouts/AdminLayout";
import { Route } from "react-router-dom";

const AdminRoutes = () => {
  return (
    <Route path="/admin" element={<AdminLayout />}>
      <Route path="dashboard" element={<h1>Admin Dashboard</h1>} />
      <Route path="users" element={<h1>Manage Users</h1>} />
    </Route>
  );
};

export default AdminRoutes;
