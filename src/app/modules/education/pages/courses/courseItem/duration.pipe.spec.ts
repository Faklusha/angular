import {ComponentFixture, TestBed} from '@angular/core/testing';
import {CourseItemComponent} from './courseItem.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CourseItem} from './courseItem.model';
import {StyleByDateDirective} from './style-by-date.directive';
import {HideDirective} from '../coursesList/hide.directive';
import {DurationPipe} from './duration.pipe';

describe('Pipe: Duration', () => {
    let sut: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    let item: CourseItem;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CourseItemComponent,
                StyleByDateDirective,
                HideDirective,
                DurationPipe
            ]
        });
    });

    it('should show only minutes', () => {
        item = new CourseItem();
        item.id = '1';
        item.title = 'Title';
        item.creationDate = 'July 17 2020';
        item.duration = '15';
        item.description = 'Description';
        fixture = TestBed.createComponent(CourseItemComponent);
        sut = fixture.componentInstance;
        sut.item = item;
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const element = debugElement.queryAll(By.css('.item__description_text'))[0];
        expect(element.nativeElement.textContent).toBe('15min');
    });

    it('should show hours and minutes', () => {
        item = new CourseItem();
        item.id = '1';
        item.title = 'Title';
        item.creationDate = 'July 17 2020';
        item.duration = '105';
        item.description = 'Description';
        fixture = TestBed.createComponent(CourseItemComponent);
        sut = fixture.componentInstance;
        sut.item = item;
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const element = debugElement.queryAll(By.css('.item__description_text'))[0];
        expect(element.nativeElement.textContent).toBe('1h 45min');
    });
});
