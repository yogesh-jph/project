import express from "express"
import cors from "cors"
import mongoose from "mongoose"


const app = express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())


 mongoose.connect("mongodb://localhost:27017/formDB",{
    useNewUrlParser: true,
    useUnifiedtopology: true
 } , ()=>{
 console.log("DB connected")
 } )

//  Routes
app.get("/",(req,res)=> {
    res.send("My API")
})

app.listen(9002,() => {
    console.log(" BE started at port 9002")
})