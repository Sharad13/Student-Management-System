const express=require("express")
const connect=require("./configs/db")
const app=express()

const cors=require("cors")
app.use(cors())
app.use(express.json())



const userController=require("./controllers/user.controller")

const adminController=require("./controllers/admin.controller")

app.use("/users",userController)
app.use("/admin",adminController)

app.listen(3005,async()=>{
    await connect()
    console.log("listening to port 3005")
})