import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.servics';
import { Hero } from './hero';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

// 初始化
export class DashBoardComponent implements OnInit {
    heros: Hero[] = [];
    constructor(private heroService: HeroService) { }
    ngOnInit(): void{
        this.heroService.getHeroes().then(heros => this.heros = heros.slice(0,4))
    }
}