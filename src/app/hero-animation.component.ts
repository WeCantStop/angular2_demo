import { Component } from '@angular/core';
/** 引入动画相关的类 **/
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-hero-animation',
    styleUrls: [],
    templateUrl: './template/hero-animation.component.html',
    /** 动画 **/
    animations: [
        trigger('testName', [
            state('inactive', style({
                backgroundColor: 'skyblue',
                transform: 'scale(1) rotate(0)'
            })),
            state('active', style({
                backgroundColor: 'yellowgreen',
                transform: 'scale(1.2) rotate(360deg)'
            })),
            transition('inactive => active', animate('400ms ease-in')),
            transition('active => inactive', animate('400ms ease-out'))
        ])
    ]
})

// 初始化
export class HeroAnimation {
    active: string = 'inactive';
    changeState() :void{
        this.active = this.active == 'active'? 'inactive' : 'active';
    }
}