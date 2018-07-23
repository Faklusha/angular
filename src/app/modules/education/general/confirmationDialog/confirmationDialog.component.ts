import {Component, EventEmitter, Output, OnInit} from '@angular/core';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmationDialog.component.html',
    styleUrls: ['./confirmationDialog.component.css']
})
export class ConfirmationDialogComponent {
    @Output() positiveAction = new EventEmitter();
    @Output() negativeAction = new EventEmitter();

    onNegativeAction = () => this.negativeAction.emit();

    onPositiveAction = () => this.positiveAction.emit();
}
