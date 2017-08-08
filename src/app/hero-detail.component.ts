// 英雄相惜信息组件
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { Hero } from './hero';
import { HeroService } from './hero.servics';

@Component({
  selector: 'app-hero-detail',
  styleUrls: ['./hero-detail.component.css'],
  template: `<div *ngIf="hero">
                  <div>
                    <h2>{{ hero.name }} details!!!</h2>
                    <label>id:</label>
                    <span>{{ hero.id }}</span>
                    <input [(ngModel)]="hero.name" placeholder="name">
                    <div>球类:{{ hero.char }}</div>
                  </div>
                  <button (click)="gotoBack()">back</button>
                </div>`
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  @Input() hero: Hero;
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }
  gotoBack(): void {
    this.location.back();
  }
}