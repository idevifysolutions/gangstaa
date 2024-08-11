import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./views/Navigation";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Cart from "./views/Cart";
import Footer from "./views/Footer";
import Product_Details from "./views/ProductDetails/Product_Details";
// import Emptycart from "./components/EmptyCart/Emptycart";
import LogIn from "./views/LogIn";
import SignUp from "./views/SignUp";
import ForgotPassword from "./views/ForgotPassword";
import VerifyingOTP from "./views/VerifyingOTP";
import JacketsPage from "./components/product/JacketsPage";
import ShirtsPage from "./components/product/ShirtsPage";
import JeansPage from "./components/product/JeansPage";
import TShirtPage from "./components/product/TShirtPage";
import Dashboard from "./views/admin/Dashboard";
import Products from "./views/admin/Products";
import Userprofile from "./components/templete/userprofile";

import Error from "./components/Errormsg/Error";
import { useSelector } from "react-redux";

const App = () => {
  const loggedIn = useSelector((state) => state.isLoggedIn);

  console.log(loggedIn);

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/product/:id" element={<Product_Details />} />
          {/* <Route path="/empty" element={<Emptycart />} /> */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyOTP" element={<VerifyingOTP />} />
          <Route path="/catagery/jackets" element={<JacketsPage />} />
          <Route path="/catagery/ShirtsPage" element={<ShirtsPage />} />
          <Route path="/catagery/JeansPage" element={<JeansPage />} />
          <Route path="/catagery/TShirtPage" element={<TShirtPage />} />

          <Route path="/catagery/userprofile" element={<Userprofile />} />
          {/* admin routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
