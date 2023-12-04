import { createContext, useState } from "react";

export const sidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
    const [show, setShow] = useState(false)

    return (
        
        <sidebarContext.Provider value={{ show, setShow }}>
            {children}
        </sidebarContext.Provider>
    )
}