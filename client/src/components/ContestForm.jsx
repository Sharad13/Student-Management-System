import { useState } from "react"
import "./ContestForm.css"
import { Contests } from "./Contests"
import axios from "axios"

const init={
    title:"",
    type:"",
    instructor:"",
    start:"",
    end:""
}
export function ContestForm(){

    const [details,setDetails]=useState(init)
    const [popup,setPopup]=useState(false)
    
    const handleChange=(e)=>{
        const {name,value,type}=e.target
        setDetails({...details,[name]:value})
    }

    const handleSubmit=(e)=>{
        setPopup(true)
        setTimeout(()=>{
            setPopup(false)
        },2000)
        
        e.preventDefault(details)
        console.log("details",details)
        // axios.post("http://localhost:3005/users",details)
        // .then((res)=>{
        //     console.log("post",res.data)
        // })
    }

    return <div>
    <div className="contestPage">
    
    <div className="leftB">
       <div className="contestH"><h3>Add Contest</h3></div>
        <div className="cForm">
        <label>Title</label>
        <input onChange={handleChange} name="title" type="text" className="form-control mb-3"></input>
            
            <div className="form-group">
            <label for="exampleFormControlSelect1">Instructor Name</label>
            <select name="instructor" onChange={handleChange} className="form-control" id="exampleFormControlSelect1">
            <option value="">Your Name</option>
            <option value="Nrupul">Nrupul Dev</option>
            <option value="Albert">Albert</option>
            <option value="Dhaval">Dhaval</option>
            </select>
            </div>

            <div className="form-group">
                <label for="exampleFormControlSelect1">Type of contest</label>
                <select name="type" onChange={handleChange} className="form-control" id="exampleFormControlSelect1">
                <option value="">Select Type</option>
                <option value="DSA">DSA</option>
                <option value="Coding">Coding</option>
                </select>
            </div>
            <div className="box2">
                <div className="inp1">
                <label>Start Time</label>
                <input name="start" onChange={handleChange} name="city" className="form-control" type="time"></input>
                </div>

                <div className="inp1">
                <label>Deadline</label>
                <input name="end" onChange={handleChange} name="age" className="form-control" type="text"></input>
                </div>
            </div>
        <div onClick={handleSubmit} className="contestBut"><button className="btn btn-primary">Add Contest</button></div>


        </div>
    </div>
    
        <div className="rightB">
        <div className="contestH1"><h3>Current Contests</h3></div>
            <div class="card cardBox1">
            <div class="card-header header">
            <span className="text-primary title">Recursion</span>
            <span>DSA Contest</span>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <p>By:Nrupul Dev</p>
            <p>9:30 pm</p>
            <button  className="btn btn-primary btn-sm btnn">Attempt</button>
            </li>
            </ul>
            </div>

            <div class="card cardBox1">
            <div class="card-header header">
             <span className="text-primary title">Recursion</span>
             <span>DSA Contest</span>
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">
            <p>By:Nrupul Dev</p>
            <p>9:30 pm</p>
            <button  className="btn btn-primary btn-sm btnn">Attempt</button>
            </li>
            </ul>
            </div>
        </div>
    </div>
    {popup?<div className="popup">
     <div className=" text-success popupB ">
     Contest added succesfully!
     </div>
    </div>:null
}
    </div>
}