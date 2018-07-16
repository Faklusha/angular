import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesListComponent} from './coursesList.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CourseItemComponent} from '../courseItem/courseItem.component';
import {SearchCoursesPipe} from '../../../pipes/search-courses.pipe';
import {HideDirective} from '../../../directives/hide.directive';
import {CreationDateOrderPipe} from '../../../pipes/creation-date-order.pipe';
import {StyleByDateDirective} from '../../../directives/style-by-date.directive';
import {DurationPipe} from '../../../pipes/duration.pipe';
import {ConfirmationDialogComponent} from '../../../general/confirmationDialog/confirmationDialog.component';

describe('CoursesListComponent', () => {
    let sut: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;
    let loadSpy;
    let searchSpy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CoursesListComponent,
                CourseItemComponent,
                HideDirective,
                SearchCoursesPipe,
                CreationDateOrderPipe,
                StyleByDateDirective,
                HideDirective,
                DurationPipe,
                ConfirmationDialogComponent
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent); // abstraction used for test
        sut = fixture.componentInstance;
        loadSpy = jasmine.createSpy('onLoadClick');
        sut.onLoadClick = loadSpy;

        searchSpy = jasmine.createSpy('onSearchClick');
        sut.onSearchClick = searchSpy;
    });

    it('should call spy on load click', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        debugElement
            .query(By.css('.list__button'))
            .triggerEventHandler('click', null);
        expect(loadSpy).toHaveBeenCalled();
    });

    it('should show correct add button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.query(By.css('.options__button'));
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('Add course');
    });

    it('should show correct search button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.query(By.css('.search__button'));
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('Search');
    });

    it('should call on search click', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        debugElement
            .query(By.css('.search__button'))
            .triggerEventHandler('click', null);
        expect(searchSpy).toHaveBeenCalled();
    });
});
