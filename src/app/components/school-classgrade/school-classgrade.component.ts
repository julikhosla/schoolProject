import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/school-classgrade.service';

const defaultOption = {
  school: 'School',
  grade: 'Class'
};
@Component({
  selector: 'app-school-classgrade',
  templateUrl: './school-classgrade.component.html',
  styleUrls: ['./school-classgrade.component.scss']
})
export class SchoolClassGradeComponent implements OnInit {

  submitted = false;
  schoolName = defaultOption.school;
  gradeName = defaultOption.grade;
  invalidSchool: boolean;
  invalidClass: boolean;
  schoolList: { id: string; schoolName: string; }[];
  classList: string[];
  studentDetails = [];
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.schoolList = this.studentService.getSchool();
    this.classList = this.studentService.getClass();
  }
  retrieveTutorials(schoolName, className) {
    this.studentService.getAll().
    subscribe(x => {
      this.studentDetails = x.filter(item => (item.school_name === schoolName && item.grade === className));
    });
  }
  onSubmit(selectedSchool, selectedClass) {
    this.invalidSchool = selectedSchool === defaultOption.school ?  true : false;
    this.invalidClass = selectedClass === defaultOption.grade ?  true : false;
    if ( !this.invalidSchool && !this.invalidClass) { this.retrieveTutorials(selectedSchool, selectedClass); }
  }

}
