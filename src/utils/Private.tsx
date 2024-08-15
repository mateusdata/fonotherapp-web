import { Spin } from "antd";
import { useContext } from "react";
import { ContextAuth } from "../context/AuthProvider";
import { Navigate } from "react-router-dom";


export function Private({ children }: any) {
    const { loading, authenticated } = useContext(ContextAuth);
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