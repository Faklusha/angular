import { Action } from '@ngrx/store';
import {User} from '../services/users.model';

export enum AuthenticationActionTypes {
    SetNewUser = '[Authentication] Set new user',
    RemoveUser = '[Authentication] Remove user',
}

export class SetNewUser implements Action {
    readonly type = AuthenticationActionTypes.SetNewUser;
    constructor(public user: User ) {
}
}

export class RemoveUser implements Action {
    readonly type = AuthenticationActionTypes.RemoveUser;
}

export type AuthenticationActions = SetNewUser | RemoveUser;
