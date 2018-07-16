import {Directive, ViewContainerRef, TemplateRef, Input} from '@angular/core';

@Directive({
    selector: '[appHide]'
})
export class HideDirective {

    @Input() set appHide(condition: boolean) {
        if (condition) {
            this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
            this.viewContainer.clear();
        }
    }

    constructor(private templateRef: TemplateRef<any>,
                private viewContainer: ViewContainerRef) {
    }

}
