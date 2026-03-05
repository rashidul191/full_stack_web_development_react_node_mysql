import React, { useState, useEffect } from "react";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({ children }) => {
  // 1️⃣ Initialize auth from localStorage
  const [auth, setAuth] = useState(() => {
    const stored = localStorage.getItem("auth");
    return stored ? JSON.parse(stored) : null;
  });

  // 2️⃣ Whenever auth changes, save to localStorage
  useEffect(() => {
    if (auth.token) {
      localStorage.setItem("access-token", auth.token);
    } else {
      localStorage.removeItem("access-token");
    }
  }, [auth]);

  // 3️⃣ login function
  const loginUser = (data) => {
    setAuth(data); // localStorage automatically handled in useEffect
  };

  // 4️⃣ logout function
  const logoutUser = () => {
    setAuth(null);
  };

  const userInfo = {
    auth,
    loginUser,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
