module.exports=app=>{
    const tutorials=require('../../controllers/tutorial.controller.js');
    var router=require("express").Router();
    //create new tutorial
    router.post("/",tutorials.create);

    //retureve all records
    router.get("/",tutorials.findAll);

    // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);
  app.use('/api/tutorials', router);
}