import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['./styles/app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <a routerLink="/dashboard" routerLinkActive="nav-active" class="nav">所有人物</a>
    &nbsp;
    <a routerLink="/heros" routerLinkActive="nav-active" class="nav">人物前沿</a>
    &nbsp;
    <a routerLink="/heroRelate" routerLinkActive="nav-active" class="nav">人物关系</a>
    &nbsp;
    <a routerLink="/heroAnimation" routerLinkActive="nav-active" class="nav">人物动画</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = '历史人物';
}

