import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
   title = 'Page1';
   
  

  shortRoutes = [
    {title:"Banyoles Loop Short", description:"Short rolling loop to the lake in Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139251524"><p>Banyoles Short Loop &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p></a><p><img src="assets/images/banyoles_short.jpg"></p>`},
    {title:"Volta Puig", description:"Short loop to Adri over El Puig"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139285517"><p>Volta Puig &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p> </a><p><img src="assets/images/Volta_Puig.jpg"></p>`},
    {title:"Medinya → Cornella → Banyoles", description:"Short loop through Medinya to Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139285865"><p>Medinya → Cornella → Banyoles &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Medinya→Cornella→Banyoles.jpg"></a>`},
    {title:"Banyoles", description:"Short loop to Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139069662"><p>Banyoles &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Banyoles.jpg"></a>`},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
