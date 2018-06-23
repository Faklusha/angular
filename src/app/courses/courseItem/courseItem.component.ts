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

    constructor() {
    }

    onDeleteClick(id: string) {
        this.removeItem(id);
    }

    ngOnInit() {
    }

}
