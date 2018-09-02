import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursesListService} from './coursesList.service';
import {CourseItem} from '../courseItem/courseItem.model';
import {Router} from '@angular/router';
import {debounceTime, filter} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as fromRoot from '../../../reducers/CourseReducer';
import {Store} from '@ngrx/store';

@Component({
    selector: 'app-courses',
    templateUrl: './coursesList.component.html',
    styleUrls: ['./coursesList.component.css'],
})
export class CoursesListComponent implements OnInit {
    public courses$;
    private searchAction = new Subject<string>();
    private subsc;
    public courses;


    constructor(private router: Router, private coursesListService: CoursesListService, private store: Store<fromRoot.State>) {
        this.searchAction
            .pipe(
                debounceTime(1000),
                filter(value => value.length > 2)
            )
            .subscribe(value => {
                this.coursesListService.searchList(value);
            });

        this.courses$ = this.store.select(fromRoot.getCourses);

    }

    ngOnInit() {
        this.subsc = this.courses$.subscribe((state) => {
            this.courses = state.coursesState.courses;
        });

        this.coursesListService.getList();
    }

    //
    // ngDoCheck() {
    //     // this.courses = this.coursesListService.courses;
    // }

    removeItem = (id: number) => {
        this.coursesListService.removeCourse(id);
    };

    onLoadClick() {
        this.coursesListService.loadList();
    }

    onAddNewClick(id?: number) {
        if (id) {
            return this.router.navigate(['courses', id]);
        }
        return this.router.navigate(['courses/new']);
    }

    onSearchClick = (value?: string) => {
        this.searchAction.next(value);
    };

    ngOnDestroy() {
        this.subsc.unsubscribe();
    }

}
