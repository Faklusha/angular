import {Injectable} from '@angular/core';
import {User} from './users.model';
import {first} from 'rxjs/internal/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    public user: User;
    private tokenKey = 'app_token';


    constructor() {
    }

    private store(token?: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    public login(name: string, password: string): void {
        console.log(name, password);
        this.user = {
            id: '1',
            firstName: 'Ivan',
            lastName: 'Ivanov'
        };

        return this.store(`${this.user.id}_${this.user.firstName}_${this.user.lastName}`);
    }

    public logout(): void {
        this.user = null;
        localStorage.removeItem(this.tokenKey);
    }

    public isAuthenticated(): boolean {
        return this.user && !!localStorage.getItem(this.tokenKey);
    }

    public getUserInfo(): string {
        return this.user && this.user.firstName;
    }
}
