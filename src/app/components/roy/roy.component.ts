import { Component, OnInit } from '@angular/core';
import { CarStateService } from '../../services/carState.service';
import { Car } from '../../models/car.model';

@Component({
  selector: 'app-roy',
  templateUrl: './roy.component.html',
  styleUrls: ['./roy.component.css']
})
export class RoyComponent implements OnInit {
  cars: Car[] = [];

  constructor(private carStateService: CarStateService) {}

  ngOnInit(): void {
    this.carStateService.cars$.subscribe((cars: Car[]) => {
      this.cars = cars; // Subscribe to car data
    });
  }
}
