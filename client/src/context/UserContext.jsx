/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
// import { server } from "../main";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setLoggeIn } from "../features/userAuthentication/userAuthenticationSlice";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  async function userLogin(email, password, navigate) {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/user/login`,
        {
          email,
          password,
        }
      );

      if (data.message) {
        toast.success(data.message);
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAuth", true); // Store isAuth in local storage
        setLoading(false);
        setIsAuth(true);
        dispatch(setLoggeIn(true)); // Use true directly instead of isAuth
        setUser(data.user);
        navigate("/");
        window.location.reload();
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
      setIsAuth(false);
      localStorage.setItem("isAuth", false); // Store false in case of error
    }
  }

  async function registerUser(name, email, password, navigate) {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/user/register`,
        {
          name,
          email,
          password,
        }
      );
      if (data.message) {
        setLoading(false);
        toast.success(data.message);
        localStorage.setItem("activationToken", data.activationToken);
        navigate("/verifyOTP");
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function verifyUser(otp, navigate) {
    const activationToken = localStorage.getItem("activationToken");
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/user/verify`,
        {
          activationToken,
          otp,
        }
      );

      if (data.message) {
        localStorage.clear();
        navigate("/login");
        toast.success(data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function fetchUser() {
    try {
      const { data } = await axios.get(`http://localhost:4000/api/user/me`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });

      setUser(data.user);
      setIsAuth(true);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <UserContext.Provider
      value={{
        userLogin,
        user,
        setUser,
        isAuth,
        setIsAuth,
        loading,
        registerUser,
        verifyUser,
      }}
    >
      {children}
      <Toaster />
    </UserContext.Provider>
  );
};

export const UserData = () => useContext(UserContext);
