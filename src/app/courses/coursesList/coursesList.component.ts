import {Component, OnInit} from '@angular/core';
import {CoursesListService} from './coursesList.service';

@Component({
    selector: 'app-list',
    templateUrl: './coursesList.component.html',
    styleUrls: ['./coursesList.component.css']
})
export class CoursesListComponent implements OnInit {
    public courses;

    constructor(private coursesListService: CoursesListService) {
        this.courses = [];
    }

    ngOnInit() {
        console.log('init');
        this.courses = this.coursesListService.getCourses();
    }

    removeItem(id: string) {
        console.log(id);
    }

    onLoadClick() {
        console.log('load');
    }
}
