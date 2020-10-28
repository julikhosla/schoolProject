import { TutorialService } from './../../services/tutorial.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.scss']
})
export class TutorialsListComponent implements OnInit {

  tutorials:any;
  currentTutorial=null;
currentIndex=-1;
title='';

  constructor(private tutorialService:TutorialService) { }

  ngOnInit() {
    this.retrieveTutorials();
  }
  retrieveTutorials(){
    this.tutorialService.getAll().subscribe(data=>{
      this.tutorials=data;
      console.log(data)
    },
    err=>{
      console.log(err)
    })
  }
  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial, index) {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }
  searchTitle() {
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
