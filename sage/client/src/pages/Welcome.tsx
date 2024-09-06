// import React from "react";
// import { useNavigate } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { logOut, login } from "../api/auth.api";

// import { bgImage } from "../assets/pictures";
import { home } from "../assets/pictures";

const Welcome = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const logoutUser = () => {
    logOut();
    logout();
  };

  const loginUser = () => {
    loginWithRedirect();
  };

  return (
    <>
      <div
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center"
        style={{ backgroundImage: `url(${home})` }}
      >
        <div className="card">
          {isAuthenticated ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button
              onClick={loginUser}
              className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 mt-[60vh]"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Welcome;
