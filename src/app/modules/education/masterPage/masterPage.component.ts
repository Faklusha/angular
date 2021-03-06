import {Component, ViewEncapsulation, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router, RouterEvent, ActivatedRoute} from '@angular/router';

import {AuthenticationService} from '../services/auth/authentication.service';
import {CourseItem} from '../pages/courses/courseItem/courseItem.model';
import {State} from '../services/auth/reducers/AuthReducer';
import {Store} from '@ngrx/store';
import * as fromRoot from '../services/auth/reducers/AuthReducer';

@Component({
    selector: 'app-master-page',
    templateUrl: './masterPage.component.html',
    styleUrls: ['./masterPage.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class MasterPageComponent implements OnInit {
    public user$;
    private subscription;

    constructor(private store: Store<State>, private authenticationService: AuthenticationService) {
        this.user$ = this.store.select(fromRoot.getUser);
    }

    ngOnInit() {
        this.subscription = this.user$.subscribe((state) => {
            const user = state.authState.user;
            const isAuthenticated = state.authState.isAuthenticated;
            if (!user && isAuthenticated) {
                this.authenticationService.getCurrentUser();
            }
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}
