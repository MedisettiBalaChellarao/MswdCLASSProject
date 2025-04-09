import React, { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const JWTDashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("User in Context:", user); // Debugging line
  }, [user]);

  const handleLogout = () => {
    logout();
    navigate("/jwtlogin");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-gray-700">Welcome to Dashboard</h1>
      {user ? (
        <p className="mt-4 text-lg text-gray-600">
          Logged in as <span className="font-semibold">{user.name}</span>
        </p>
      ) : (
        <p className="text-red-500">Welcome admin</p>
      )}
      <button
        onClick={handleLogout}
        className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default JWTDashboard;
