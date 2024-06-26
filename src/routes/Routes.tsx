import React, { useContext } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Spin } from 'antd';
import AuthProvider, { ContextAuth } from "../context/AuthProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import HowItWorks from "../pages/HowItWorks";
import Price from "../pages/Price";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome";
import CreateAccount from "../pages/CreateAccount";
import Dashboard from "../pages/Dashboard";
import SubscriptionConfirmed from "../pages/SubscriptionConfirmed";


const AllRoutes = () => {


    const DownloadAppRedirect = () => {
        window.location.href = 'https://expo.dev/artifacts/eas/orchbRQN5xt8qRF5eibMmR.apk';
        return null;
      };
      
    function Private({ children }: any) {
        const { loading, authenticated, user } = useContext(ContextAuth);
        if (loading) {
            return (
                <div className="flex items-center justify-center h-screen">
                    <Spin size="large" delay={0} />
                </div>
            )
        }
        if (!authenticated) {
            return <Navigate to={"/login"} />
        }
        return children
    }


    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    {/*Rotas publicas do fonotherapp*/}
                    <Route path="/" element={<Home />} />
                    <Route path="/prices" element={<Welcome />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/como-funciona" element={<HowItWorks />} />
                    <Route path="/precos" element={<><Price /></>} />
                    <Route path="*" element={<NotFound />} />
                    <Route path="/cadastro" element={<CreateAccount />} />

                    {/*Rotas privadas do fonotherapp*/}
                    <Route path="/painel" element={<Private> <Dashboard /> </Private>} />
                    <Route path="/checkout" element={<Private><Checkout /></Private>} />
                    <Route path="/meuplano" element={<Private><SubscriptionConfirmed /></Private>} />
                    <Route path="/downloadapp" element={<DownloadAppRedirect />} />




                </Routes>
            </AuthProvider>
        </BrowserRouter>
    );
};
export default AllRoutes;