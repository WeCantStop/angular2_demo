import { HeroRelateComponent } from './../hero-relate.component';
import { HeroDetailComponent } from '../hero-detail.component';
import { HerosComponent } from '../heros.component';
import { DashBoardComponent } from '../dashboard.component';
import { HeroAnimation } from '../hero-animation.component';
import { HeroSwiper } from '../hero-swiper.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashBoardComponent },
    { path: 'heros', component: HerosComponent },
    { path: 'heroDetail/:id', component: HeroDetailComponent },
    { path: 'heroRelate', component: HeroRelateComponent },
    { path: 'heroAnimation', component: HeroAnimation },
    { path: 'heroSwiper', component: HeroSwiper },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
