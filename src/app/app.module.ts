import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { ThreeDWorkComponent } from './three-d-work/three-d-work.component';
import { PhotographyComponent } from './photography/photography.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ThreeDWorkComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
