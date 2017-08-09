import { Component } from '@angular/core';

@Component({
    selector: 'app-hero-relate',
    templateUrl: './template/hero-relate.component.html'
})

export class HeroRelateComponent {
    parentData: string = "I'm from Father !";
    son = {};
    private event(data){
        this.son = data;
    }
}
