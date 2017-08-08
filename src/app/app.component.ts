import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./styles/app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heros" routerLinkActive="nav-active" class="nav">Get Heros</a>
    &nbsp;
    <a routerLink="/dashboard" routerLinkActive="nav-active" class="nav">Go to Dashboard</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heros';
}

