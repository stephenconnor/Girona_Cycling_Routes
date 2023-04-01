import { Component } from '@angular/core';

@Component({
  selector: 'app-long-route',
  templateUrl: './long-route.component.html',
  styleUrls: ['./long-route.component.scss']
})
export class LongRouteComponent {
  longRoutes!: LongRouteItem[];

  ngOnInit(): void {
    this.longRoutes = [{
      heading: 'St. Hilari 125',
      content: 'Loop to St. Hilari<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139412229"><p>St Hilari 125 &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/St Hilari 125.jpg"></a>'
    }, {
      heading: 'Tossa De Mar, Coastal Route',
      content: 'Coastal loop through Tossa De Mar & Sant Feliu de Guixols with El Angels climb to finish. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139523426"><p>Tossa De Mar, Coastal Route &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/TossaDeMar_Coastal.jpg"></a>'
    },
    {
      heading: 'Girona → Banyoles → Rocacorba',
      content: 'Loop from Girona to Banyoles, with the classic Rocacorba climb coming after Banyoles<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139360897"><p>Girona → Banyoles → Rocacorba &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Girona → Banyoles → Rocacorba.jpg"></a>'
    },
    {
      heading: 'Banyoles Hills',
      content: 'Loop from Girona to Banyoles, with a small hilly loop to finish<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139627380"><p>Banyoles Hills &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Banyoles Hills.jpg"></a>'
    },
    {
      heading: 'Alternative Coastal Route',
      content: 'Coastal loop through Calonge, Sant Feliu de Guixols & Llagostera. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/145987384"><p>Alternative Coastal Route &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Alternaitve_Coastal_Route.jpg"></a>'
    },
    {
      heading: 'Saint Hilari Sacalm',
      content: 'Alernate Loop to St. Hilari<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/147610515"><p>Saint Hilari Sacalm &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Saint_Hilari_Sacalm.jpg"></a>'
    }
    ]

  }

}
export class LongRouteItem {
  heading!: string;
  content!: string;
}

// {title:"St. Hilari 125", description:"Loop to St. Hilari<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139412229"><p>St Hilari 125 &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/St Hilari 125.jpg"></a>`},
//     {title:"Tossa De Mar, Coastal Route", description:"Coastal loop through Tossa De Mar & Sant Feliu de Guixols with El Angels climb to finish. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139523426"><p>Tossa De Mar, Coastal Route &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/TossaDeMar_Coastal.jpg"></a>`},
//     {title:"Girona → Banyoles → Rocacorba", description:"Loop from Girona to Banyoles, with the classic Rocacorba climb coming after Banyoles<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139360897"><p>Girona → Banyoles → Rocacorba &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Girona → Banyoles → Rocacorba.jpg"></a>`},
//     {title:"Banyoles Hills", description:"Loop from Girona to Banyoles, with a small hilly loop to finish<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139627380"><p>Banyoles Hills &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Banyoles Hills.jpg"></a>`},
//     {title:"Alternative Coastal Route", description:"Coastal loop through Calonge, Sant Feliu de Guixols & Llagostera. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/145987384"><p>Alternative Coastal Route &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Alternaitve_Coastal_Route.jpg"></a>`},
//     {title:"Saint Hilari Sacalm", description:"Alernate Loop to St. Hilari<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/147610515"><p>Saint Hilari Sacalm &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Saint_Hilari_Sacalm.jpg"></a>`},
  
