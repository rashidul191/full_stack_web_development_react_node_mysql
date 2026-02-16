import { Routes, Route } from "react-router-dom";
import "./App.css";

import FrontLayout from "./view/layouts/FrontLayout";
import UserLayout from "./view/layouts/UserLayout";
import AdminLayout from "./view/layouts/AdminLayout";
import Home from "./view/FrontEnd/Pages/Home";
import Blogs from "./view/FrontEnd/Pages/Blogs";
import NotFound from "./view/FrontEnd/Pages/NotFound";
import BlogDetails from "./view/FrontEnd/Pages/BlogDetails";

function App() {
  return (
    <Routes>
      {/* FrontEnd Layout */}
      <Route element={<FrontLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
      </Route>

      {/* User Panel */}
      <Route path="/user" element={<UserLayout />}>
        <Route path="dashboard" element={<h1>User Dashboard</h1>} />
        <Route path="profile" element={<h1>User Profile</h1>} />
      </Route>

      {/* Admin Panel */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route path="dashboard" element={<h1>Admin Dashboard</h1>} />
        <Route path="users" element={<h1>Manage Users</h1>} />
      </Route>

      {/* Not Found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
