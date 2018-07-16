import {Injectable} from '@angular/core';
import {CourseItem} from '../courseItem/courseItem.model';

@Injectable({
    providedIn: 'root'
})
export class CoursesListService {

    constructor() {
    }

    private courses = [
        {
            title: 'Video Course 1',
            id: '1',
            creationDate: 'July 07 2018',
            duration: '66',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: true
        },
        {
            title: 'Video Course 2',
            id: '2',
            creationDate: 'July 11 2018',
            duration: '122',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: true
        },
        {
            title: 'Video Course 3',
            id: '3',
            creationDate: 'July 04 2018',
            duration: '4',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: false
        },
        {
            title: 'Video Course 4',
            id: '4',
            creationDate: 'July 17 2018',
            duration: '140',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: false
        },
        {
            title: 'Video Course 5',
            id: '5',
            creationDate: 'July 01 2019',
            duration: '40',
            description: ' Some big text that describe course bla-bla-bla',
            topRated: false
        },
    ];

    public getList(): CourseItem[] {
        return this.courses;
    }

    public createCourse(course: CourseItem): CourseItem[] {
        this.courses.push(course);
        return this.courses;
    }

    public getCourse(id: string): CourseItem {
        return this.courses.find(course => course.id === id);
    }

    public updateCourse(updatedCourse: CourseItem): CourseItem[] {
        this.courses = this.courses.filter(course => course.id !== updatedCourse.id);
        this.courses.push(updatedCourse);
        return this.courses;
    }


    public removeCourse(id: string): CourseItem[] {
        this.courses = this.courses.filter(course => course.id !== id);
        return this.courses;
    }
}
