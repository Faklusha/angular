import {Pipe, PipeTransform} from '@angular/core';
import {CourseItem} from '../pages/courses/courseItem/courseItem.model';

@Pipe({
    name: 'creationDateOrder',
    pure: true
})
export class CreationDateOrderPipe implements PipeTransform {
    transform(courses: CourseItem[]) {
        return courses.sort((course, nextCourse) => {
            const courseTime = new Date(course.date).getTime();
            const nextCourseTime = new Date(nextCourse.date).getTime();
            return courseTime - nextCourseTime;
        });
    }
}
