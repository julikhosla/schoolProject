import { TutorialService } from './../../services/tutorial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.scss']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    title:'',
    description:'',
    published:false
  };
  submitted=false;
  constructor(private tutorialService:TutorialService) { }

  ngOnInit() {
  }
saveTutorial(){
  const data={
    title:this.tutorial.title,
    description:this.tutorial.description
  }
  this.tutorialService.create(data).subscribe(response => {console.log(response);
  this.submitted=true;},
  err=>{
    console.log(err)
  })  
}
newTutorial(){
  this.submitted=false;
  this.tutorial={
    title:'',
    description:'',
    published:false
  }
}
}
