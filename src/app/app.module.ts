import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GoogleChart} from './angular2-google-chart.directive';
import {MatTabsModule} from '@angular/material/tabs';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { mapComponent }  from './component/map/map.component';
import { landingPageComponent }  from './component/landingPage/landingPage.component';
import { cvPageComponent }  from './component/cv/cvPage.component';
import { aboutPageComponent }  from './component/about/aboutPage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    mapComponent,
    landingPageComponent,
    cvPageComponent,
    aboutPageComponent,
    GoogleChart,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
