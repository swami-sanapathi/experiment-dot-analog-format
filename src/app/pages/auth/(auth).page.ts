import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about',
  standalone: true,
  template: `
    <!-- add login and signup routes with buttons -->

    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <button
            class="btn btn-primary"
            [routerLink]="['/auth/login']"
            routerLinkActive="router-link-active"
          >
            Login
          </button>
        </div>
        <div class="col-md-6">
          <button
            class="btn btn-primary"
            [routerLink]="['/auth/signup']"
            routerLinkActive="router-link-active"
          >
            Signup
          </button>
        </div>
      </div>
    </div>
  `,
  styles: `
    .container {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .row {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .col-md-6 {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
   
  `,
  imports: [RouterLink],
})
export default class About {}
