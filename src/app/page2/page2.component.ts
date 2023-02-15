import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {
  title = 'Long Routes';

  longRoutes = [
    {title:"St. Hilari 125", description:"Loop to St. Hilari"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139412229"><p>St Hilari 125 &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/St Hilari 125.jpg"></a>`},
    {title:"Tossa De Mar, Coastal Route", description:"Coastal loop through Tossa De Mar & Sant Feliu de Guixols with El Angels climb to finish. "+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139523426"><p>Tossa De Mar, Coastal Route &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/TossaDeMar_Coastal.jpg"></a>`},
    {title:"Girona → Banyoles → Rocacorba", description:"Loop from Girona to Banyoles, with the classic Rocacorba climb coming after Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139360897"><p>Girona → Banyoles → Rocacorba &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Girona → Banyoles → Rocacorba.jpg"></a>`},
    {title:"Banyoles Hills", description:"Loop from Girona to Banyoles, with a small hilly loop to finish"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139627380"><p>Banyoles Hills &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Banyoles Hills.jpg"></a>`},
    {title:"Alternative Coastal Route", description:"Coastal loop through Calonge, Sant Feliu de Guixols & Llagostera. "+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/145987384"><p>Alternative Coastal Route &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Alternaitve_Coastal_Route.jpg"></a>`},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
