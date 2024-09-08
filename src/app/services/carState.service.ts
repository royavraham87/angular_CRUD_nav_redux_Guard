import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarStateService {
  // Use BehaviorSubject to store the list of cars and allow components to subscribe to changes
  private carSubject = new BehaviorSubject<Car[]>([]);
  cars$ = this.carSubject.asObservable(); // Observable that components can subscribe to

  // Set new car data
  setCars(cars: Car[]): void {
    this.carSubject.next(cars);
  }

  // Get current car data as a snapshot
  getCurrentCars(): Car[] {
    return this.carSubject.getValue();
  }
}
