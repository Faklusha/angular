import {Injectable} from '@angular/core';
import {CourseItem} from '../courseItem/courseItem.model';

@Injectable({
    providedIn: 'root'
})
export class CoursesListService {

    constructor() {
    }

    public getCourses(): CourseItem[] {
        return [
            {
                title: 'Video Course 1',
                id: '1',
                creationDate: '05.03.2018',
                duration: '1h 28min',
                description: ' Some big text that describe course bla-bla-bla'
            },
            {
                title: 'Video Course 2',
                id: '2',
                creationDate: '05.03.2018',
                duration: '1h 28min',
                description: ' Some big text that describe course bla-bla-bla'
            },
            {
                title: 'Video Course 3',
                id: '4',
                creationDate: '05.03.2018',
                duration: '1h 28min',
                description: ' Some big text that describe course bla-bla-bla'
            },
            {
                title: 'Video Course 4',
                id: '4',
                creationDate: '05.03.2018',
                duration: '1h 28min',
                description: ' Some big text that describe course bla-bla-bla'
            },
            {
                title: 'Video Course 5',
                id: '5',
                creationDate: '05.03.2018',
                duration: '1h 28min',
                description: ' Some big text that describe course bla-bla-bla'
            },
        ];
    }
}
