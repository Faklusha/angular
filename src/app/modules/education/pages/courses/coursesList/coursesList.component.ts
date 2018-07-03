import {Component, OnInit} from '@angular/core';
import {CoursesListService} from './coursesList.service';

@Component({
    selector: 'app-courses',
    templateUrl: './coursesList.component.html',
    styleUrls: ['./coursesList.component.css']
})
export class CoursesListComponent implements OnInit {
    public courses;

    constructor(private coursesListService: CoursesListService) {
        this.courses = [];
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngOnInit() {
        console.log('ngOnInit');
        this.courses = this.coursesListService.getCourses();
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
        console.log(value);
    }
}
