import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[highLight]',
})

export class HeightLightDirective {
    @Input() highLightColor: string;
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter(){
        this.highLight(this.highLightColor || 'skyblue');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highLight(null);
    }

    private highLight(color:string){
        this.el.nativeElement.style.backgroundColor = color
    }
}