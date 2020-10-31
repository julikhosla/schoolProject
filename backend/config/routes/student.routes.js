module.exports=app=>{
    const students=require('../../controllers/student.controller.js');
    var router=require("express").Router();
    //create new student entry
    router.post("/",students.create);

    //retrieve all records
    router.get("/",students.findAll);
  app.use('/api/students', router);
}