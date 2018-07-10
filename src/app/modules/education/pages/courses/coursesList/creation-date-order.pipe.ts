import {Pipe, PipeTransform} from '@angular/core';
import {CourseItem} from '../courseItem/courseItem.model';

@Pipe({
    name: 'creationDateOrder',
    pure: true
})
export class CreationDateOrderPipe implements PipeTransform {
    transform(courses: CourseItem[]) {
        return courses.sort((course, nextCourse) => {
            const courseTime = new Date(course.creationDate).getTime();
            const nextCourseTime = new Date(nextCourse.creationDate).getTime();
            return courseTime - nextCourseTime;
        });
    }
}
