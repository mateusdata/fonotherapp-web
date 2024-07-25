import React, { Dispatch, PropsWithChildren, SetStateAction, createContext, useState } from 'react'

interface FormatContext {
    activePlan: boolean,
    setActivePlan: Dispatch<SetStateAction<boolean>>
}

export const ContextGlobal = createContext<FormatContext>({} as FormatContext)

const GlobalProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [activePlan, setActivePlan] = useState<boolean>(false);

    return (
        <ContextGlobal.Provider value={{ activePlan, setActivePlan }}>
            {children}
        </ContextGlobal.Provider>
    )
}

export default GlobalProvider
