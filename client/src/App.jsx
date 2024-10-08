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
import ForgotPassword from "./views/ForgotPass";
import VerifyingOTP from "./views/VerifyingOTP";
import AllproductPage from "./components/product/AllproductPage";
import AdminProtectedRoute from "./components/AdminProtectedRoute";
// import ShirtsPage from "./components/product/ShirtsPage";
import JeansPage from "./components/product/JeansPage";
import TShirtPage from "./components/product/TShirtPage";
import Dashboard from "./views/admin/Dashboard";
import Products from "./views/admin/Products";
import CheckoutPage from "./views/Checkout";
import PaymentPage from "./views/Payment";
import Shipping from "./views/Shipping";
import Userprofile from "./components/templete/userprofile";
import MyOrder from "./components/templete/MyOrder";
import OrderItem from "./components/templete/OrderItem";
import Recet from "./views/Recet";
import Customers from "./views/admin/Customers";
import Error from "./components/Errormsg/Error";
import BarCharts from "./views/admin/charts/BarCharts";
import PieCharts from "./views/admin/charts/PieCharts";
import LineCharts from "./views/admin/charts/LineCharts";
import Orders from "./views/admin/Orders";
import OfferPage from "./components/OfferPage";
import FranchisePage from "./views/FranchisePage";
import FAQPage from "./views/FAQ";

// import { useSelector } from "react-redux";
// import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/product/:id" element={<Product_Details />} />
          <Route path="/reset-password/:token" element={<Recet />} />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                <Cart />
              </ProtectedRoute>
            }
          />

          <Route path="/login" element={<LogIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/verifyOTP" element={<VerifyingOTP />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/OfferPage" element={<OfferPage />} />
          <Route path="/FAQPage" element={<FAQPage />} />

          <Route path="/catagery" element={<AllproductPage />} />

          {/* <Route
            path="/catagery/MyOrder"
            element={
              <ProtectedRoute>
                <MyOrder />
              </ProtectedRoute>
            }
          />  */}

          <Route
            path="/catagery/JeansPage"
            element={
              <ProtectedRoute>
                <JeansPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/catagery/TShirtPage"
            element={
              <ProtectedRoute>
                <TShirtPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/catagery/userprofile"
            element={
              <ProtectedRoute>
                <Userprofile />
              </ProtectedRoute>
            }
          />

          <Route
            path="/catagery/myorder"
            element={
              <ProtectedRoute>
                <MyOrder />
              </ProtectedRoute>
            }
          />

          <Route
            path="/category/myorder/:id"
            element={
              <ProtectedRoute>
                <OrderItem />
              </ProtectedRoute>
            }
          />

          {/* <Route
            path="/franchise"
            element={
              <AdminProtectedRoute>
                <FranchisePage />
              </AdminProtectedRoute>
            }
          /> */}
          <Route path="/franchise" element={<FranchisePage />} />

          {/* Admin routes */}

          <Route
            path="/admin/dashboard"
            element={
              <AdminProtectedRoute>
                <Dashboard />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/products"
            element={
              <AdminProtectedRoute>
                <Products />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/customers"
            element={
              <AdminProtectedRoute>
                <Customers />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/orders"
            element={
              <AdminProtectedRoute>
                <Orders />
              </AdminProtectedRoute>
            }
          />

          <Route
            path="/admin/chart/bar"
            element={
              <ProtectedRoute>
                <BarCharts />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/chart/pie"
            element={
              <ProtectedRoute>
                <PieCharts />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/chart/line"
            element={
              <ProtectedRoute>
                <LineCharts />
              </ProtectedRoute>
            }
          />
          {/* Catch-all route for undefined paths */}
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
