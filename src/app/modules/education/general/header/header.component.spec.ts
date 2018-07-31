import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeaderComponent} from './header.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {LogoComponent} from '../logo/logo.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderComponent', () => {
    let sut: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent, LogoComponent],
            imports: [
                RouterTestingModule.withRoutes([])
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(HeaderComponent);
        sut = fixture.componentInstance;
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('should not show logout button when there is no user', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.query(By.css('.header__button'));
        expect(buttonDebugElement).toBeNull();
    });
});
