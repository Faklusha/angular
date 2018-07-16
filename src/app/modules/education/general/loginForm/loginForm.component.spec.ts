import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {LoginFormComponent} from './loginForm.component';

describe('LoginFormComponent', () => {
    let sut: LoginFormComponent;
    let fixture: ComponentFixture<LoginFormComponent>;
    let click;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginFormComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginFormComponent);
        sut = fixture.componentInstance;
        click = jasmine.createSpy('onLogInClick');
        sut.onLogInClick = click;
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('should login user', () => {
        const debugElement: DebugElement = fixture.debugElement;
        debugElement.queryAll(By.css('.login-form__item_input'))[0]
            .triggerEventHandler('change', 'name');
        fixture.detectChanges();

        debugElement.queryAll(By.css('.login-form__item_input'))[1]
            .triggerEventHandler('change', 'password');
        fixture.detectChanges();

        debugElement.query(By.css('.login-form__button'))
            .triggerEventHandler('click', null);

        fixture.detectChanges();
        expect(click).toHaveBeenCalled();
    });
});
