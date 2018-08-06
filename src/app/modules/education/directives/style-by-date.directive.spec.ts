import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemComponent} from '../pages/courses/courseItem/courseItem.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CourseItem} from '../pages/courses/courseItem/courseItem.model';
import {StyleByDateDirective} from './style-by-date.directive';
import {HideDirective} from './hide.directive';
import {DurationPipe} from '../pipes/duration.pipe';
import {ConfirmationDialogComponent} from '../general/confirmationDialog/confirmationDialog.component';

describe('Directive: StyleByDateDirective', () => {
    let sut: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    let item: CourseItem;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CourseItemComponent,
                StyleByDateDirective,
                HideDirective,
                DurationPipe,
                ConfirmationDialogComponent
            ]
        });
    });

    it('should have blue border when data of course is bigger than current date', () => {
        item = new CourseItem();
        item.id = 1;
        item.name = 'Title';
        item.date = 'July 17 2020';
        item.length = 105;
        item.description = 'Description';
        fixture = TestBed.createComponent(CourseItemComponent);
        sut = fixture.componentInstance;
        sut.item = item;
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const element = debugElement.query(By.css('.item'));
        expect(element.nativeElement.style.border).toBe('1px solid blue');
    });

    it('should have green border when data of course is less than current date', () => {
        item = new CourseItem();
        item.id = 1;
        item.name = 'Title';
        item.date = 'July 30 2018';
        item.length = 105;
        item.description = 'Description';
        fixture = TestBed.createComponent(CourseItemComponent);
        sut = fixture.componentInstance;
        sut.item = item;
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const element = debugElement.query(By.css('.item'));
        expect(element.nativeElement.style.border).toBe('1px solid green');
    });
});
