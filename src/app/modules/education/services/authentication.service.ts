import {Injectable, OnInit} from '@angular/core';
import {User} from './users.model';
import {Router} from '@angular/router';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Subject, Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Token} from './token.model';
import {LoadingBlockService} from '../general/loading-block/loading-block.service';
import { Store } from '@ngrx/store';
import * as authentification from '../actions/AuthActions';
import * as fromRoot from '../reducers/AuthReducer';
@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    // public user = new Subject<User>();
    private tokenKey = 'app_token';
    private BASE_URL = 'http://localhost:3004';
   // private user$: Observable<User>;

    constructor(private http: HttpClient, private loadingBlockService: LoadingBlockService,
                private store: Store<fromRoot.State>, private router?: Router) {

        // this.user$ = this.store.select(fromRoot.getUser);
    }


    private removeUser() {
        this.store.dispatch(new authentification.RemoveUser());
    }

    private storeUser(user: User) {
        this.store.dispatch(new authentification.SetNewUser(user));
    }

    private getUserToken(login: string, password: string): Observable<Token> {
        this.loadingBlockService.toggleLoadingBlock(true);
        return this.http.post<Token>(`${this.BASE_URL}/auth/login`, {login, password})
            .pipe(
                catchError(this.handleError)
            );
    }

    public getUser(): Observable<User> {
        this.loadingBlockService.toggleLoadingBlock(true);
        return this.http.post<User>(`${this.BASE_URL}/auth/userinfo`, {})
            .pipe(
                catchError(this.handleError)
            );
    }

    private storeToken(token?: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    public login(login: string, password: string) {
        this.getUserToken(login, password).subscribe((res: Token) => {
            this.loadingBlockService.toggleLoadingBlock(false);
            this.storeToken(res.token);
            this.getCurrentUser();
        });
    }

    public getCurrentUser() {
        this.getUser().subscribe((user: User) => {
            this.loadingBlockService.toggleLoadingBlock(false);
            this.storeUser(user);
            this.router.navigate(['courses']);
        });
    }

    public logout() {
        localStorage.removeItem(this.tokenKey);
        this.removeUser();
        return this.router.navigate(['login']);
    }

    // public isAuthenticated(): boolean {
    //     return !!localStorage.getItem(this.tokenKey);
    // }

    private handleError(error: HttpErrorResponse) {
        this.loadingBlockService.toggleLoadingBlock(false);
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
