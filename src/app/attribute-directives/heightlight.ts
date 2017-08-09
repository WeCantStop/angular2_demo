import { Directive, ElementRef, HostListener, Input } from '@angular/core';
/** 自定义属性型指令 **/
@Directive({
    selector: '[highLight]',
})

export class HeightLightDirective {
    @Input() highLightColor: string;
    /** ElementRef 是用来操作dom的,首先依赖注入 **/
    constructor(private el: ElementRef) { }

    @HostListener('mouseenter') onMouseEnter(){
        this.highLight(this.highLightColor || 'skyblue');
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.highLight(null);
    }

    private highLight(color:string){
        this.el.nativeElement.style.backgroundColor = color;
    }
}