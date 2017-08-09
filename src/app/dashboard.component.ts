import { Component, OnInit } from '@angular/core';
import { HeroService } from './services/hero.servics';
import { Hero } from './hero';

@Component({
    selector: 'app-dashboard',
    styleUrls: ['./styles/dashboard.component.css'],
    templateUrl: './template/dashboard.component.html'
})

// 初始化
export class DashBoardComponent implements OnInit {
    heros: Hero[] = [];
    time = new Date();
    myName = 'will';
    constructor(private heroService: HeroService) { }
    ngOnInit(): void {
        this.heroService.getHeroes().then(heros => this.heros = heros.slice(0, 4));
    }
}
