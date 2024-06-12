const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const {doctormodel}=require("./models/doctor")
mongoose.connect("mongodb+srv://nimmyroz:roz206@cluster0.svkepzi.mongodb.net/doctorDB?retryWrites=true&w=majority&appName=Cluster0")

const app=express()
app.use(cors())
app.use(express.json())

app.post("/",(req,res)=>{
    let input=req.body
    let doctorapp=new doctormodel(input)
    console.log(doctorapp)
    doctorapp.save()
    res.json({"status":"success"})
})

app.post("/search",(req,res)=>{
    let input=req.body
    doctormodel.find(input).then(
        (data)=>{
            res.json(data)
        }
    )
})

app.post("/delete",(req,res)=>{
    let input=req.body
    doctormodel.findByIdAndDelete(input._id).then(
        (response)=>{
            res.json({"status":"success"})
        }
    ).catch(
        (error)=>{
            res.json({"status":"error"})
        }
    )
})

app.get("/view",(req,res)=>{
    doctormodel.find().then(
        (data)=>{
            res.json(data)
        }
    )
    res.send("viewed")
})

app.listen(8080,()=>{
    console.log("server started")
})