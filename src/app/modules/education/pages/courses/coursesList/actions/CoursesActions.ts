import {Action} from '@ngrx/store';
import {User} from '../../../../services/auth/users.model';
import {CourseItem} from '../../courseItem/courseItem.model';

export enum CoursesActionTypes {
    addCourse = '[Courses] Add course',
    removeCourse = '[Courses] Remove course',

    loadCourses = '[Courses] Load courses',

    updateCourses = '[Courses] Update courses',
    setSearchValue = '[Courses] Set SearchValue',
}

export class RemoveCourse implements Action {
    readonly type = CoursesActionTypes.removeCourse;

    constructor(public id: number) {
    }
}

export class LoadCourses implements Action {
    readonly type = CoursesActionTypes.loadCourses;

    constructor(public courses?: CourseItem[]) {
    }
}

export class UpdateCourses implements Action {
    readonly type = CoursesActionTypes.updateCourses;

    constructor(public courses?: CourseItem[]) {
    }
}

export class SetSearchValue implements Action {
    readonly type = CoursesActionTypes.setSearchValue;

    constructor(public value?: string) {
    }
}


export type CoursesActions = UpdateCourses | SetSearchValue | RemoveCourse | LoadCourses;
