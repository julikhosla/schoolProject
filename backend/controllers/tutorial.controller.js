const db=require('../models');
const Tutorial=db.tutorials;
//create and save data
exports.create=(req,res)=>{
//Validate reques
if(!req.body.title){
    res.status(400).send({
        message:"Cannot be empty title"
    })
    return;
}
//create tutorial
const tutorial = new Tutorial({
    title:req.body.title,
    description:req.body.description,
    published:req.body.published?req.body.published:false
});
//save tutorial in db
tutorial.save(tutorial).then(data=>{
    res.send(data);
})
.catch(error=>{
    res.status(500).send({
        message:error.message||"Internal error"
    })
})
}
//retieve all record from db
exports.findAll =(req,res)=>{
    const title=req.body.title;
    var condition=title?{
        title:{
            $regex:new RegExp(title),$options:"i"
        }
    }:{}
    Tutorial.find(condition).then((data)=>{
        res.send(data)
    })
    .catch(error=>{
        res.status(500).send({
            message:error.message||"internal error"
        })
    })
}
//find a single record with id
exports.findOne=(req,res)=>{
    const id = req.params.id;

    Tutorial.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found Tutorial with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving Tutorial with id=" + id });
      });
}
//find all published records
exports.findAllPublished=(req,res)=>{
    Tutorial.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
}