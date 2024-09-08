import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  // Set this to your Django API base URL
  private MY_SERVER = 'http://127.0.0.1:8000/cars/';

  constructor(private http: HttpClient) { }

  // Fetch all cars
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.MY_SERVER);
  }

  // Add a new car
  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(this.MY_SERVER, car, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Update an existing car
  updateCar(id: string, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.MY_SERVER}${id}/`, car, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  // Delete a car by ID
  deleteCar(id: string): Observable<void> {
    return this.http.delete<void>(`${this.MY_SERVER}${id}/`);
  }
}
