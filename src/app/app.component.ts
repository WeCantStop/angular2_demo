import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/heros">Get Heros</a>
    &nbsp;
    <a routerLink="/dashboard">Go to Dashboard</a> 
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Heros';
}

