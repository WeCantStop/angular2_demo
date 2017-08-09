import { Component, OnInit } from '@angular/core';
import { HeroService } from './services/hero.servics';
import { Hero } from './hero';
/** 引入动画相关的类 **/
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-dashboard',
    styleUrls: ['./styles/dashboard.component.css'],
    templateUrl: './template/dashboard.component.html',
    /** 动画 **/
    animations: [
        trigger('testName', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active',   style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
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
