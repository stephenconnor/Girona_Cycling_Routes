import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {
  title = 'Page Two';

  longRoutes = [
    {title:"PAGE 2 Question 1", description:"Answer 1 description"},
    {title:"PAGE 2 Question 2", description:"Answer 2 description"},
    // {title:"Banyoles", description:"Short loop to Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139069662"><p>Banyoles &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Banyoles.jpg"></a>`},
    {title:"Page 2 Question 3", description:"Answer 3 description"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
