import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-test',
    templateUrl: '../template/test-emit.component.html'
})

export class TestEmitComponent {
    @Input() transferByParent: string;
    @Output() parentListener = new EventEmitter();

    private test1(){
        let person = {
            name: 'will',
            age: 18
        };
        this.parentListener.emit(person)
    }
    private test2(){
        alert('test2')
    }

}