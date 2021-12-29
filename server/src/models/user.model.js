
const mongoose=require("mongoose")

const userShema=mongoose.Schema({

   name:{type:String,required:true,unique:true},
    city:{type:String,required:true},
    age:{type:String,required:true},
    edu:{type:String,required:true},
    gender:{type:String,required:true},
    contact:{type:String,required:true}
},{
    vaersionKey:false,
    timestamps:true
})

const User=mongoose.model("user",userShema)
module.exports=User