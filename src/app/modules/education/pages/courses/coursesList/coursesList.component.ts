import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursesListService} from './coursesList.service';
import {SearchCoursesPipe} from '../../../pipes/search-courses.pipe';
import {CourseItem} from '../courseItem/courseItem.model';

@Component({
    selector: 'app-courses',
    templateUrl: './coursesList.component.html',
    styleUrls: ['./coursesList.component.css'],
    providers: [SearchCoursesPipe],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoursesListComponent implements OnInit {
    @Output() toggleAddPage = new EventEmitter<CourseItem>();

    public courses;

    constructor(private coursesListService: CoursesListService, private searchCourses: SearchCoursesPipe) {
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

    onSearchClick = (value: string) => {
        if (!value) {
            this.courses = this.coursesListService.getList();
        }
        this.courses = this.searchCourses.transform(this.courses, value);
    }

    onToggle = (item?: CourseItem) => this.toggleAddPage.emit(item);
}
