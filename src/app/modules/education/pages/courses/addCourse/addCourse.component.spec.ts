import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {DurationPipe} from '../../../pipes/duration.pipe';
import {AddCourseComponent} from './addCourse.component';
import {CourseItem} from '../courseItem/courseItem.model';
import {BreadcrumbsComponent} from '../../../general/breadcrumbs/breadcrumbs.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';

describe('AddCourseComponent', () => {
    let sut: AddCourseComponent;
    let fixture: ComponentFixture<AddCourseComponent>;
    let item: CourseItem;
    let saveSpy;
    let cancelSpy;
    let setDurationSpy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                DurationPipe,
                AddCourseComponent,
                BreadcrumbsComponent
            ],
            imports: [
                RouterTestingModule.withRoutes([]),
                HttpClientModule
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
        saveSpy = jasmine.createSpy('onSaveClick');
        cancelSpy = jasmine.createSpy('onCancelClick');
        setDurationSpy = jasmine.createSpy('setDuration');
        fixture = TestBed.createComponent(AddCourseComponent);
        sut = fixture.componentInstance;
        sut.onSaveClick = saveSpy;
        sut.onCancelClick = cancelSpy;
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });


    it('should show correct title label', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const titleDebugElement = debugElement.queryAll(By.css('.add__course_item--label'))[0];
        const element = titleDebugElement.nativeElement;
        expect(element.textContent).toBe('Title');
    });

    it('should show correct Description label', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const descriptionDebugElement = debugElement.queryAll(By.css('.add__course_item--label'))[1];
        const element = descriptionDebugElement.nativeElement;
        expect(element.textContent).toBe('Description');
    });

    it('should show correct Date label', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const dateDebugElement = debugElement.queryAll(By.css('.add__course_item--label'))[2];
        const element = dateDebugElement.nativeElement;
        expect(element.textContent).toBe('Date');
    });

    it('should show correct Duration label', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const durationDebugElement = debugElement.queryAll(By.css('.add__course_item--label'))[3];
        const element = durationDebugElement.nativeElement;
        expect(element.textContent).toBe('Duration');
    });

    it('should show correct save button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.queryAll(By.css('.add__course_button'))[0];
        const element = buttonDebugElement.nativeElement;
        expect(element.textContent).toBe('Save');
    });

    it('should call spy on save click', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        debugElement
            .queryAll(By.css('.add__course_button'))[0]
            .triggerEventHandler('click', null);

        expect(saveSpy).toHaveBeenCalled();
    });

    it('should call spy on save click on edit mode', () => {
        sut.item = item;

        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        debugElement
            .queryAll(By.css('.add__course_button'))[0]
            .triggerEventHandler('click', null);

        expect(saveSpy).toHaveBeenCalled();
    });

    it('should show correct cancel button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.queryAll(By.css('.add__course_button'))[1];
        const element = buttonDebugElement.nativeElement;
        expect(element.textContent).toBe('Cancel');
    });

    it('should call spy on cancel click', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;

        debugElement
            .queryAll(By.css('.add__course_button'))[1]
            .triggerEventHandler('click', null);

        expect(cancelSpy).toHaveBeenCalled();
    });
});
