import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-short-route',
    templateUrl: './short-route.component.html',
    styleUrls: ['./short-route.component.scss'],
    standalone: false
})
export class ShortRouteComponent implements OnInit {

  shortRoutes!: ShortRouteItem[];

  ngOnInit(): void {
     this.shortRoutes = [{
         heading: 'Banyoles Loop Short',
  content: 'Short rolling loop to the lake in Banyoles. <a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139251524"><p>Banyoles Short Loop &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p></a><p><img src="assets/images/banyoles_short.jpg"></p>'
     }, {
         heading: 'Volta Puig',
  content: 'Short loop to Adri over El Puig<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139285517"><p>Volta Puig &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p></a><p><img src="assets/images/Volta_Puig.jpg"></p>'
         },
   {
         heading: 'Medinya → Cornella → Banyoles',
  content: 'Short loop through Medinya to Banyoles<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139285865"><p>Medinya → Cornella → Banyoles &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Medinya→Cornella→Banyoles.jpg"></a>'
         },
   {
         heading: 'Banyoles',
  content: 'Short loop through Medinya to Banyoles<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/139285865"><p>Medinya → Cornella → Banyoles &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Medinya→Cornella→Banyoles.jpg"></a>'
         },
   {
         heading: 'Llora Constantin St Gregori',
  content: 'Llora Constantin St Gregori recovery loop. (Gravel sectors)<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/148385620"><p>Llora Constantin St Gregori &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/Llora_Constantin_St_Gregori.jpg"></a>'
         },
       {
       heading: 'Hincapie Loop',
content: 'A classic Girona Road bike route, also known as the Hincapie Loop after former professional cyclist George Hincapie, one of the first to discover Girona. Takes in the climbs of Els Àngels and Santa Pellaia taking in villages like Monells and Cassà de la Selva. Monells being a nice cafe stop.<a role="link" Title="Garmin Connect" target="_blank" href="https://connect.garmin.com/modern/course/308484642"><p>Hincapie Loop &nbsp;&nbsp;<i class="pi pi-spin pi-map-marker"></i></p><img src="assets/images/HincapeLoop.jpg"></a>'
       }
       ]

 }

}
export class ShortRouteItem {
 heading!: string ;
 content!: string ;
}

