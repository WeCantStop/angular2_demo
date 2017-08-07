import { Component } from '@angular/core';

export class Hero {
    id: number;
    name: string;
}

@Component({
    selector: 'app-root',
    // templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    template: `
                <h3>{{ title }}</h3>
                <h4>{{ hero.name }} details</h4>
                <div><label>id:</label>{{ hero.id }}</div>
                <div><label>name:</label>
                    <input type="text" [(ngModel)]="hero.name" placeholder="name">
                </div>
                `
})
export class AppComponent {
    title = 'Hero List';
    hero: Hero = {
        id: 1,
        name: '德玛西亚'
    };
}
