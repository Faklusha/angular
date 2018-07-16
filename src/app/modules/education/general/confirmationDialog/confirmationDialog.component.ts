import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-confirmation',
    templateUrl: './confirmationDialog.component.html',
    styleUrls: ['./confirmationDialog.component.css']
})
export class ConfirmationDialogComponent implements OnInit {
    @Input() public positiveAction: Function;
    @Input() public negativeAction: Function;

    constructor() {
    }

    ngOnInit() {
    }

    onNegativeAction = () => {
        this.negativeAction();
    };

    onPositiveAction = () => {
        this.positiveAction();
    };


}
