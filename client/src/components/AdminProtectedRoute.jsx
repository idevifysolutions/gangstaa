/* eslint-disable react/prop-types */

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getAllUser = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/user/me", {
        headers: {
          token,
        },
      });
      setIsAdmin(response.data.user.role);
    } catch (error) {
      setIsAdmin("user"); // If there's an error, assume the user is not an admin
    }
  };

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuth") === "true";
    setIsAuth(authStatus);

    if (!authStatus) {
      navigate("/"); // Redirect to home if not authenticated
    } else {
      getAllUser();
    }
  }, [navigate]);

  useEffect(() => {
    if (isAdmin !== null && isAdmin !== "admin") {
      navigate("/"); // Redirect to home if not an admin
    }
  }, [isAdmin, navigate]);

  return isAuth && isAdmin === "admin" ? children : null;
};

export default AdminProtectedRoute;
