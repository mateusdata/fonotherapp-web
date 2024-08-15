import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "../context/AuthProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import HowItWorks from "../pages/HowItWorks";
import Checkout from "../pages/Checkout";
import NotFound from "../pages/NotFound";
import Welcome from "../pages/Welcome";
import CreateAccount from "../pages/CreateAccount";
import Dashboard from "../pages/Dashboard";
import SubscriptionConfirmed from "../pages/SubscriptionConfirmed";
import GlobalProvider from "../context/GlobalProvider";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import TermsOfService from "../pages/TermsOfService";
import { Private } from "../utils/Private";

const AllRoutes = () => {

  


    return (
        <BrowserRouter>
            <GlobalProvider>
                <AuthProvider>
                    <Routes>
                        {/*Rotas publicas do fonotherapp*/}
                        <Route path="/" element={<Home />} />
                        <Route path="/prices" element={<Welcome />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/como-funciona" element={<HowItWorks />} />
                        <Route path="/precos" element={<><Dashboard /></>} />
                        <Route path="*" element={<NotFound />} />
                        <Route path="/cadastro" element={<CreateAccount />} />

                        {/*Rotas privadas do fonotherapp*/}
                        <Route path="/painel" element={<Private> <Dashboard /> </Private>} />
                        <Route path="/checkout" element={<Private><Checkout /></Private>} />
                        <Route path="/meuplano" element={<Private><SubscriptionConfirmed /></Private>} />

                        {/*Rotas termos e serviços do fonotherapp*/}

                        <Route path="/politica-e-privacidade" element={<PrivacyPolicy />} />
                        <Route path="/termos-e-servicos" element={<TermsOfService />} />

                    </Routes>
                </AuthProvider>
            </GlobalProvider>

        </BrowserRouter>
    );
};
export default AllRoutes;