import {Injectable} from '@angular/core';
import {User} from './users.model';
import {Router} from '@angular/router';
import {Token} from './token.model';
import {Store} from '@ngrx/store';
import * as authentification from './actions/AuthActions';
import * as fromRoot from './reducers/AuthReducer';
import {HttpService} from '../http/http.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    constructor(private store: Store<fromRoot.State>,
                private httpService: HttpService,
                private router?: Router) {
    }


    private removeUser() {
        this.store.dispatch(new authentification.RemoveUser());
    }

    private storeUser(user: User) {
        this.store.dispatch(new authentification.SetNewUser(user));
    }

    private storeToken(token?: string) {
        localStorage.setItem(this.httpService.TOKEN_KEY, token);
    }

    public login(login: string, password: string) {
        const query = `${this.httpService.BASE_URL}/auth/login`;
        const body =  {login, password};
        this.httpService.executeReq('post', query, body, (res: Token) => {
            this.storeToken(res.token);
            this.getCurrentUser();
        });
    }

    public getCurrentUser() {
        const query = `${this.httpService.BASE_URL}/auth/userinfo`;
        this.httpService.executeReq('post', query, {}, (user: User) => {
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
