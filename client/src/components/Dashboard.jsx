
import { useEffect, useState } from "react"
import "./Dashboard.css"
import axios from "axios"

export function Dashboard(){
const [list,setList]=useState([])


   useEffect(()=>{
    axios.get("http://localhost:3005/users")
    .then((res)=>{
        console.log("get",res.data.user)
          setList(res.data.user)
    })
   },[])

   const handleDelete=(id)=>{
    axios.delete(`http://localhost:3005/users/${id}`)
    .then((r)=>{
        axios.get("http://localhost:3005/users")
        .then((res)=>{
            console.log("get",res.data.user)
              setList(res.data.user)
        })
    })
   }

   const handleEdit=()=>{
       console.log("dd")
   }
   const sortByName=()=>{
    axios.get("http://localhost:3005/users/sortedByName")
    .then((res)=>{
        console.log("get",res.data.user)
          setList(res.data.user)
    })
   }
   const sortByAge=()=>{
    axios.get("http://localhost:3005/users/sortedByAge")
    .then((res)=>{
        console.log("get",res.data.user)
          setList(res.data.user)
    })
}
    return <div className="outerBox">
    <div className="leftBox">
    <div className="sort">
    <button onClick={()=>sortByName()} className="btn btn-success btn-sm">Sort By Name </button>
    <button onClick={()=>sortByAge()} className="btn btn-success btn-sm">Sort By Age</button>
    </div>
    <h3>Student List</h3>
    {list.map(el=><div>
    <div className="box" key={el._id}>
        <div className="imgBlock">
            <img src="https://img.icons8.com/stickers/100/000000/user-male-circle.png"/>
            <div>
            <p>Name:{el.name}</p>
            <p>Age:{el.age}</p>
            <p>Contact:{el.contact}</p>
            </div>
        </div>
        <div className="butns">
        <button onClick={()=>handleEdit(el._id)} className="btn btn-success btn-sm">Edit </button>
        <button onClick={()=>handleDelete(el._id)} className="btn btn-danger btn-sm">Delete</button>
        </div>
    </div>
    </div>
    )
    }
    </div>

    <div className="rightBox">
      <div className="rBox">
      <button  className="btn btn-primary btn-lg">Add another contest</button>
      </div>
    </div>
    </div>
}