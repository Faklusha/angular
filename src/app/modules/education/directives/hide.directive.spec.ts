import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesListComponent} from '../pages/courses/coursesList/coursesList.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CourseItemComponent} from '../pages/courses/courseItem/courseItem.component';
import {HideDirective} from './hide.directive';
import {SearchCoursesPipe} from '../pipes/search-courses.pipe';
import {CreationDateOrderPipe} from '../pipes/creation-date-order.pipe';
import {StyleByDateDirective} from './style-by-date.directive';
import {DurationPipe} from '../pipes/duration.pipe';
import {ConfirmationDialogComponent} from '../general/confirmationDialog/confirmationDialog.component';

describe('Derective: Hide', () => {
    let sut: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

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
    });

    it('should show correct load button title for data', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.query(By.css('.list__button'));
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('LOAD MORE');
    });

    it('should show correct load button title for no data', () => {
        const debugElement: DebugElement = fixture.debugElement;
        const input = debugElement.query(By.css('.search__input')).nativeElement;
        input.value = 'unexpected name';
        fixture.detectChanges();

        debugElement.query(By.css('.search__button'))
            .triggerEventHandler('click', null);
        fixture.detectChanges();
        const buttonDebugElement = debugElement.query(By.css('.list__button'));
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('No data ): Feel free to add new course');
    });

});
