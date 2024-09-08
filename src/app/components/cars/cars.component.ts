import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { CarStateService } from '../../services/carState.service'; // Import the shared state service
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars: Car[] = [];
  newCar: Car = new Car('', '', 0, ''); // Initialize a new Car object
  selectedCar: Car | null = null; // For updating a car

  constructor(private carService: CarService, private carStateService: CarStateService) {} // Inject CarStateService

  ngOnInit(): void {
    this.getCars(); // Fetch the list of cars on component initialization
  }

  getCars(): void {
    this.carService.getCars().subscribe((data: Car[]) => {
      this.cars = data;
      this.carStateService.setCars(data); // Set the cars in the shared service
    });
  }

  addCar(): void {
    if (this.newCar.brand && this.newCar.year && this.newCar.color) {
      // Generate a unique ID using a simple approach
      this.newCar.id = Math.random().toString(36).substring(2, 9);
  
      this.carService.addCar(this.newCar).subscribe((car: Car) => {
        this.cars.push(car); // Add the new car to the list
        this.carStateService.setCars(this.cars); // Update the shared state
        this.newCar = new Car('', '', 0, ''); // Reset form
      });
    }
  }

  editCar(car: Car): void {
    this.selectedCar = { ...car }; // Set the selected car for editing
  }

  updateCar(): void {
    if (this.selectedCar) {
      this.carService.updateCar(this.selectedCar.id, this.selectedCar).subscribe(() => {
        this.getCars(); // Refresh the list after updating
        this.carStateService.setCars(this.cars); // Update the shared state
        this.selectedCar = null; // Clear the selected car after update
      });
    }
  }

  deleteCar(id: string): void {
    this.carService.deleteCar(id).subscribe(() => {
      this.cars = this.cars.filter(c => c.id !== id); // Remove the car from the list
      this.carStateService.setCars(this.cars); // Update the shared state
    });
  }
}
