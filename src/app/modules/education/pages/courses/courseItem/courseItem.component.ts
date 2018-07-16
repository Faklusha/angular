import {Component, OnInit, Input, Output} from '@angular/core';
import {CourseItem} from './courseItem.model';

@Component({
    selector: 'app-item',
    templateUrl: './courseItem.component.html',
    styleUrls: ['./courseItem.component.css']
})
export class CourseItemComponent implements OnInit {
    @Input() public item: CourseItem;
    @Input() public removeItem: Function;
    @Output('id') id: string;

    public isDialogOpened = false;

    constructor() {
    }

    onDeleteClick() {
        this.toggleDialog();
    }

    toggleDialog = () => this.isDialogOpened = !this.isDialogOpened;

    negativeAction = () => {
        this.toggleDialog();
    };

    positiveAction = () => {
        this.toggleDialog();
        this.removeItem(this.item.id);
    };

    ngOnInit() {
    }

}
