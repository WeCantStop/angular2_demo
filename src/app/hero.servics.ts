// 引入服务
import { Injectable } from '@angular/core';
// 引入类型
import { Hero } from './hero';
// 引入数据
import { HEROS } from './mock-heroes';

@Injectable()

export class HeroService{
    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROS);
    }
}