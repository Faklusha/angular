import {Injectable} from '@angular/core';
import {CourseItem} from '../courseItem/courseItem.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {LoadingBlockService} from '../../../general/loading-block/loading-block.service';
import * as fromRoot from './reducers/CoursesReducer';
import {Store} from '@ngrx/store';
import * as CoursesActions from './actions/CoursesActions';
import {HttpService} from '../../../services/http/http.service';

@Injectable({
    providedIn: 'root'
})
export class CoursesListService {
    public courses: CourseItem[] = [];
    private coursesCount: number;
    private startPosition: number;
    private textFragment?: string;
    public isErrorExist = false;
    private courses$;

    constructor(private http: HttpClient,
                private loadingBlockService: LoadingBlockService,
                private httpService: HttpService,
                private store: Store<fromRoot.State>) {
        this.courses$ = this.store.select(fromRoot.getCourses);
    }

    private updateCourses(courses?: CourseItem[]) {
        this.store.dispatch(new CoursesActions.UpdateCourses(courses));
    }

    private loadCourses(courses?: CourseItem[]) {
        this.store.dispatch(new CoursesActions.LoadCourses(courses));
    }

    public removeCourse(id: number): void {
        this.store.dispatch(new CoursesActions.RemoveCourse(id));
    }

    public getCourses(): Observable<CourseItem[]> {
        let query = `${this.httpService.BASE_URL}/courses?start=${this.startPosition}&count=${this.coursesCount}`;
        if (this.textFragment) {
            query = query + `&textFragment=${this.textFragment}`;
        }
        this.loadingBlockService.toggleLoadingBlock(true);

        return this.http.get<CourseItem[]>(query)
            .pipe(
                catchError(this.httpService.handleError)
            );
    }

    public addCourse(course): void {
        const query = `${this.httpService.BASE_URL}/courses/${course.id}`;
        this.loadingBlockService.toggleLoadingBlock(true);

        this.http.post<CourseItem[]>(query, {course}).subscribe((res: CourseItem[]) => {
            catchError(this.httpService.handleError);
        });
    }

    public getList() {
        this.coursesCount = 7;
        this.startPosition = 0;
        this.textFragment = null;

        this.getCourses().subscribe((res: CourseItem[]) => {
            this.loadingBlockService.toggleLoadingBlock(false);
            this.updateCourses(res);
        });
    }

    public loadList() {
        this.startPosition = this.startPosition + this.coursesCount;
        this.getCourses().subscribe((res: CourseItem[]) => {
            this.loadingBlockService.toggleLoadingBlock(false);
            this.loadCourses(res);
        });
    }

    public searchList(textFragment ?: string) {
        this.textFragment = textFragment || null;
        this.startPosition = 0;
        this.getCourses().subscribe((res: CourseItem[]) => {
            this.loadingBlockService.toggleLoadingBlock(false);
            this.updateCourses(res);
        });
    }
}
