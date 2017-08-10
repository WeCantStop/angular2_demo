import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-hero-http',
    templateUrl: './template/hero-http.component.html'
})

export class HeroHttpComponent implements OnInit {
    constructor ( private http: HttpClient ){ }
    ngOnInit() :void{

    }
}
