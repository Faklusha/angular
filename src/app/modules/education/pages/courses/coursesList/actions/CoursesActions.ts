import {Action} from '@ngrx/store';
import {User} from '../../../../services/auth/users.model';
import {CourseItem} from '../../courseItem/courseItem.model';
import {Author} from '../../../../general/authors/author.model';

export enum CoursesActionTypes {
    updateCourses = '[Courses] Update courses',
    updateAuthors = '[Courses] Update authors'
}

export class UpdateCourses implements Action {
    readonly type = CoursesActionTypes.updateCourses;

    constructor(public courses?: CourseItem[]) {
    }
}

export class UpdateAuthors implements Action {
    readonly type = CoursesActionTypes.updateAuthors;

    constructor(public authors?: Author[]) {
    }
}



export type CoursesActions = UpdateCourses | UpdateAuthors;
