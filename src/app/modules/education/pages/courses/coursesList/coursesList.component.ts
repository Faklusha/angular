import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursesListService} from './coursesList.service';
import {SearchCoursesPipe} from '../../../pipes/search-courses.pipe';
import {CourseItem} from '../courseItem/courseItem.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-courses',
    templateUrl: './coursesList.component.html',
    styleUrls: ['./coursesList.component.css'],
    providers: [SearchCoursesPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit {
    public courses;

    constructor(private router: Router, private coursesListService: CoursesListService, private searchCourses: SearchCoursesPipe) {
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.courses = this.coursesListService.getList();
    }

    ngDoCheck() {
        console.log('ngDoCheck');
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit');
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked');
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit');
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked');
    }

    ngOnDestroy() {
        console.log('ngOnDestroy');
    }

    removeItem = (id: string) => {
        this.courses = (this.coursesListService.removeCourse(id));
    };

    onLoadClick() {
        console.log('load');
    }

    onAddNewClick(id?: string) {
        if (id) {
            return this.router.navigate(['courses', id]);
        }
        return this.router.navigate(['courses/new']);
    }

    onSearchClick = (value: string) => {
        if (!value) {
            this.courses = this.coursesListService.getList();
        }
        this.courses = this.searchCourses.transform(this.courses, value);
    };

}
