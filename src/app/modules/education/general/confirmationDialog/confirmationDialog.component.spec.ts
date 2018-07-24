import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {ConfirmationDialogComponent} from './confirmationDialog.component';
import {By} from '@angular/platform-browser';

describe('ConfirmationDialogComponent', () => {
    let sut: ConfirmationDialogComponent;
    let fixture: ComponentFixture<ConfirmationDialogComponent>;
    let onPositiveAction;
    let onNegativeAction;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmationDialogComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmationDialogComponent);
        sut = fixture.componentInstance;
        onNegativeAction = jasmine.createSpy('onNegativeAction');
        onPositiveAction = jasmine.createSpy('onPositiveAction');
        sut.onNegativeAction = onNegativeAction;
        sut.onPositiveAction = onPositiveAction;
    });

    it('should call positive action function', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement
            .queryAll(By.css('.confirmation-dialog__dialog_button'))[0]
            .triggerEventHandler('click', null);
        expect(onPositiveAction).toHaveBeenCalled();
    });

    it('should call negative action function', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement
            .queryAll(By.css('.confirmation-dialog__dialog_button'))[1]
            .triggerEventHandler('click', null);
        expect(onNegativeAction).toHaveBeenCalled();
    });
});
