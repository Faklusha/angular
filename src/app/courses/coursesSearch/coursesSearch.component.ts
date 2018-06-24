import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-courses-search',
    templateUrl: './coursesSearch.component.html',
    styleUrls: ['./coursesSearch.component.css']
})
export class CoursesSearchComponent implements OnInit {

    constructor() {
    }

    onSearchClick(value: string) {
        console.log(value);
    }

    ngOnInit() {
    }

}
