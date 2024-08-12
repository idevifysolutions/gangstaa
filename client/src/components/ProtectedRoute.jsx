import React, { useState } from "react";
import { useSelector } from "react-redux";
import LoginPopup from "./LoginPopup";

const ProtectedRoute = ({ children }) => {
  const loggedIn = useSelector((state) => state.isLoggedIn);
  const [showPopup, setShowPopup] = useState(false);

  if (!loggedIn && !showPopup) {
    setShowPopup(true);
  }

  return <>{loggedIn ? children : showPopup && <LoginPopup />}</>;
};

export default ProtectedRoute;
