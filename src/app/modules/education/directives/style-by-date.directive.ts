import {Directive, ElementRef, Renderer2, Input} from '@angular/core';

@Directive({
    selector: '[appStyleByDate]'
})
export class StyleByDateDirective {
    @Input('appStyleByDate') creationDate: string;

    constructor(private el: ElementRef, private renderer: Renderer2) {
    }

    ngOnInit() {
        const currentTime = Date.now();
        const creationTime = new Date(this.creationDate).getTime();
        const diff = Math.floor((currentTime - creationTime) / 1000 / 60 / 60 / 24);
        if (diff < 0) {
            this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid blue');

        } else if (diff < 14) {
            this.renderer.setStyle(this.el.nativeElement, 'border', '1px solid green');
        }
    }
}
