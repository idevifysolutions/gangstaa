/* eslint-disable react/prop-types */
import LoginPopup from "./LoginPopup";

const ProtectedRoute = ({ children }) => {
  const isAuth = localStorage.getItem("isAuth") === "true";

  return isAuth ? children : <LoginPopup />;
};

export default ProtectedRoute;
