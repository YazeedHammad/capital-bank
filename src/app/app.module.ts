import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AccListComponent } from './account/acc-list/acc-list.component';
import { AccEditComponent } from './account/acc-edit/acc-edit.component';
import { AccNewComponent } from './account/acc-new/acc-new.component';
import { AccCardComponent } from './account/acc-card/acc-card.component';
import { NavComponent } from './nav/nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { WeatherComponent } from './home/weather/weather.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AccListComponent,
    AccEditComponent,
    AccNewComponent,
    AccCardComponent,
    NavComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule.forRoot(),
    HttpClientModule,
    HttpClientJsonpModule,
    ScrollToModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
