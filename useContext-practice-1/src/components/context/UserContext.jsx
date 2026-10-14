import { createContext } from "react";

export const MyStore = createContext() // Store Created 

export const ContextProvider = ({chilren}) => { // Created Context Provider 
    return <MyStore.Provider value={{}}>
        {chilren}
    </MyStore.Provider>
}