import { useState } from "react"
import "./Form.css"
import axios from "axios"
import { useNavigate } from "react-router"
const init={
    name:"",
    city:"",
    age:"",
    edu:"",
    gender:"",
    contact:""
}
export function Form(){
const [formData,setFormData]=useState(init)
const navigate=useNavigate()


const handleChange=(e)=>{
    const {name,value,type}=e.target
        setFormData({...formData,[name]:value})
}
const handleSubmit=(e)=>{
    e.preventDefault(formData)
    
    axios.post("http://localhost:3005/users",formData)
    .then((res)=>{
        console.log("post",res.data)
        navigate("/")
    })
}

    return <div>
    <div className="head"><h3>Add Student Details</h3></div>
    <form className="box1" onSubmit={handleSubmit}>
        <div className="inp1">
        <label>Name</label>
        <input onChange={handleChange} name="name" className="form-control" type="text"></input>
        </div>

        <div className="box2">
            <div className="inp1">
            <label>City</label>
            <input onChange={handleChange} name="city" className="form-control" type="text"></input>
            </div>

            <div className="inp1">
            <label>Age</label>
            <input onChange={handleChange} name="age" className="form-control" type="text"></input>
            </div>
        </div>

        <div className="inp1">
        <label>Education</label>
        <input onChange={handleChange} name="edu" className="form-control" type="text"></input>
        </div>

        <div className="box2">
            <div className="inp1">
            <label>Gender</label>
            <select  name="gender" className="gender" onChange={handleChange} id="cars">
            <option value="" >Choose here</option>
             <option value="Male" >Male</option>
                <option value="Female">Female</option>
                <option value="NA">NA</option>
            </select>
            </div>

            <div className="inp1">
            <label>Contact</label>
            <input onChange={handleChange} name="contact" className="form-control" type="text"></input>
            </div>
        </div>

            <div className="but">
            <input className=" btn btn-primary btn-md" type="submit"></input>
            </div>
    </form>
    </div>
}