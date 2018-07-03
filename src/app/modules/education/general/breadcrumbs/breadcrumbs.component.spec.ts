import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { BreadcrumbsComponent } from './breadcrumbs.component';
import { By } from '@angular/platform-browser';

describe('BreadcrumbsComponent', () => {
    let sut: BreadcrumbsComponent;
    let fixture: ComponentFixture<BreadcrumbsComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BreadcrumbsComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BreadcrumbsComponent);
        sut = fixture.componentInstance;
    });

        it('should show correct title', () => {
            fixture.detectChanges();
            const debugElement: DebugElement = fixture.debugElement;
            const breadcrumbsDebugElement = debugElement.query(By.css('.breadcrumbs'));
            const breadcrumbs = breadcrumbsDebugElement.nativeElement;
            expect(breadcrumbs.textContent).toBe('Courses');
    });
});
