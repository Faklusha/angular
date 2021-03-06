import {ComponentFixture, TestBed} from '@angular/core/testing';

import {CourseItemComponent} from './courseItem.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CourseItem} from './courseItem.model';
import {StyleByDateDirective} from '../../../directives/style-by-date.directive';
import {HideDirective} from '../../../directives/hide.directive';
import {DurationPipe} from '../../../pipes/duration.pipe';
import {ConfirmationDialogComponent} from '../../../general/confirmationDialog/confirmationDialog.component';

describe('CourseItemComponent', () => {
    let sut: CourseItemComponent;
    let fixture: ComponentFixture<CourseItemComponent>;
    let item: CourseItem;
    let toggleDialogSpy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                CourseItemComponent,
                ConfirmationDialogComponent,
                StyleByDateDirective,
                HideDirective,
                DurationPipe
            ]
        });
    });

    beforeEach(() => {
        item = new CourseItem();

        item.id = 1;
        item.name = 'Title';
        item.date = 'July 7 2018';
        item.length = 105;
        item.description = 'Description';
        toggleDialogSpy = jasmine.createSpy('toggleDialog');
        fixture = TestBed.createComponent(CourseItemComponent);
        sut = fixture.componentInstance;
        sut.item = item;
        sut.toggleDialog = toggleDialogSpy;
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('should show correct title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const titleDebugElement = debugElement.query(By.css('.item__description_name'));
        const title = titleDebugElement.nativeElement;
        expect(title.textContent).toBe('TITLE');
    });

    it('should show correct creationDate', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const creationDateDebugElement = debugElement.queryAll(By.css('.item__description_text'))[1];
        const creationDate = creationDateDebugElement.nativeElement;
        expect(creationDate.textContent).toBe('07.07.2018');
    });
    it('should show correct description', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const descriptionDebugElement = debugElement.query(By.css('.item__description_overview'));
        const description = descriptionDebugElement.nativeElement;
        expect(description.textContent).toBe('Description');
    });

    it('should show correct edit button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.queryAll(By.css('.item__button'))[0];
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('Edit');
    });

    it('should show correct delete button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.queryAll(By.css('.item__button'))[1];
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('Delete');
    });

    it('should toggle confirmation dialog on delete button click', () => {
        expect(sut.isDialogOpened).toBeFalsy();

        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement
            .queryAll(By.css('.item__button'))[1]
            .triggerEventHandler('click', null);
        fixture.detectChanges();
        expect(toggleDialogSpy).toHaveBeenCalled();
    });

    it('should render rated course', () => {
        item = new CourseItem();
        item.id = 1;
        item.name = 'Title';
        item.date = 'July 17 2020';
        item.length = 85;
        item.description = 'Description';
        item.isTopRated = true;
        fixture = TestBed.createComponent(CourseItemComponent);
        sut = fixture.componentInstance;
        sut.item = item;
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const element = debugElement.query(By.css('.item'));
        const ratedElement = debugElement.query(By.css('.item_rated'));
        expect(element).toBeNull();
        expect(ratedElement.nativeElement).toBeDefined();
    });

    it('should render not rated course', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const element = debugElement.query(By.css('.item'));
        const ratedElement = debugElement.query(By.css('.item_rated'));
        expect(element.nativeElement).toBeDefined();
        expect(ratedElement).toBeNull();
    });

    it('should render rated sign', () => {
        item = new CourseItem();
        item.id = 1;
        item.name = 'Title';
        item.date = 'July 17 2020';
        item.length = 85;
        item.description = 'Description';
        item.isTopRated = true;
        fixture = TestBed.createComponent(CourseItemComponent);
        sut = fixture.componentInstance;
        sut.item = item;
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const element = debugElement.query(By.css('.item__description_sign'));
        expect(element.nativeElement).toBeDefined();
    });

    it('should render not rated sign', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const element = debugElement.query(By.css('.item__description_sign'));
        expect(element).toBeNull();
    });
});
