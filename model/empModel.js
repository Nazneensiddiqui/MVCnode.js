const mongoose=require("mongoose");
const empSchema= new mongoose.Schema({
    empno:Number,
    name:String,
    city:String,
    Salary:Number

})

module.exports=mongoose.model("student" , empSchema);