import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {GoogleChart} from './angular2-google-chart.directive';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { mapComponent }  from './component/map/map.component';
import { landingPageComponent }  from './component/landingPage/landingPage.component';


@NgModule({
  declarations: [
    AppComponent,
    mapComponent,
    landingPageComponent,
    GoogleChart,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
