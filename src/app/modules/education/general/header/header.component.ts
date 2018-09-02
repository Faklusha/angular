import {Component, OnInit, Input} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {User} from '../../services/users.model';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../reducers/AuthReducer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public isAuthenticated;
    public user$;
    public userInfo = null;
    private subsc;

    constructor(private authenticationService: AuthenticationService, private store: Store<fromRoot.State>) {
        this.user$ = this.store.select(fromRoot.getUser);

// this.authenticationService.user.subscribe(
        //     (user: User) => {
        //         this.userInfo = user && user.name.first;
        //     });
    }

    ngOnInit() {// this.isAuthenticated = this.authenticationService.isAuthenticated();
       this.subsc = this.user$.subscribe((state) => {
            const user = state.authState.user;
            this.isAuthenticated = state.authState.isAuthenticated;
           this.userInfo = user && user.name.first;
       });
    }

    ngDoCheck() {
    }

    ngOnDestroy() {
        this.subsc.unsubscribe();
    }


    onLogOutClick = () => this.authenticationService.logout();
}
