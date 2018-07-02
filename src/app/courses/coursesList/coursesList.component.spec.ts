import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesListComponent } from './coursesList.component';
import {DebugElement} from '@angular/core';
import {CoursesSearchComponent} from '../coursesSearch/coursesSearch.component';
import {By} from '@angular/platform-browser';
import {CourseItemComponent} from '../courseItem/courseItem.component';

describe('CoursesListComponent', () => {
    let sut: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;
    let loadSpy;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesListComponent, CourseItemComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent); // abstraction used for test
        sut = fixture.componentInstance;
        loadSpy = jasmine.createSpy('onLoadClick');
        sut.onLoadClick = loadSpy;

    });

    it('should show correct button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.query(By.css('.list__button'));
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('LOAD MORE');
    });

    it('should call spy on load click', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        debugElement
            .query(By.css('.list__button'))
            .triggerEventHandler('click', null);
        expect(loadSpy).toHaveBeenCalled();
    });
});
