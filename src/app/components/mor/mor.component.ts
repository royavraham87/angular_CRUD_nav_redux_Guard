import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';  // Import AuthService
import { Router } from '@angular/router';

@Component({
  selector: 'app-mor',
  templateUrl: './mor.component.html',
  styleUrls: ['./mor.component.css']
})
export class MorComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();  // Call the logout method from AuthService
  }
}
