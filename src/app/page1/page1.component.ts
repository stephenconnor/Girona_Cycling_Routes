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
    // Longer routes
    {title:"St. Hilari 125", description:"Loop to St. Hilari"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139412229"><p>St Hilari 125 &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/St Hilari 125.jpg"></a>`},
    {title:"Tossa De Mar, Coastal Route", description:"Coastal loop through Tossa De Mar & Sant Feliu de Guixols with El Angels climb to finish. "+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139523426"><p>Tossa De Mar, Coastal Route &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/TossaDeMar_Coastal.jpg"></a>`},
    {title:"Girona → Banyoles → Rocacorba", description:"Loop from Girona to Banyoles, with the classic Rocacorba climb coming after Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139360897"><p>Girona → Banyoles → Rocacorba &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Girona → Banyoles → Rocacorba.jpg"></a>`},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
