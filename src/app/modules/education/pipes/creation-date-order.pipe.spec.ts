import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesListComponent} from '../pages/courses/coursesList/coursesList.component';
import {DebugElement} from '@angular/core';
import {CourseItemComponent} from '../pages/courses/courseItem/courseItem.component';
import {HideDirective} from '../directives/hide.directive';
import {SearchCoursesPipe} from './search-courses.pipe';
import {CreationDateOrderPipe} from './creation-date-order.pipe';
import {StyleByDateDirective} from '../directives/style-by-date.directive';
import {DurationPipe} from './duration.pipe';
import {ConfirmationDialogComponent} from '../general/confirmationDialog/confirmationDialog.component';

describe('Pipe: CreationDateOrder', () => {
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

    it('should order courses', () => {
        const debugElement: DebugElement = fixture.debugElement;
        fixture.detectChanges();

        for (let i = 0; i < sut.courses.length - 1; i++) {
            const courseTime = new Date(sut.courses[i].creationDate).getTime();
            const nextCourseTime = new Date(sut.courses[i + 1].creationDate).getTime();
            expect(courseTime).toBeLessThanOrEqual(nextCourseTime);
        }
    });
});
