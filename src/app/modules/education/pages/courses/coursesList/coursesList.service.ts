import {Injectable} from '@angular/core';
import {CourseItem} from '../courseItem/courseItem.model';
import * as fromRoot from './reducers/CoursesReducer';
import {Store} from '@ngrx/store';
import * as CoursesActions from './actions/CoursesActions';
import {HttpService} from '../../../services/http/http.service';
import {Author} from '../../../general/authors/author.model';

@Injectable({
    providedIn: 'root'
})
export class CoursesListService {
    private coursesCount: number;
    private startPosition: number;
    private textFragment?: string;
    private courses$;

    constructor(private httpService: HttpService,
                private store: Store<fromRoot.State>) {
        this.courses$ = this.store.select(fromRoot.getCourses);
    }

    private updateCourses(courses?: CourseItem[]) {
        this.store.dispatch(new CoursesActions.UpdateCourses(courses));
    }

    private updateAuthors(authors?: Author[]) {
        this.store.dispatch(new CoursesActions.UpdateAuthors(authors));
    }

    public getCourses(cb) {
        let query = `${this.httpService.BASE_URL}/courses?start=${this.startPosition}&count=${this.coursesCount}`;
        if (this.textFragment) {
            query = query + `&textFragment=${this.textFragment}`;
        }

        this.httpService.executeReq('get', query, {}, cb);
    }

    public getList() {
        this.coursesCount = 7;
        this.startPosition = 0;
        this.textFragment = null;

        return this.getCourses((res: CourseItem[]) => {
            this.updateCourses(res);
        });
    }

    public loadList(courses?: CourseItem[]) {
        this.startPosition = this.startPosition + this.coursesCount;
        return this.getCourses((res: CourseItem[]) => this.updateCourses(courses.concat(res)));
    }

    public searchList(textFragment ?: string) {
        this.textFragment = textFragment || null;
        this.startPosition = 0;
        return this.getCourses((res: CourseItem[]) => {
            this.updateCourses(res);
        });
    }

    public addCourse(course): void {
        const query = `${this.httpService.BASE_URL}/courses/${course.id}`;
        this.httpService.executeReq('post', query, {course});
    }


    public removeCourse(id: number, courses?: CourseItem[]): void {
        this.updateCourses(courses.filter(course => course.id !== id));
    }

    public getAuthorsList() {
        const query = `${this.httpService.BASE_URL}/authors`;
        this.httpService.executeReq('get', query, {}, (res: Author[]) => {
            this.updateAuthors(res);
        });
    }


}
