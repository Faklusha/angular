import {Component, OnInit} from '@angular/core';
import {CoursesListService} from './coursesList.service';
import {SearchCoursesPipe} from './search-courses.pipe';

@Component({
    selector: 'app-courses',
    templateUrl: './coursesList.component.html',
    styleUrls: ['./coursesList.component.css'],
    providers: [SearchCoursesPipe]
})
export class CoursesListComponent implements OnInit {
    public courses;
    public allCourses;

    constructor(private coursesListService: CoursesListService, private searchCourses: SearchCoursesPipe) {
        this.courses = [];
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.allCourses = this.coursesListService.getCourses();
        this.courses = this.allCourses;
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

    removeItem(id: string) {
        console.log(id);
    }

    onLoadClick() {
        console.log('load');
    }

    onSearchClick(value: string) {
        if (!value) {
            this.courses = this.allCourses;
        }
        this.courses = this.searchCourses.transform(this.allCourses, value);
    }
}
