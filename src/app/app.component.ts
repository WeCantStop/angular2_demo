import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

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
                  <li *ngFor="let hero of heros" (click)="onSelectHero(hero)" class="hero-item">
                    <span>{{ hero.id }}</span>
                    <span>{{ hero.name }}</span>
                  </li>
                </ul>
                <div *ngIf="selectedHero">
                  <div>
                    <span>{{ selectedHero.id }}</span>
                    <span>{{ selectedHero.name }}</span>
                  </div>
                </div>
                `
})
export class AppComponent {
    title = 'Hero List';
    hero: Hero = {
        id: 1,
        name: '德玛西亚'
    };
    heros = HEROS;
    selectedHero: Hero;
    onSelectHero(hero: Hero): void {
      this.selectedHero = hero;
    }
}
