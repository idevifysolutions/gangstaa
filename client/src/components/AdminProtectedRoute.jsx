/* eslint-disable react/prop-types */

import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
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
      setIsAdmin("user");
    }
  };

  useEffect(() => {
    getAllUser();
  }, []);

  useEffect(() => {
    if (isAdmin !== null && isAdmin !== "admin") {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  return isAdmin === "admin" ? children : null;
};

export default AdminProtectedRoute;
