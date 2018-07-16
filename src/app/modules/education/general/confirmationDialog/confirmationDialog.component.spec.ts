import {ComponentFixture, TestBed} from '@angular/core/testing';
import {DebugElement} from '@angular/core';
import {ConfirmationDialogComponent} from './confirmationDialog.component';
import {By} from '@angular/platform-browser';

describe('ConfirmationDialogComponent', () => {
    let sut: ConfirmationDialogComponent;
    let fixture: ComponentFixture<ConfirmationDialogComponent>;
    let positiveAction;
    let negativeAction;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ConfirmationDialogComponent]
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConfirmationDialogComponent);
        sut = fixture.componentInstance;
        positiveAction = jasmine.createSpy('removeItem');
        negativeAction = jasmine.createSpy('removeItem');
        sut.positiveAction = positiveAction;
        sut.negativeAction = negativeAction;
    });

    it('should call positive action function', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement
            .queryAll(By.css('.confirmation-dialog__dialog_button'))[0]
            .triggerEventHandler('click', null);
        expect(positiveAction).toHaveBeenCalled();
    });

    it('should call negative action function', () => {
        fixture.detectChanges();
        const debugElement: DebugElement = fixture.debugElement;
        const buttonDebugElement = debugElement
            .queryAll(By.css('.confirmation-dialog__dialog_button'))[1]
            .triggerEventHandler('click', null);
        expect(negativeAction).toHaveBeenCalled();
    });
});
