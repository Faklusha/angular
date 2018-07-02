import { ComponentFixture, TestBed } from '@angular/core/testing';

import {CoursesOptionsComponent} from './coursesOptions.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import { CoursesSearchComponent } from '../coursesSearch/coursesSearch.component';


describe('CoursesOptionsComponent', () => {
    let sut: CoursesOptionsComponent;
    let fixture: ComponentFixture<CoursesOptionsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesOptionsComponent, CoursesSearchComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesOptionsComponent); // abstraction used for test
        sut = fixture.componentInstance;
    });

    it('should show correct button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.query(By.css('.options__button'));
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('Add course');
    });
});