const express=require("express");
const app=express();
const port=9000;

const empRoute=require("./routes/empRoute")
const mongoose=require("mongoose");
const bodyParser=require("body-parser")

mongoose.connect("mongodb://127.0.0.1:27017/naaz").then(()=>{
    console.log("db connected");
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.set("view engine" , 'ejs')
app.use("/",empRoute);


app.listen(port , ()=>{
    console.log("server run on 9000");
})