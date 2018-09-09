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
import {Author} from '../../../../general/authors/author.model';

export interface State {
    courses?: CourseItem[];
    searchValue?: string;
    authors?: Author[];
}

const initialState: State = {
    courses: [],
    authors: [],
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

        case CoursesActionTypes.updateAuthors:
            return {
                ...state,
                authors: action.authors,
            };

            default:
            return state;
    }
}

export const getCourses = (state: State) => state;

