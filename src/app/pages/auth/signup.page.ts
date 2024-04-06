import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'about',
  standalone: true,
  template: `It is signup Page
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <button
            class="btn btn-primary"
            [routerLink]="['/auth']"
            routerLinkActive="router-link-active"
          >
            Go Back
          </button>
          <button
            class="btn btn-primary"
            [routerLink]="['/']"
            routerLinkActive="router-link-active"
          >
            Home
          </button>
        </div>
      </div>
    </div> `,
  imports: [RouterLink],
})
export default class About {}
