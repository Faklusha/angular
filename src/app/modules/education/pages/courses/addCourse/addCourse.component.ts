import {Component, OnInit, Input, Output, ChangeDetectionStrategy} from '@angular/core';
import {CoursesListService} from '../coursesList/coursesList.service';
import {CourseItem} from '../courseItem/courseItem.model';

@Component({
    selector: 'app-add',
    templateUrl: './addCourse.component.html',
    styleUrls: ['./addCourse.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseComponent implements OnInit {
    @Input() public toggleAddPage: Function;
    @Input() public item: CourseItem;

    constructor(private coursesListService: CoursesListService) {

    }

    ngOnInit() {
        if (!this.item) {
            this.item = {
                id: Math.random().toString(),
                title: '',
                creationDate: '',
                duration: '',
                description: '',
                topRated: false
            };
        }
    }

    onSaveClick = (title?: string, description?: string, date?: string, duration?: string) => {
        const newItem = {
            id: this.item.id,
            title,
            creationDate: date,
            duration,
            description,
            topRated: false
        };
        if (this.item) {
            this.coursesListService.updateCourse(newItem);
        } else {
            this.coursesListService.createCourse(newItem);
        }
        this.onCancelClick();
    };

    onCancelClick = () => this.toggleAddPage();

    setDuration = (value: string) => this.item.duration = value;
}
