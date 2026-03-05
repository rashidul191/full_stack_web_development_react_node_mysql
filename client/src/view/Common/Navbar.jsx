import React, { use } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const userInfo = use(AuthContext);
  console.log(userInfo.auth.auth);
  const email = userInfo.auth.auth.email;

  return (
    <>
      <h1>Navbar Coming soon.... User Email: {email}</h1>
    </>
  );
};

export default Navbar;
