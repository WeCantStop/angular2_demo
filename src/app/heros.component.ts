import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './services/hero.servics';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heros',
  styleUrls: ['./styles/heros.component.css'],
  template: `
                <h3>{{ title }}</h3>
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
  title = '所有人物';
  heros: Hero[];
  selectedHero: Hero;
  constructor(
    private heroService: HeroService,
    private router: Router
  ) { }

  public getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heros = heroes);
  }

  public ngOnInit(): void {
    this.getHeroes();
  }

  public onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
    this.router.navigate(['heroDetail', this.selectedHero.id]);
  }
}
