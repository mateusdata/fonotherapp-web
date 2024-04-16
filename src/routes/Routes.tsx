import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spin } from 'antd';
import AuthProvider, { ContextAuth } from "../context/AuthProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import HowItWorks from "../pages/HowItWorks";
import Price from "../pages/Price";
import Checkout from "../pages/Checkout";


const AllRoutes = () => {

    function Private({ children }: any) {
        const { loading, authenticated } = useContext(ContextAuth);
        if (loading) {
            return <Spin size="large" delay={0} />
        }
        if (false) {
            return <Navigate to={"/login"} />
        }
        return children
    }
    
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path="/" element={<Private> <Home /> </Private>} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/como-funciona" element={<HowItWorks />} />
                    <Route path="/precos" element={<Price />} />
                    <Route path="/checkout" element={<Checkout/>} />
                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};
export default AllRoutes;