import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursesListService} from './coursesList.service';
import {CourseItem} from '../courseItem/courseItem.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './coursesList.component.html',
    styleUrls: ['./coursesList.component.css'],
})
export class CoursesListComponent implements OnInit {
    public courses;

    constructor(private router: Router, private coursesListService: CoursesListService, private searchCourses: SearchCoursesPipe) {
    }

    ngOnInit() {
        this.coursesListService.getList();
        this.courses = this.coursesListService.courses;
    }


    ngDoCheck() {
        this.courses = this.coursesListService.courses;
}

removeItem = (id: number) => {
    this.coursesListService.removeCourse(id);
}

    onLoadClick() {
        this.coursesListService.loadList();
    }

    onAddNewClick(id?: number) {
        if (id) {
            return this.router.navigate(['courses', id]);
        }
        return this.router.navigate(['courses/new']);
    }

    onSearchClick = (value: string) => {
        this.coursesListService.searchList(value);
    }
}
