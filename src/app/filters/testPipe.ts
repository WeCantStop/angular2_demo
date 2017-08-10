import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'testPipe'
})

export class TestPipe implements PipeTransform {
    transform(name: string, value) {
        // console.log(name,value);
        return 'Hello! ' + name;
    }
}