import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
   title = 'Short Routes';
   
  

  faqQuestions = [
    {title:"Banyoles Short Loop", description:"Short rolling loop to the lake in Banyoles"+`<a role="link" href="https://connect.garmin.com/modern/course/139251524"> Banyoles Loop Short GPX</a>`},
    {title:"Question 2", description:"Answer 2 description"},
    {title:"Question 3", description:"Answer 3 description"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
