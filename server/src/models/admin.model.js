
const mongoose=require("mongoose")

const userShema=mongoose.Schema({

   username:{type:String,required:true,unique:true},
   password:{type:String,required:true}
},{
    vaersionKey:false,
    timestamps:true
})

const Admin=mongoose.model("admin",userShema)
module.exports=Admin