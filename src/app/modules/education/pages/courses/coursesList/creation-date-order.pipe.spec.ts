import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CoursesListComponent} from './coursesList.component';
import {DebugElement} from '@angular/core';
import {CourseItemComponent} from '../courseItem/courseItem.component';
import {HideDirective} from './hide.directive';
import {SearchCoursesPipe} from './search-courses.pipe';
import {CreationDateOrderPipe} from './creation-date-order.pipe';
import {StyleByDateDirective} from '../courseItem/style-by-date.directive';
import {DurationPipe} from '../courseItem/duration.pipe';

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
                DurationPipe
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
