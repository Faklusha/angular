import {User} from '../../../../services/auth/users.model';
import {CoursesActions, CoursesActionTypes} from '../actions/CoursesActions';
import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
} from '@ngrx/store';
import {CourseItem} from '../../courseItem/courseItem.model';

export interface State {
    courses?: CourseItem[];
    searchValue?: string;
}

const initialState: State = {
    courses: [],
    searchValue: null,
};

export function CourseReducer(state: State = initialState,
                              action: CoursesActions): State {
    switch (action.type) {
        case CoursesActionTypes.updateCourses:
            return {
                ...state,
                courses: action.courses,
            };

        case CoursesActionTypes.setSearchValue:
            return {
                ...state,
                searchValue: action.value
            };

        case CoursesActionTypes.removeCourse:
            return {
                ...state,
                courses: state.courses.filter(course => course.id !== action.id),
            };

        case CoursesActionTypes.loadCourses:
            return {
                ...state,
                courses: state.courses.concat(action.courses),
            };


        default:
            return state;
    }
}

export const getCourses = (state: State) => state;

