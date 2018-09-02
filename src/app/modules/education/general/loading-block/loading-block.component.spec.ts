import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LoadingBlockComponent} from './loading-block.component';
import {By} from '@angular/platform-browser';
import {DebugElement} from '@angular/core';

describe('LoadingBlockComponent', () => {
    let sut: LoadingBlockComponent;
    let fixture: ComponentFixture<LoadingBlockComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoadingBlockComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LoadingBlockComponent);
        sut = fixture.componentInstance;
    });

    it('should show correct title', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const blockDebugElement = debugElement.query(By.css('.loading-block__label'));
        const label = blockDebugElement.nativeElement;
        expect(label.textContent).toBe('Loading...');
    });
});
