import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./views/Navigation";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Cart from "./views/Cart";
import Footer from "./views/Footer";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import ForgotPassword from "./views/ForgotPassword";
import VerifyingOTP from "./views/VerifyingOTP";
const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyOTP" element={<VerifyingOTP />} />
          <Route path="/product/:id" element={<Product_Details />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
