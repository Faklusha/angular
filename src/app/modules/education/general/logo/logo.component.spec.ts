import {ComponentFixture, TestBed} from '@angular/core/testing';
import {LogoComponent} from './logo.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('LogoComponent', () => {
    let sut: LogoComponent;
    let fixture: ComponentFixture<LogoComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LogoComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LogoComponent);
        sut = fixture.componentInstance;
    });

    it('should show correct title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const logoDebugElement = debugElement.query(By.css('.logo__title'));
        const logo = logoDebugElement.nativeElement;
        expect(logo.textContent).toBe('Logo');
    });
});
