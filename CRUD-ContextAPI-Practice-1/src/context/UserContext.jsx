import { useState } from "react";
import { createContext } from "react";

export const MyStore = createContext() // Store Created.

export const ContextProvider = ({children}) =>{ // Warehouse created.
    const [toggle, setToggle] = useState(true)
    return <MyStore.Provider value={{setToggle, toggle}}>
        {children}
    </MyStore.Provider>
}