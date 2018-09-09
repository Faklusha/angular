import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseItem} from '../../pages/courses/courseItem/courseItem.model';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../pages/courses/coursesList/reducers/CoursesReducer';

@Component({
    selector: 'app-breadcrumbs',
    templateUrl: './breadcrumbs.component.html',
    styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
    public id: string;
    public item?: string;
    public courses: CourseItem[];
    private courses$;
    private subsciption;

    constructor(private route: ActivatedRoute,
                private store: Store<fromRoot.State>) {
        this.courses$ = this.store.select(fromRoot.getCourses);
    }


    ngOnInit() {
        this.route.params.subscribe((data) => {
            this.id = data['id'];
        });

        this.subsciption = this.courses$.subscribe((state) => {
            this.courses = state.coursesState.courses;
        });

        if (!this.id) {
            return;
        }

        if (this.id === 'new') {
            return this.item = 'add new Course';
        }

        const currentCourse: CourseItem = this.getCurrentCourse();
        this.item = currentCourse && currentCourse.name;

    }

    getCurrentCourse() {
        return this.id && this.courses.find(course => course.id === Number.parseInt(this.id));
    }

    ngOnDestroy() {
        this.subsciption.unsubscribe();
    }

}
