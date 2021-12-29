import { createContext } from "react"
import { useState } from "react";

export const AuthContext=createContext("")

export function AuthContextProvider({children}){
    const [token,setToken]=useState("")
 
    const handleToken=(token)=>{
        setToken(token)
    }
   return <AuthContext.Provider value={{token,setToken,handleToken}}>
   <div>
   {children}
   </div>
   </AuthContext.Provider>
}