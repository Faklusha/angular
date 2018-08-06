import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesListComponent} from './coursesList.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CourseItemComponent} from '../courseItem/courseItem.component';
import {HideDirective} from '../../../directives/hide.directive';
import {CreationDateOrderPipe} from '../../../pipes/creation-date-order.pipe';
import {StyleByDateDirective} from '../../../directives/style-by-date.directive';
import {DurationPipe} from '../../../pipes/duration.pipe';
import {ConfirmationDialogComponent} from '../../../general/confirmationDialog/confirmationDialog.component';
import {BreadcrumbsComponent} from '../../../general/breadcrumbs/breadcrumbs.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('CoursesListComponent', () => {
    let sut: CoursesListComponent;
    let fixture: ComponentFixture<CoursesListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CoursesListComponent,
                CourseItemComponent,
                HideDirective,
                CreationDateOrderPipe,
                StyleByDateDirective,
                BreadcrumbsComponent,
                HideDirective,
                DurationPipe,
                ConfirmationDialogComponent
            ],
            imports: [
                RouterTestingModule.withRoutes([]),
                HttpClientModule
            ]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(CoursesListComponent); // abstraction used for test
        sut = fixture.componentInstance;
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

});
