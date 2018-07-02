import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesSearchComponent} from './coursesSearch.component';
import {CoursesOptionsComponent} from '../coursesOptions/coursesOptions.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('CoursesSearchComponent', () => {
    let sut: CoursesSearchComponent;
    let fixture: ComponentFixture<CoursesSearchComponent>;
    let searchSpy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesSearchComponent]
        });
    });

    beforeEach(() => {
        searchSpy = jasmine.createSpy('onSearchClick');
        fixture = TestBed.createComponent(CoursesSearchComponent); // abstraction used for test
        sut = fixture.componentInstance;
        sut.onSearchClick = searchSpy;
    });

    it('should show correct button title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement.query(By.css('.search__button'));
        const button = buttonDebugElement.nativeElement;
        expect(button.textContent).toBe('Search');
    });

    it('should call on search click', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        debugElement
            .query(By.css('.search__button'))
            .triggerEventHandler('click', null);
        expect(searchSpy).toHaveBeenCalled();
    });
});
