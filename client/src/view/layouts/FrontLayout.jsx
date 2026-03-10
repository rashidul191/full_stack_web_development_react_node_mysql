
import React from "react";
import '../FrontEnd/assets/css/flaticon.css';
import '../FrontEnd/assets/css/all.min.css';
import '../FrontEnd/assets/css/themify-icons.css';
import '../FrontEnd/assets/css/animate.min.css';
import '../FrontEnd/assets/css/style.css';
import '../FrontEnd/assets/css/swiper-bundle.min.css';
import '../FrontEnd/assets/css/glightbox.min.css';
import '../FrontEnd/assets/css/aos.css';
  

import { Outlet } from "react-router-dom";
import Navbar from "../FrontEnd/Common/Navbar";
import Footer from "../FrontEnd/Common/Footer";

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
