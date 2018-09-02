import {User} from '../users.model';
import {AuthenticationActions, AuthenticationActionTypes} from '../actions/AuthActions';

export interface State {
    user?: User;
    isAuthenticated: boolean;
}

const tokenKey = 'app_token';


const initialState: State = {
    user: null,
    isAuthenticated: !!localStorage.getItem(tokenKey),
};

export function AuthReducer(state: State = initialState,
                            action: AuthenticationActions): State {
    console.log(action);
    switch (action.type) {
        case AuthenticationActionTypes.SetNewUser:
            return {
                user: action.user,
                isAuthenticated: true,
            };

        case AuthenticationActionTypes.RemoveUser:
            return {
                user: null,
                isAuthenticated: false
            };

        default:
            return state;
    }
}

export const getUser = (state: State) => state;

