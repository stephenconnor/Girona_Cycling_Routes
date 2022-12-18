import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component'
import { Page2Component } from './page2/page2.component';


const routes: Routes = [
  {path:"",redirectTo: 'Page1', pathMatch:'full'},
  {path: 'Page1', component: Page1Component },
  {path: 'Page2', component: Page2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }