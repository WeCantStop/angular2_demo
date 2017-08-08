import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/** form相关的东西需要引进此模块 **/
import { FormsModule } from '@angular/forms';

// 引入组件
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
