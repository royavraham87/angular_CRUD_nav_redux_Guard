import { Component } from '@angular/core';

@Component({
  selector: 'app-coral',
  templateUrl: './coral.component.html',
  styleUrls: ['./coral.component.css']
})
export class CoralComponent {
  userInput: string = ''; // Define a property for two-way binding

  // You can optionally define a method to handle changes or display the value
  showInput(): void {
    console.log('User input:', this.userInput);
  }
}
