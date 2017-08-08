// 英雄相惜信息组件
import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'app-hero-detail',
    styleUrls: ['./hero-detail.component.css'],
    template:   `<div *ngIf="hero">
                  <div>
                    <span>{{ hero.id }}</span>
                    <span>{{ hero.name }}</span>
                  </div>
                </div>`
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}