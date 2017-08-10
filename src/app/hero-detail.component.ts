// 英雄详细信息组件
import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import slideInDownAnimation from './animation';

import { Hero } from './hero';
import { HeroService } from './services/hero.servics';

@Component({
  selector: 'app-hero-detail',
  template: `<div *ngIf="hero">
                  <div>
                    <h2>{{ hero.name }} details!!!</h2>
                    <label>id:</label>
                    <span>{{ hero.id }}</span>
                    <input [(ngModel)]="hero.name" placeholder="name">
                    <div>球类:{{ hero.char }}</div>
                  </div>
                  <button (click)="gotoBack()">back</button>
                </div>`,
  animations: [ slideInDownAnimation.slideInDownAnimation ]
})

export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);

    //快照模式  (组件的实例永远、永远不会被复用,不经过其他页面，直接跳到本组件的情况)
    // let id = this.route.snapshot.paramMap.get('id');
    // this.heroService.getHero(+id)
    //     .then((hero: Hero) => this.hero = hero);
  }
  gotoBack(): void {
    this.location.back();
  }
}
