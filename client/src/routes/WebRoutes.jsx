import React from "react";
import FrontLayout from "../view/layouts/FrontLayout";
import Home from "../view/FrontEnd/pages/Home";
import Blogs from "../view/FrontEnd/pages/Blogs";
import { Route } from "react-router-dom";

const WebRoutes = () => {
  return (
    <>
      <Route element={<FrontLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blogs />} />
      </Route>
    </>
  );
};

export default WebRoutes;
