import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/** form相关的东西需要引进此模块 **/
import { FormsModule } from '@angular/forms';
/** service **/
import { HeroService } from './services/hero.servics';
/**router */
import { AppRouterModule } from './router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HerosComponent } from './heros.component';
import { DashBoardComponent } from './dashboard.component';

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
    AppRouterModule
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
