import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-classroom-details',
  templateUrl: './classroom-details.component.html',
  styleUrls: ['./classroom-details.component.scss']
})
export class ClassroomDetailsComponent implements OnInit {
@Input() studentDetails: any;
  headerTitle = 'Classroom Details';
  constructor() { }

  ngOnInit() {
  }

}
