import { HeroRelateComponent } from './../hero-relate.component';
import { HeroDetailComponent } from '../hero-detail.component';
import { HerosComponent } from '../heros.component';
import { DashBoardComponent } from '../dashboard.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';


const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashBoardComponent },
    { path: 'heros', component: HerosComponent },
    { path: 'heroDetail/:id', component: HeroDetailComponent },
    { path: 'heroRelate', component: HeroRelateComponent }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouterModule { }
