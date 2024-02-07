'use client'

import React from 'react'

const PortfolioContext = React.createContext<any[]>([])

export const PortfolioContextProvider = ({ children }: any) => {
    const linksCS = [
        { name: "Selected Work", link: "/#projects" },
        { name: "About Me", link: "/about" },
        { name: "Recommendations", link: "/recommendations" },
        { name: "Contact", link: "/#contact" },
    ];

    return (
        <PortfolioContext.Provider value={linksCS}>
            {children}
        </PortfolioContext.Provider>
    )
}

export const usePortfolioContextProvider = () => {
    return React.useContext(PortfolioContext)
}
