import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';
import {User} from '../users/users.model';
import {LogoComponent} from '../logo/logo.component';

describe('HeaderComponent', () => {
  let sut: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
    let user: User;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HeaderComponent, LogoComponent]
        });
    });

    beforeEach(() => {
        user = new User();
        user.id = '1';
        user.firstName = 'Ivan';
        user.lastName = 'Ivanov';
        fixture = TestBed.createComponent(HeaderComponent);
        sut = fixture.componentInstance;
        sut.user = user;
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('should show correct button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.query(By.css('.header__button'));
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('Log out');
    });

    it('should show correct user name', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const userNameDebugElement = debugElement.query(By.css('.header__name'));
        const userName = userNameDebugElement.nativeElement;
        expect(userName.textContent).toBe('Ivan Ivanov');
    });
});
