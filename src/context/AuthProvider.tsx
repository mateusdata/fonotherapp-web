import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from 'react'
import { setInterceptors } from '../axiosInstance/axiosInstance';

interface FormatContext {
    user: FormatUser | null,
    setUser: Dispatch<SetStateAction<FormatUser | null>>,
    authenticated: boolean,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>
    logout:any
}

export interface FormatUser {
    doc_id: number;
    email: string;
    nick_name: string;
    token: string;
    usu_id: number;
  }
  
export const ContextAuth = createContext<FormatContext>({} as FormatContext)

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<FormatUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);

    useEffect(() => {
        setInterceptors(setUser)
    }, [])

    useEffect(() => {
        try {
            const data: any = localStorage.getItem("usuario")
            setUser(JSON.parse(data))
            setLoading(false);           
        } catch (error) {                      
            setLoading(false);
        }
    }, [setUser])

    async function logout() {
        localStorage.removeItem("usuario");
        setUser(null)
    }

    return (
        <ContextAuth.Provider value={{ user, setUser, authenticated: !!user, loading, setLoading, currentPage, setCurrentPage, logout }}>
            {children}
        </ContextAuth.Provider>
    )
}

export default AuthProvider
