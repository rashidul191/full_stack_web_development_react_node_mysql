import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const userInfo = useContext(AuthContext);
  // const email = userInfo?.auth?.auth?.email;
  const { auth, logoutUser } = userInfo;

  console.log(auth);

  const menuLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>

      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2 bg-base-100 w-40 z-1">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li>

      <li>
        <Link to="/about">About</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {menuLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuLinks}</ul>
        </div>
        {auth ? (
          <div className="navbar-end">
            <button
              onClick={() => logoutUser()}
              className="btn bg-red-500 text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar-end">
            <Link to="/login" className="btn bg-green-500 text-white">
              Login
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
