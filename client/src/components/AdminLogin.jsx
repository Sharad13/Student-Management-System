import axios from "axios"
import { useEffect, useState } from "react"
import "./AdminLogin.css"
import {useNavigate } from "react-router-dom"
import {Redirect} from "react-router-dom"
import { useContext } from "react"
import { AuthContext } from "./contexts/AuthContext"

const init={
    username:"",
    password:""
}
export function AdminLogin(){
const [data,setData]=useState(init)
const {token,setToken,handleToken}=useContext(AuthContext)
const navigate=useNavigate ()

useEffect(()=>{
    if(token){
        console.log(token)
        navigate("/")
    }
},[])


const handleChange=(e)=>{
const {name,value}=e.target
setData({...data,[name]:value})
}

const handleSubmit=(e)=>{
   e.preventDefault()
   axios.post("http://localhost:3005/admin/login",data)
   .then((res)=>{
       console.log(res.data.token)
       handleToken(res.data.token)
       
        navigate("/")
      
   })
   .catch((err)=>{
       alert("Invalid credentials")
       setData(init)
    
})
}
    return <div>
   <div className="login border">
    <div>
    <p>Username</p>
    <input name="username" onChange={handleChange} type="text" className="form-control"></input>
    </div>
    <div>
    <p>Password</p>
    <input name="password" onChange={handleChange}  type="password" className="form-control"></input>
    </div>

    <div className="loginBut">
    <button onClick={handleSubmit} className="btn btn-primary btn-md">Login</button>
    </div>
    </div>

    </div>
}