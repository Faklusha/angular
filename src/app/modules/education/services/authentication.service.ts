import {Injectable} from '@angular/core';
import {User} from './users.model';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Token} from './token.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    public user: User;
    private tokenKey = 'app_token';
    private BASE_URL = 'http://localhost:3004';

    constructor(private http: HttpClient, private router?: Router) {
    }

    private getUserToken(login: string, password: string): Observable<Token> {
        return this.http.post<Token>(`${this.BASE_URL}/auth/login`, {login, password})
            .pipe(
                catchError(this.handleError)
            );
    }

    private getUser(): Observable<User> {
        return this.http.post<User>(`${this.BASE_URL}/auth/userinfo`, {})
            .pipe(
                catchError(this.handleError)
            );
    }

    private store(token?: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    public login(login: string, password: string) {
        this.getUserToken(login, password).subscribe((res: Token) => {
            this.store(res.token);
            this.getUserInfo();
        });
    }

    public logout() {
        this.user = null;
        localStorage.removeItem(this.tokenKey);
        return this.router.navigate(['login']);
    }

    public isAuthenticated(): boolean {
        return this.user && !!localStorage.getItem(this.tokenKey);
    }

    private getUserInfo() {
        this.getUser().subscribe((user: User) => {
            this.user = user;
            this.router.navigate(['courses']);
        });
    }

    public getUserName(): string {
        return this.user && this.user.name.first;
    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('An error occurred:', error.error.message);
        } else {
            console.error(
                `Backend returned code ${error.status}, ` +
                `body was: ${error.error}`);
        }
        return throwError(
            'Something bad happened; please try again later.');
    }
}
