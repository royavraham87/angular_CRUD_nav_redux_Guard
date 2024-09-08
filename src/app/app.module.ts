import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http'; // Import provideHttpClient and withFetch


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoralComponent } from './components/coral/coral.component';
import { MeirComponent } from './components/meir/meir.component';
import { MorComponent } from './components/mor/mor.component';
import { RoyComponent } from './components/roy/roy.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CoralComponent,
    MeirComponent,
    MorComponent,
    RoyComponent,
    HomeComponent,
    CarsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // <-- Add FormsModule here
    // HttpClientModule is no longer needed here
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())  // Use this instead of HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
