import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AppComponent }  from './app.component';
import { mapComponent }  from './component/map/map.component';
import { landingPageComponent }  from './component/landingPage/landingPage.component';
import { cvPageComponent }  from './component/cv/cvPage.component';
import { aboutPageComponent }  from './component/about/aboutPage.component';




const routes: Routes = [
  { path: '', component: landingPageComponent },
  { path: 'map', component: mapComponent },
  { path: 'cv', component: cvPageComponent },
  { path: 'about', component: aboutPageComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
