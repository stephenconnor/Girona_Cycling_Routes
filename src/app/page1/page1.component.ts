import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
   title = 'Page1';
   
  

  faqQuestions = [
    {title:"Banyoles Loop Short", description:"Short rolling loop to the lake in Banyoles"+`<a role="link" href="https://connect.garmin.com/modern/course/139251524">Banyoles Short Loop</a>`},
    {title:"Question 2", description:"Answer 2 description"},
    {title:"Question 3", description:"Answer 3 description"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
