import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<nav class='navbar navbar-default'>
  <div class='container-fluid'>
  <ul class='nav navbar-nav'>
          <li><a class='nav-link' routerLinkActive='active' [routerLink]="['/login']">Login</a></li>
        </ul>
        </div>
        </nav>

        <router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
