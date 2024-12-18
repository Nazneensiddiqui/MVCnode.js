const empModel=require("../model/empModel")

const empHome=(req,res)=>{
    res.render("Home")
}

const empInsert=(req,res)=>{
    res.render("Insert")
}

const empDisplay=async(req,res)=>{
const mydata= await empModel.find()
console.log(mydata)
    res.render("Display" ,{data:mydata})
}

const empContact=async(req,res)=>{
    const mydata= await empModel.find()
console.log(mydata)
    res.render("Contact" ,{data:mydata})
   
}

const SaveData=(req,res)=>{
    const {eno2,nm2,ct2,sal2}=req.body;

  empModel.create({
    empno:eno2,
    name:nm2,
    city:ct2,
    Salary:sal2
  })
  res.render("Insert")
}

const DataDelet= async(req,res)=>{
    const myid=req.query.id
   await empModel.findByIdAndDelete(myid)
   
   const mydata= await empModel.find()
console.log(mydata)
    res.render("Contact" ,{data:mydata})

}


module.exports={
    empHome,
    empInsert,
    empDisplay,
    empContact,
    SaveData,
    DataDelet
}