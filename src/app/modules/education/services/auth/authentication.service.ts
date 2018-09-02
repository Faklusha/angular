import {Injectable, OnInit} from '@angular/core';
import {User} from './users.model';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Token} from './token.model';
import {LoadingBlockService} from '../../general/loading-block/loading-block.service';
import {Store} from '@ngrx/store';
import * as authentification from './actions/AuthActions';
import * as fromRoot from './reducers/AuthReducer';
import {HttpService} from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private http: HttpClient,
                private loadingBlockService: LoadingBlockService,
                private store: Store<fromRoot.State>,
                private httpService: HttpService,
                private router?: Router) {
    }


    private removeUser() {
        this.store.dispatch(new authentification.RemoveUser());
    }

    private storeUser(user: User) {
        this.store.dispatch(new authentification.SetNewUser(user));
    }

    private getUserToken(login: string, password: string): Observable<Token> {
        this.loadingBlockService.toggleLoadingBlock(true);
        return this.http.post<Token>(`${this.httpService.BASE_URL}/auth/login`, {login, password})
            .pipe(
                catchError(this.httpService.handleError)
            );
    }

    public getUser(): Observable<User> {
        this.loadingBlockService.toggleLoadingBlock(true);
        return this.http.post<User>(`${this.httpService.BASE_URL}/auth/userinfo`, {})
            .pipe(
                catchError(this.httpService.handleError)
            );
    }

    private storeToken(token?: string) {
        localStorage.setItem(this.httpService.TOKEN_KEY, token);
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
        localStorage.removeItem(this.httpService.TOKEN_KEY);
        this.removeUser();
        return this.router.navigate(['login']);
    }
}
