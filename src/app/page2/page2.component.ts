import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {
  title = 'Page Two';

  faq2Questions = [
    {title:"PAGE 2 Question 1", description:"Answer 1 description"},
    {title:"PAGE 2 Question 2", description:"Answer 2 description"},
    {title:"Page 2 Question 3", description:"Answer 3 description"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
