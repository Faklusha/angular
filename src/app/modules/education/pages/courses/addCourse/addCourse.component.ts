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
    public id: string;
    public title: string;
    public creationDate: string;
    public duration: string;
    public description: string;
    public topRated: boolean;

    constructor(private router: Router, private route: ActivatedRoute, private coursesListService: CoursesListService) {

    }

    ngOnInit() {
        this.route.params.subscribe((data) => {
            this.id = data['id'];
        });

        this.item = this.coursesListService.getCourse(this.id);

        this.title = this.item ? this.item.title : '';
        this.creationDate = this.item ? this.item.creationDate : '';
        this.duration = this.item ? this.item.duration : '';
        this.description = this.item ? this.item.description : '';
        this.topRated = this.item ? this.item.topRated : false;
    }

    onSaveClick = () => {
        const newItem = {
            id: this.id || Math.random().toString(),
            title: this.title,
            creationDate: this.creationDate,
            duration: this.duration,
            description: this.description,
            topRated: this.topRated
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

    setDuration = (value: string) => this.duration = value;

    updateItem = target => this[target.name] = target.value;
}
