import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.servics';


@Component({
    selector: 'app-heros',
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
                `,
})

export class HerosComponent implements OnInit {
    title = 'Hero List';
    hero: Hero = {
        id: 1,
        name: 'Yamey',
        char: ''
    };
    heros: Hero[];
    selectedHero: Hero;
    constructor(private heroService: HeroService) { }

    getHeroes(): void {
      this.heroService.getHeroes().then(heroes => this.heros = heroes);
    }

    ngOnInit(): void {
      this.getHeroes();
    }

    onSelectHero(hero: Hero): void {
      this.selectedHero = hero;
    }
}
