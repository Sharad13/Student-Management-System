import "./Navbar.css"
import {Link} from "react-router-dom"
import { useContext } from "react"
import Redirect from "react-router-dom"
import { Navigate } from "react-router"
import { AuthContext } from "./contexts/AuthContext"

export function Navbar(){
    const {token,setToken,handleToken}=useContext(AuthContext)

    return <div>
    <div className="navbar">
        <Link to="/"><button className="btn btn-primary">Dashboard</button></Link>
        <h3>Student Management System</h3>
        <div className="rightNav">
        {
            !token? null:<Link to="form"><button className="btn btn-primary">Add students</button></Link>
        }
        <Link to="login"><button className="btn btn-primary">Admin Login</button></Link>
        </div>
    </div>
    </div>
}