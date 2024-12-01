import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/dashboard";
import LoginPage from "./Components/login";
import HomePage from "./Components/home";
import RegisterPage from "./Components/register";
import ServicePage from "./Components/service";
import AboutUsPage from "./Components/aboutus";
import Admin from "./Components/Admin"
import AdminLogin from "./Components/admin_login";
import ProductPage from "./Components/products";
import SellerRegister from "./Components/Seller_register";
import SellersPage from "./Components/Sellers";
import SellerLoginForm from "./Components/Sellers_login";
import UsersPage from "./Components/Users";
import OrdersPage from "./Components/Orders";


function App() {
  return (
    <div className="bg-gray-200 min-h-screen min-w-full">
      <header className=""></header>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/seller_register" element={<SellerRegister />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin_login" element={<AdminLogin />} />
        <Route path="/products" element={<ProductPage/>} />
        <Route path="/users" element={<UsersPage/>} />
        <Route path="/sellers" element={<SellersPage/>} />
        <Route path="/seller_login" element={<SellerLoginForm/>} />
        <Route path="/orders" element={<OrdersPage/>} />







        

      </Routes>
    </div>
  );
}

export default App;
