import {Injectable} from '@angular/core';
import {User} from './users.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor() {
    }

    public getUser(): User {
        return {
            id: '1',
            firstName: 'Ivan',
            lastName: 'Ivanov'
        };
    }
}
