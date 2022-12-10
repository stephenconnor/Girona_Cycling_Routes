import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.less']
})
export class Page2Component implements OnInit {
  title = 'Page Two';

  longRoutes = [
    // {title:"Rocacorba (Girona → Banyoles → Rocacorba)", description:"Loop from Girona → Banyoles with Rocacorba climb after Baynoles"+'<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139360897"><p>Rocacorba (Girona → Banyoles → Rocacorba) &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p></a><img src="assets/images/Girona → Banyoles → Rocacorba.jpg">'},
    // {title:"Tossa De Mar Coastal → Els_Angels", description:"Coastal route throught Tossa De Mar finishing up Els Angels climb"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139360897"><p>Rocacorba (Girona → Banyoles → Rocacorba) &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Tossa_Coastal→Els_Angels.gpx.jpg"></a>`},
    // {title:"Medinya → Cornella → Banyoles", description:"Short loop through Medinya to Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139285865"><p>Medinya → Cornella → Banyoles &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Medinya→Cornella→Banyoles.jpg"></a>`},
    // {title:"Rocacorba (Girona → Banyoles → Rocacorba)", description:"Loop from Girona → Banyoles with Rocacorba climb after Baynoles" + '<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139360897"><p>Rocacorba (Girona → Banyoles → Rocacorba) &nbsp;&nbsp;</p></a>'},
    {title:"Banyoles Loop Short", description:"Short rolling loop to the lake in Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139251524"><p>Banyoles Short Loop &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p></a><p><img src="assets/images/banyoles_short.jpg"></p>`},
    {title:"Volta Puig", description:"Short loop to Adri over El Puig"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139285517"><p>Volta Puig &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p> </a><p><img src="assets/images/Volta_Puig.jpg"></p>`},
    {title:"Medinya → Cornella → Banyoles", description:"Short loop through Medinya to Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139285865"><p>Medinya → Cornella → Banyoles &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Medinya→Cornella→Banyoles.jpg"></a>`},
    {title:"Banyoles", description:"Short loop to Banyoles"+`<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139069662"><p>Banyoles &nbsp;&nbsp;<i class="bi bi-geo-alt"></i></p><img src="assets/images/Banyoles.jpg"></a>`},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
