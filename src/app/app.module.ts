import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/** 动画类 **/
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { TestEmitComponent } from './components/test-emit.component';
import { HeightLightDirective } from './attribute-directives/heightlight';
import { HeroAnimation } from './hero-animation.component';

/** pipe **/
import { TestPipe } from './filters/testPipe';


@NgModule({
  /**声明视图类 */
  declarations: [
    AppComponent,
    HerosComponent,
    HeroDetailComponent,
    DashBoardComponent,
    HeroRelateComponent,
    TestEmitComponent,
    HeightLightDirective,
    TestPipe,
    HeroAnimation
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    BrowserAnimationsModule
  ],
  /**全局服务列表 */
  providers: [HeroService],
  /**根模块才能 bootstrap */
  bootstrap: [AppComponent]
})
export class AppModule { }
