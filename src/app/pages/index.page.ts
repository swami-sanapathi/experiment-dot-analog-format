import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'home',
  standalone: true,
  template: `
    Welcome to Home Page
    <div>
      <a routerLink="/about">About</a>
      <a routerLink="/contact">Contact</a>
      <a routerLink="/auth/login">Login</a>
      <a routerLink="/auth/signup">Signup</a>
    </div>
  `,
  styles: `
    a {
      margin-right: 10px;
    }
  `,
  imports: [RouterLink],
})
export default class Home {}
