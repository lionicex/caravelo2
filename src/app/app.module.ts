import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent} from './header/header.component';
import {FlightsComponent} from './flights/flights.component';
import {MealComponent} from './meal/meal.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FlightsComponent,
    MealComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
