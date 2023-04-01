import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShortRouteComponent } from './short-route/short-route.component';
import { RouterModule } from '@angular/router';
import {StyleClassModule} from 'primeng/styleclass';
import { LongRouteComponent } from './long-route/long-route.component'

@NgModule({
  declarations: [
    AppComponent,
    ShortRouteComponent,
    LongRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    RouterModule,
    BrowserAnimationsModule,
    StyleClassModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
