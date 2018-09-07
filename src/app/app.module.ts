import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { ThreeDWorkComponent } from './three-d-work/three-d-work.component';
import { PhotographyComponent } from './photography/photography.component';
import { AboutContactComponent } from './about-contact/about-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ThreeDWorkComponent,
    PhotographyComponent,
    AboutContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
