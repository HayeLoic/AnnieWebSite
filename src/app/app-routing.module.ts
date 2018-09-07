import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThreeDWorkComponent } from './three-d-work/three-d-work.component';
import { PhotographyComponent } from './photography/photography.component';
import { AboutContactComponent } from './about-contact/about-contact.component';

const routes: Routes = [
  { path: '', redirectTo: '/3d-work', pathMatch: 'full' },
  { path: '3d-work', component: ThreeDWorkComponent },
  { path: 'photography', component: PhotographyComponent },
  { path: 'about-contact', component: AboutContactComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
