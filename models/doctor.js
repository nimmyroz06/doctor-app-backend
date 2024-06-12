const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":{type:String,required:true},
        "cat":{type:String,required:true},
        "mob":{type:String,required:true},
        "email":{type:String,required:true},
        "place":{type:String,required:true},
        "hname":{type:String,required:true}
    }
)

let doctormodel=mongoose.model("doctorapp",schema)
module.exports={doctormodel}