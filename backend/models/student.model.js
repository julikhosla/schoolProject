const { mongoose } = require(".");

module.exports=mongoose=>{
  const Student = mongoose.model(
    "student",
    mongoose.Schema(
      {
        student_id:String,
        school_name: String,
        grade: String,
        student_name: String,
        gender:String,
        subject1_mark_current_year:Number,
        subject1_mark_previous_year:Number,
        subject2_mark_current_year:Number,
        subject2_mark_previous_year:Number
      },
      { timestamps: true }
    )
  );

  return Student;
}