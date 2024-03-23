import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useEffect, useState } from 'react'

interface FormatContext {
    user: FormatUser | null,
    setUser: Dispatch<SetStateAction<FormatUser | null>>,
    authenticated: boolean,
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>
    currentPage: number,
    setCurrentPage: Dispatch<SetStateAction<number>>
}

export interface FormatUser {
    name: string,
    email: string,
    password?: string
}
export const ContextAuth = createContext<FormatContext>({} as FormatContext)

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [user, setUser] = useState<FormatUser | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);


    useEffect(() => {
        try {
            const data: any = localStorage.getItem("user")
            setUser(JSON.parse(data))
            setLoading(false);
        } catch (error) {
            alert("erro")
        }
    }, [setUser])

    return (
        <ContextAuth.Provider value={{ user, setUser, authenticated: !!user, loading, setLoading, currentPage, setCurrentPage }}>
            {children}
        </ContextAuth.Provider>
    )
}

export default AuthProvider
