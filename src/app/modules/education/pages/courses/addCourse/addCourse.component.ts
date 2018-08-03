import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {CoursesListService} from '../coursesList/coursesList.service';
import {CourseItem} from '../courseItem/courseItem.model';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-add',
    templateUrl: './addCourse.component.html',
    styleUrls: ['./addCourse.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCourseComponent implements OnInit {
    public item: CourseItem;
    public id: number;
    public name: string;
    public date: string;
    public length: number;
    public description: string;
    public isTopRated: boolean;

    constructor(private router: Router, private route: ActivatedRoute, private coursesListService: CoursesListService) {

    }

    ngOnInit() {
        this.route.params.subscribe((data) => {
            this.id = Number.parseInt(data['id']);
        });

        this.item = this.coursesListService.getCourse(this.id);

        this.name = this.item ? this.item.name : '';
        this.date = this.item ? this.item.date : '';
        this.length = this.item ? this.item.length : 0;
        this.description = this.item ? this.item.description : '';
        this.isTopRated = this.item ? this.item.isTopRated : false;
    }

    onSaveClick = () => {
        const newItem = {
            id: this.id || Math.random(),
            name: this.name,
            date: this.date,
            length: this.length,
            description: this.description,
            isTopRated: this.isTopRated
        };
        if (this.item) {
            this.coursesListService.updateCourse(newItem);
        } else {
            this.coursesListService.createCourse(newItem);
        }
        this.onCancelClick();
    }

    onCancelClick = () => {
        return this.router.navigate(['courses']);
    }

    setDuration = (value: number) => this.length = value;

    updateItem = target => this[target.name] = target.value;
}
