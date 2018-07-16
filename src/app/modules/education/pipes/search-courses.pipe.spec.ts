import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesListComponent} from '../pages/courses/coursesList/coursesList.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CourseItemComponent} from '../pages/courses/courseItem/courseItem.component';
import {HideDirective} from '../directives/hide.directive';
import {SearchCoursesPipe} from './search-courses.pipe';
import {CreationDateOrderPipe} from './creation-date-order.pipe';
import {StyleByDateDirective} from '../directives/style-by-date.directive';
import {DurationPipe} from './duration.pipe';
import {ConfirmationDialogComponent} from '../general/confirmationDialog/confirmationDialog.component';

describe('Derective: Search', () => {
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

    it('should return no courses', () => {
        const debugElement: DebugElement = fixture.debugElement;
        const input = debugElement.query(By.css('.search__input')).nativeElement;
        input.value = 'unexpected name';
        fixture.detectChanges();
        debugElement.query(By.css('.search__button'))
            .triggerEventHandler('click', null);
        expect(sut.courses.length).toBe(0);
    });

    it('should return one course', () => {
        const debugElement: DebugElement = fixture.debugElement;
        const input = debugElement.query(By.css('.search__input')).nativeElement;
        input.value = '1';
        fixture.detectChanges();
        debugElement.query(By.css('.search__button'))
            .triggerEventHandler('click', null);
        expect(sut.courses.length).toBe(1);
    });
});
