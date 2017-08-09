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
import { HeroRelateComponent } from './hero-relate.component';

@NgModule({
  /**声明视图类 */
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    DashBoardComponent,
    HeroRelateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule
  ],
  /**全局服务列表 */
  providers: [HeroService],
  /**根模块才能 bootstrap */
  bootstrap: [AppComponent]
})
export class AppModule { }
