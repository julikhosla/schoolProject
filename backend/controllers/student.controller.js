const db=require('../models');
const Student=db.student;
//create and save data
exports.create=(req,res)=>{
//Validate request
if(!req.body.school_name){
    res.status(400).send({
        message:"Cannot be empty school"
    })
    return;
}
//create student entry
const student = new Student({
    student_id:req.body.student_id,
    school_name: req.body.school_name,
    grade: req.body.grade,
    student_name: req.body.student_name,
    gender:req.body.gender,
    subject1_mark_current_year:req.body.subject1_mark_current_year,
    subject1_mark_previous_year:req.body.subject1_mark_previous_year,
    subject2_mark_current_year:req.body.subject2_mark_current_year,
    subject2_mark_previous_year:req.body.subject2_mark_previous_year
});
//save student in db
student.save(student).then(data=>{
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
    const studentId=req.body.student_id;
    var condition=studentId?{
        studentId:{
            $regex:new RegExp(studentId),$options:"i"
        }
    }:{}
    Student.find(condition).then((data)=>{
        res.send(data)
    })
    .catch(error=>{
        res.status(500).send({
            message:error.message||"Internal error"
        })
    })
}