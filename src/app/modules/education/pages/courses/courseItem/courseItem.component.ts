import {Component, OnInit, Input, Output, ChangeDetectionStrategy, EventEmitter} from '@angular/core';
import {CourseItem} from './courseItem.model';

@Component({
    selector: 'app-item',
    templateUrl: './courseItem.component.html',
    styleUrls: ['./courseItem.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseItemComponent {
    @Input() public item: CourseItem;
    @Output() removeItem = new EventEmitter<string>();
    @Output() onAddNewClick = new EventEmitter<string>();

    public isDialogOpened = false;

    onDeleteClick = () => this.toggleDialog();

    toggleDialog = () => this.isDialogOpened = !this.isDialogOpened;

    negativeAction = () => this.toggleDialog();

    positiveAction = () => {
        this.toggleDialog();
        this.removeItem.emit(this.item.id);
    };

    onEditClick = () => this.onAddNewClick.emit(this.item.id);
}


