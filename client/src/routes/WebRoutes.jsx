import React from "react";
import { Route } from "react-router-dom";
import FrontLayout from "../view/layouts/FrontLayout";
import Home from "../view/FrontEnd/Pages/Home";
import Blogs from "../view/FrontEnd/Pages/Blogs";

const WebRoutes = () => {
  return (
    <Route path="/" element={<FrontLayout />}>
      <Route index element={<Home />} />
      <Route path="blog" element={<Blogs />} />
    </Route>
  );
};

export default WebRoutes;
