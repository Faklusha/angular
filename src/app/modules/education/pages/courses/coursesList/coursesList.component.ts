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
    private coursesCount: number;
    private startPosition: number;
    private textFragment?: string;

    constructor(private router: Router, private coursesListService: CoursesListService, private searchCourses: SearchCoursesPipe) {
    }

    ngOnChanges() {
        console.log('ngOnChanges');
    }

    ngOnInit() {
        this.coursesCount = 7;
        this.startPosition = 0;
        this.textFragment = null;
        this.coursesListService.getCourses(this.startPosition, this.coursesCount, this.textFragment).subscribe((res: CourseItem[]) => {
            this.courses = res;
        });
    }

    ngDoCheck(props) {
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

    removeItem = (id: number) => {
        this.courses = (this.coursesListService.removeCourse(id));
        this.coursesListService.getCourses(0, this.startPosition, this.textFragment).subscribe((res: CourseItem[]) => {
            this.courses = res;
        });
    }

    onLoadClick() {
        this.startPosition = this.startPosition + this.coursesCount;
        this.coursesListService.getCourses(this.startPosition, this.coursesCount, this.textFragment).subscribe((res: CourseItem[]) => {
            this.courses = this.courses.concat(res);
        });
    }

    onAddNewClick(id?: number) {
        if (id) {
            return this.router.navigate(['courses', id]);
        }
        return this.router.navigate(['courses/new']);
    }

    onSearchClick = (value: string) => {
        this.textFragment = value || null;
        this.coursesCount = 7;
        this.startPosition = 0;
        this.coursesListService.getCourses(this.startPosition, this.startPosition, this.textFragment).subscribe((res: CourseItem[]) => {
            this.courses = res;
        });
    }
}
