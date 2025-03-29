import React from "react";
import Navbar from "./components/Navbar";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";

function App(){
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="product/:id" element={<ProductPage/>} />
        <Route path="cart" element={<CartPage/>} />
        <Route path="checkout" element={<CheckoutPage/>} />
        <Route path="login" element={<LoginPage/>} />
        <Route path="signup" element={<SignupPage/>} />
        <Route path="dashboard" element={<DashboardPage/>} />
      </Routes>
    </div>
  );
}



export default App;


