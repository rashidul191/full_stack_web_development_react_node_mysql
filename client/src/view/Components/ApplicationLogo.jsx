import React from "react";
import logo from "../../assets/logo.png";

const ApplicationLogo = (props) => {
  const { className = "" } = props;

  console.log(className);
  return (
    <>
      <div className="flex justify-center items-center">
        <img
          className={` p-4 ${className}`}
          src={logo}
          alt="Company Logo"
        />
      </div>
    </>
  );
};

export default ApplicationLogo;
