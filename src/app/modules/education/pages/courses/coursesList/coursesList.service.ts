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
    private courses: CourseItem[] = [];

    constructor(private http: HttpClient) {
    }


    public getCourses(startPosition: number, coursesCount: number, textFragment?: string): Observable<CourseItem[]> {
        let query = `${this.BASE_URL}/courses?start=${startPosition}&count=${coursesCount}`;
        if (textFragment) {
            query = query + `&textFragment=${textFragment}`;
        }
        return this.http.get<CourseItem[]>(query);
    }

    public createCourse(course: CourseItem): CourseItem[] {
        this.courses.push(course);
        return this.courses;
    }

    public getCourse(id: number): CourseItem {
        return this.courses.find(course => course.id === id);
    }

    public updateCourse(updatedCourse: CourseItem): CourseItem[] {
        this.courses = this.courses.filter(course => course.id !== updatedCourse.id);
        this.courses.push(updatedCourse);
        return this.courses;
    }


    public removeCourse(id: number): CourseItem[] {
        this.courses = this.courses.filter(course => course.id !== id);
        return this.courses;
    }
}
