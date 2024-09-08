import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoralComponent } from './components/coral/coral.component';
import { MeirComponent } from './components/meir/meir.component';
import { MorComponent } from './components/mor/mor.component';
import { RoyComponent } from './components/roy/roy.component';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { LoginComponent } from './components/login/login.component';  // Import the LoginComponent
import { AuthGuard } from './guards/auth.guard';  // Import the AuthGuard

const routes: Routes = [
  { path: '', component: HomeComponent },  // Default route
  { path: 'coral', component: CoralComponent },
  { path: 'meir', component: MeirComponent },
  { path: 'mor', component: MorComponent, canActivate: [AuthGuard] },  // Protect 'mor' route
  { path: 'roy', component: RoyComponent },
  { path: 'cars', component: CarsComponent },
  { path: 'login', component: LoginComponent }  // Login route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
