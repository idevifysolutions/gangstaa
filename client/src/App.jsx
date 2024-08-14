// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navigation from "./views/Navigation";
// import Home from "./views/Home";
// import Contact from "./views/Contact";
// import About from "./views/About";
// import Cart from "./views/Cart";
// import Footer from "./views/Footer";
// import Product_Details from "./views/ProductDetails/Product_Details";
// import LogIn from "./views/LogIn";
// import SignUp from "./views/SignUp";
// import ForgotPassword from "./views/ForgotPassword";
// import VerifyingOTP from "./views/VerifyingOTP";
// import JacketsPage from "./components/product/JacketsPage";
// import ShirtsPage from "./components/product/ShirtsPage";
// import JeansPage from "./components/product/JeansPage";
// import TShirtPage from "./components/product/TShirtPage";
// import Dashboard from "./views/admin/Dashboard";
// import Products from "./views/admin/Products";
// import Userprofile from "./components/templete/userprofile";
// import Customers from "./views/admin/Customers";
// import Error from "./components/Errormsg/Error";
// // import { useSelector } from "react-redux";
// import ProtectedRoute from "./components/ProtectedRoute";

// const App = () => {
//   // const loggedIn = useSelector((state) => state.isLoggedIn);

//   // console.log(loggedIn);

//   return (
//     <>
//       <Router>
//         <Navigation />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/aboutus" element={<About />} />
//           <Route path="/contactus" element={<Contact />} />
//           <Route path="/product/:id" element={<Product_Details />} />
//           <Route
//             path="/cart"
//             element={
//               <ProtectedRoute>
//                 <Cart />
//               </ProtectedRoute>
//             }
//           />
//           <Route path="/login" element={<LogIn />} />
//           <Route path="/signUp" element={<SignUp />} />
//           <Route path="/forgotPassword" element={<ForgotPassword />} />
//           <Route path="/verifyOTP" element={<VerifyingOTP />} />
//           <Route
//             path="/catagery/jackets"
//             element={
//               <ProtectedRoute>
//                 <JacketsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/catagery/ShirtsPage"
//             element={
//               <ProtectedRoute>
//                 <ShirtsPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/catagery/JeansPage"
//             element={
//               <ProtectedRoute>
//                 <JeansPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/catagery/TShirtPage"
//             element={
//               <ProtectedRoute>
//                 <TShirtPage />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/catagery/userprofile"
//             element={
//               <ProtectedRoute>
//                 <Userprofile />
//               </ProtectedRoute>
//             }
//           />

//           {/* Admin routes */}
//           <Route
//             path="/admin/dashboard"
//             element={
//               <ProtectedRoute>
//                 <Dashboard />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin/products"
//             element={
//               <ProtectedRoute>
//                 <Products />
//               </ProtectedRoute>
//             }
//           />
//           <Route
//             path="/admin/customers"
//             element={
//               <ProtectedRoute>
//                 <Customers />
//               </ProtectedRoute>
//             }
//           />

//           {/* Catch-all route for undefined paths */}
//           <Route path="*" element={<Error />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./views/Navigation";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Cart from "./views/Cart";
import Footer from "./views/Footer";
import Product_Details from "./views/ProductDetails/Product_Details";
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
import CheckoutPage from "./views/Checkout";
import Userprofile from "./components/templete/userprofile";
import Customers from "./views/admin/Customers";
import Error from "./components/Errormsg/Error";
import BarCharts from "./views/admin/charts/BarCharts";
import PieCharts from "./views/admin/charts/PieCharts";
import LineCharts from "./views/admin/charts/LineCharts";

// import { useSelector } from "react-redux";
// import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  // const loggedIn = useSelector((state) => state.isLoggedIn);

  // console.log(loggedIn);

  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/product/:id" element={<Product_Details />} />
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
          <Route path="/checkout" element={<CheckoutPage />} />

          {/* Admin routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />

          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/chart/bar" element={<BarCharts />} />
          <Route path="/admin/chart/pie" element={<PieCharts />} />
          <Route path="/admin/chart/line" element={<LineCharts />} />

          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
