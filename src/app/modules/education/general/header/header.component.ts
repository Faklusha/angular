import {Component, OnInit, Input} from '@angular/core';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../services/auth/reducers/AuthReducer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public isAuthenticated;
    public userInfo: string = null;
    private subscription;
    public user$;

    constructor(private authenticationService: AuthenticationService,
                private store: Store<fromRoot.State>) {
        this.user$ = this.store.select(fromRoot.getUser);
    }

    ngOnInit() {
        this.subscription = this.user$.subscribe((state) => {
            const user = state.authState.user;
            this.isAuthenticated = state.authState.isAuthenticated;
            this.userInfo = user && user.name.first;
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }


    onLogOutClick = () => this.authenticationService.logout();
}
