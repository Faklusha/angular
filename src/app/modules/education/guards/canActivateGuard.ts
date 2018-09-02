import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';
import {User} from '../services/users.model';
import * as fromRoot from '../reducers/AuthReducer';
import {Store} from '@ngrx/store';


@Injectable()
export class CanActivateGuard implements CanActivate {
    private tokenKey = 'app_token';
    public isAuthenticated$;
 constructor(private store: Store<fromRoot.State>, private authenticationService: AuthenticationService, private router: Router) {
     this.isAuthenticated$ = this.store.select(fromRoot.getUser);

    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {

       this.isAuthenticated$.subscribe((state) => {
            if (!state.authState.isAuthenticated) {
                this.router.navigate(['login']);
            }
         });

        return new Observable<boolean>(observer => {
            observer.next(!!localStorage.getItem(this.tokenKey));
        });
    }
}
