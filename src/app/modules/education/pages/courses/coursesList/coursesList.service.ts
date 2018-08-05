import {Injectable} from '@angular/core';
import {CourseItem} from '../courseItem/courseItem.model';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Token} from '../../../services/token.model';

@Injectable({
    providedIn: 'root'
})
export class CoursesListService {
    private BASE_URL = 'http://localhost:3004';
    public courses: CourseItem[] = [];
    private coursesCount: number;
    private startPosition: number;
    private textFragment?: string;
    public isErrorExist = false;

    constructor(private http: HttpClient) {
    }

    public getCourses(): Observable<CourseItem[]> {
        let query = `${this.BASE_URL}/courses?start=${this.startPosition}&count=${this.coursesCount}`;
        if (this.textFragment) {
            query = query + `&textFragment=${this.textFragment}`;
        }
        return this.http.get<CourseItem[]>(query);
    }

    public addCourse(course): void {
        const query = `${this.BASE_URL}/courses/${course.id}`;
        this.http.post<CourseItem[]>(query, {course}).subscribe((res: CourseItem[]) => {
            console.log(res);
        });
    }

    public updateCourse(course): void {
        const query = `${this.BASE_URL}/courses/${course.id}`;
        this.http.put<CourseItem[]>(query, {course}).subscribe((res: CourseItem[]) => {
            console.log(res);
        });
    }

    public getList() {
        this.coursesCount = 7;
        this.startPosition = 0;
        this.textFragment = null;

        this.getCourses().subscribe((res: CourseItem[]) => {
            this.courses = res;
        })
    }

    public loadList() {
        this.startPosition = this.startPosition + this.coursesCount;
        this.getCourses().subscribe((res: CourseItem[]) => {
            this.courses = this.courses.concat(res);
        });
    }

    public searchList(textFragment?: string) {
        this.textFragment = textFragment || null;
        this.startPosition = 0;
        this.getCourses().subscribe((res: CourseItem[]) => {
            this.courses = res;
        });
    }

    public getCourse(id: number): CourseItem {
        return this.courses.find(course => course.id === id);
    }

    public removeCourse(id: number): void {
        this.courses = this.courses.filter(course => course.id !== id);
    }
}
