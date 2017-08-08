import { Component } from '@angular/core';
import { Hero } from './hero';

const HEROS: Hero[] = [
  { id: 11, name: 'Mr.Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

@Component({
    selector: 'app-root',
    // templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template: `
                <h3>{{ title }}</h3>
                <h4>{{ hero.name }} details</h4>
                <div><label>id:</label>{{ hero.id }}</div>
                <div><label>name:</label>
                    <input type="text" [(ngModel)]="hero.name" placeholder="name">
                </div>
                <ul>
                  <li *ngFor="let hero of heros" (click)="onSelectHero(hero)" class="hero-item" [class.selected]="hero === selectedHero">
                    <span>{{ hero.id }}</span>
                    <span>{{ hero.name }}</span>
                  </li>
                </ul>
                <app-hero-detail [hero]="selectedHero"></app-hero-detail>
                `
})
export class AppComponent {
    title = 'Hero List';
    hero: Hero = {
        id: 1,
        name: '盖伦'
    };
    heros = HEROS;
    selectedHero: Hero;
    onSelectHero(hero: Hero): void {
      this.selectedHero = hero;
    }
}
