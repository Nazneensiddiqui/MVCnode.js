const express=require("express");
const route=express.Router();
const empControler=require("../controlers/empControler")

route.get("/", empControler.empHome);
route.get("/insert", empControler.empInsert);
route.get("/display", empControler.empDisplay);
route.get("/contact", empControler.empContact);
route.post("/dataDisplay" ,empControler.SaveData)
route.get("/recdel",empControler.DataDelet)

module.exports=route;