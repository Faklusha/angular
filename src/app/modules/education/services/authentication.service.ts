import {Injectable} from '@angular/core';
import {User} from './users.model';
import {first} from 'rxjs/internal/operators';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    public user: User;
    private tokenKey = 'app_token';

    constructor(private router: Router) {}

    private store(token?: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    public login(name: string, password: string) {
        console.log(name, password);
        this.user = {
            id: '1',
            firstName: 'Ivan',
            lastName: 'Ivanov'
        };

        this.store(`${this.user.id}_${this.user.firstName}_${this.user.lastName}`);
        return this.router.navigate(['courses']);
    }

    public logout() {
        this.user = null;
        localStorage.removeItem(this.tokenKey);
        return this.router.navigate(['login']);
    }

    public isAuthenticated(): boolean {
        return this.user && !!localStorage.getItem(this.tokenKey);
    }

    public getUserInfo(): string {
        return this.user && this.user.firstName;
    }
}
