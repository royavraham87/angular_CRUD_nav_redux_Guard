import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private tokenKey = 'authToken';
  private apiUrl = 'http://127.0.0.1:8000/login';  // Your Django login URL

  constructor(private http: HttpClient, private router: Router) {}

  // Check if running in a browser environment
  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }

  // Log in and store the JWT token
  login(username: string, password: string) {
    return this.http.post(this.apiUrl, { username, password }).subscribe(
      (response: any) => {
        if (this.isBrowser()) {
          localStorage.setItem(this.tokenKey, response.access);  // Store the access token in browser
        }
        this.router.navigate(['/mor']);  // Redirect to the restricted component after login
      },
      (error) => {
        console.error('Login failed:', error);
      }
    );
  }

  // Check if the user is logged in (i.e., has a valid token)
  isLoggedIn(): boolean {
    if (this.isBrowser()) {
      return !!localStorage.getItem(this.tokenKey);  // Return true if token exists in browser
    }
    return false;
  }

  // Log out by clearing the token
  logout() {
    if (this.isBrowser()) {
      localStorage.removeItem(this.tokenKey);  // Remove the token in browser
    }
    this.router.navigate(['/login']);  // Redirect to login page
  }

  // Get the stored token
  getToken(): string | null {
    if (this.isBrowser()) {
      return localStorage.getItem(this.tokenKey);  // Get the token from browser
    }
    return null;
  }
}
