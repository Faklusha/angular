import {Pipe, PipeTransform} from '@angular/core';
import {CourseItem} from '../pages/courses/courseItem/courseItem.model';

@Pipe({
    name: 'searchCourses'
})
export class SearchCoursesPipe implements PipeTransform {
    transform(courses: CourseItem[], value: string) {
        return courses.filter((course) => course.title.toLowerCase().includes(value.toLowerCase()));
    }
}