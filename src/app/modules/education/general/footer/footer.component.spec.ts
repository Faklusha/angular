import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FooterComponent} from './footer.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('FooterComponent', () => {
    let sut: FooterComponent;
    let fixture: ComponentFixture<FooterComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FooterComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(FooterComponent);
        sut = fixture.componentInstance;
    });

    it('should show correct title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const footerDebugElement = debugElement.query(By.css('.footer'));
        const footer = footerDebugElement.nativeElement;
        expect(footer.textContent).toBe('Copyright @ Videocources, All Rights Reserved');
    });
});
