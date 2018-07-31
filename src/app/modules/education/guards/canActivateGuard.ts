import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../services/authentication.service';


@Injectable()
export class CanActivateGuard implements CanActivate {
    constructor(private authenticationService: AuthenticationService, private router: Router) {

    }

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
        const isAuthenticated = this.authenticationService.isAuthenticated();

        if (isAuthenticated) {
            return true;
        }
        this.router.navigate(['login']);
        return false;
    }
}
