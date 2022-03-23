import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
   title = 'Page1';
   
  

  faqQuestions = [
    {title:"Question 1", description:"Answer 1 description"+`<a role="link" href="https://www.w3schools.com">Visit W3Schools <i class="bi bi-arrow-right"></i></a>`},
    {title:"Question 2", description:"Answer 2 description"},
    {title:"Question 3", description:"Answer 3 description"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
