import React, { useContext } from 'react'

export const GlobalStateContext = React.createContext()

export const useGlobal = () => {
    return(
        useContext(GlobalStateContext)
    )
}