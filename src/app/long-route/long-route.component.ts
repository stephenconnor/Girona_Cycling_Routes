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
      content: 'Coastal loop through Tossa De Mar & Sant Feliu de Guixols with Els Ángles climb to finish. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139523426"><p>Tossa De Mar, Coastal Route &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/TossaDeMar_Coastal.jpg"></a>'
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
    },
    {
      heading: 'El Far (Coll D\'Uria) → Olot → Banyoles',
      content: 'Loop to Olot via Coll D\'Uria returning through Banyoles. Nearly 2000m of vertical ascent here including the stunning views from Santauri El Far <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139376466"><p>El Far (Coll D\'Uria) → Olot → Banyoles &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/El Far (Coll D\'Uria).jpg"></a>'
    },
    {
      heading: 'Banyoles Ardennes Long',
      content: 'Loop from Girona to Banyoles, with a hilly loop out to Camallera enroute to Banyoles <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/245556489"><p>Banyoles Ardennes Long &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Banyoles_Ardennes_Long.jpg"></a>'
    },
    {
      heading: 'Olot Loop',
      content: 'Loop through Sant Feliu de Pallerois to Olot and back to Girona via Banyoles. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/245544223"><p>Olot Loop &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Olot.jpg"></a>'
    },
    {
      heading: 'Coastal Route → St Grau → Els Ángles',
      content: 'Coastal loop climbing St Grau then through Llagostera & Sant Feliu de Guixols. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/245544271"><p>Coastal Route → St Grau → Els Ángles &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Girona_Coastal_StGrau_ElsAngels.jpg"></a>'
    },
    {
      heading: 'Les Planes d\'Hostoles → Osor → Saint Hilari Sacalm',
      content: 'Hilly loop to Saint Hilari Sacalm via Les Planes d\'Hostoles and Osor. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/248797244"><p>Les Planes d\'Hostoles → Osor → Saint Hilari Sacalm &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Les Planes d\'Hostoles → Osor → Saint Hilari Sacalm.jpg"></a>'
    },
    {
      heading: 'Les Planes d\'Hostoles → Osor → Saint Hilari Sacalm',
      content: 'Hilly loop to Saint Hilari Sacalm via Les Planes d\'Hostoles and Osor. <a href="../assets/gpx_files/longRoutes/COURSE_248797244.gpx" target="_blank" download="COURSE_248797244.gpx"><p>Les Planes d\'Hostoles → Osor → Saint Hilari Sacalm &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Les Planes d\'Hostoles → Osor → Saint Hilari Sacalm.jpg"></a>'
    }
    ]

  }

}
export class LongRouteItem {
  heading!: string;
  content!: string;
}
  
