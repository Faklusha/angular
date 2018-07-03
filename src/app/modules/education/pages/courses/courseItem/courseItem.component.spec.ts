import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseItemComponent } from './courseItem.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {CourseItem} from './courseItem.model';

describe('CourseItemComponent', () => {
  let sut: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
    let item: CourseItem;
    let deleteSpy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CourseItemComponent]
        });
    });

    beforeEach(() => {
        item = new CourseItem();

        item.id = '1';
        item.title =  'Title';
        item.creationDate = '16.08.2015';
        item.duration = '105';
        item.description = 'Description';
        deleteSpy = jasmine.createSpy('removeItem');
        fixture = TestBed.createComponent(CourseItemComponent);
        sut = fixture.componentInstance;
        sut.item = item;
        sut.removeItem = deleteSpy;
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('should show correct title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const titleDebugElement = debugElement.query(By.css('.item__description_name'));
        const title = titleDebugElement.nativeElement;
        expect(title.textContent).toBe('Title');
    });
    it('should show correct duration', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const durationDebugElement = debugElement.queryAll(By.css('.item__description_text'))[0];
        const duration = durationDebugElement.nativeElement;
        expect(duration.textContent).toBe('105');
    });
    it('should show correct creationDate', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const creationDateDebugElement = debugElement.queryAll(By.css('.item__description_text'))[1];
        const creationDate = creationDateDebugElement.nativeElement;
        expect(creationDate.textContent).toBe('16.08.2015');
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

    it('should call spy on delete click', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        debugElement
            .queryAll(By.css('.item__button'))[1]
            .triggerEventHandler('click', null);
        expect(deleteSpy).toHaveBeenCalled();
    });
});
