import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/auth/authentication.service';
import * as fromRoot from '../services/auth/reducers/AuthReducer';
import {Store} from '@ngrx/store';
import {HttpService} from '../services/http/http.service';


@Injectable()
export class CanActivateGuard implements CanActivate {
    public isAuthenticated$;

    constructor(private store: Store<fromRoot.State>,
                private authenticationService: AuthenticationService,
                private httpService: HttpService,
                private router: Router) {
        this.isAuthenticated$ = this.store.select(fromRoot.getUser);
    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {

        this.isAuthenticated$.subscribe((state) => {
            if (!state.authState.isAuthenticated) {
                this.router.navigate(['login']);
            }
        });

        return new Observable<boolean>(observer => {
            observer.next(!!localStorage.getItem(this.httpService.TOKEN_KEY));
        });
    }
}
