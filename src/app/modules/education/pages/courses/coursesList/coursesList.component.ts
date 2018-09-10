import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CoursesListService} from './coursesList.service';
import {CourseItem} from '../courseItem/courseItem.model';
import {Router} from '@angular/router';
import {debounceTime, filter} from 'rxjs/operators';
import {Subject} from 'rxjs';
import * as fromRoot from './reducers/CoursesReducer';
import {Store} from '@ngrx/store';
import {FormControl} from '@angular/forms';

@Component({
    selector: 'app-courses',
    templateUrl: './coursesList.component.html',
    styleUrls: ['./coursesList.component.css'],
})
export class CoursesListComponent implements OnInit {
    public courses$;
    private searchAction = new Subject<string>();
    private subscription;
    public courses;
    public search;


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
        this.search = new FormControl('');

        this.subscription = this.courses$.subscribe((state) => {
            this.courses = state.coursesState.courses;
        });

        this.coursesListService.getList();
    }


    removeItem = (id: number) => {
        this.coursesListService.removeCourse(id, this.courses);
    };

    onLoadClick() {
        this.coursesListService.loadList(this.courses);
    }

    onAddNewClick(id?: number) {
        if (id) {
            return this.router.navigate(['courses', id]);
        }
        return this.router.navigate(['courses/new']);
    }

    onSearchInputChange = () => {
        this.searchAction.next(this.search.value);
    };

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
