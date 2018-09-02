import {Component, OnInit, Input, ChangeDetectionStrategy} from '@angular/core';
import {CoursesListService} from '../coursesList/coursesList.service';
import {CourseItem} from '../courseItem/courseItem.model';
import {Router, ActivatedRoute} from '@angular/router';
import {Store} from '@ngrx/store';
import * as fromRoot from '../coursesList/reducers/CoursesReducer';

@Component({
    selector: 'app-add',
    templateUrl: './addCourse.component.html',
    styleUrls: ['./addCourse.component.css'],
})
export class AddCourseComponent implements OnInit {
    public item: CourseItem;
    public id: number;
    public name: string;
    public date: string;
    public length: number;
    public description: string;
    public isTopRated: boolean;
    private courses$;
    private subscription;
    private courses: CourseItem[];

    constructor(private router: Router, private route: ActivatedRoute,
                private coursesListService: CoursesListService,
                private store: Store<fromRoot.State>) {
        this.courses$ = this.store.select(fromRoot.getCourses);

    }

    ngOnInit() {

        this.route.params.subscribe((data) => {
            this.id = Number.parseInt(data['id']);
        });

        this.subscription = this.courses$.subscribe((state) => {
            this.courses = state.coursesState.courses;
        });

        this.item = this.getCurrentCourse();

        this.name = this.item ? this.item.name : '';
        this.date = this.item ? this.item.date : '';
        this.length = this.item ? this.item.length : 0;
        this.description = this.item ? this.item.description : '';
        this.isTopRated = this.item ? this.item.isTopRated : false;
    }

    getCurrentCourse() {
        return this.id && this.courses.find(course => course.id === this.id);
    }

    onSaveClick = () => {
        const newItem = {
            id: this.id || Math.floor(Math.random() * (999 - 300)),
            name: this.name,
            date: this.date,
            length: this.length,
            description: this.description,
            isTopRated: this.isTopRated
        };
        this.coursesListService.addCourse(newItem);
        this.onCancelClick();
    }

    onCancelClick = () => {
        return this.router.navigate(['courses']);
    }

    updateItem = target => {
        if (target.name === 'length') {
            return this.length = Number.parseInt(target.value) || 0;
        }
        this[target.name] = target.value;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
