import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
/** form相关的东西需要引进此模块 **/
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HerosComponent } from './heros.component';
import { HeroService } from './hero.servics';
import { DashBoardComponent } from './dashboard.component';


const Router = RouterModule.forRoot([
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashBoardComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'heroDetail/:id', component: HeroDetailComponent }
])


@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    DashBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Router,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
