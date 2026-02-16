import React from "react";
import Navbar from "../Common/Navbar";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";

const FrontLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default FrontLayout;
