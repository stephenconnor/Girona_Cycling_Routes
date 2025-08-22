import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShortRouteComponent } from './short-route/short-route.component';
import { LongRouteComponent } from './long-route/long-route.component';

const routes: Routes = [
  {path:"",redirectTo: 'short-route', pathMatch:'full'},
  {path: 'short-route', component: ShortRouteComponent },
  {path: 'long-route', component: LongRouteComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }