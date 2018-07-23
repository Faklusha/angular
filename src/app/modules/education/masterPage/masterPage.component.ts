import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {CourseItem} from '../pages/courses/courseItem/courseItem.model';

@Component({
    selector: 'app-master-page',
    templateUrl: './masterPage.component.html',
    styleUrls: ['./masterPage.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MasterPageComponent implements OnInit {
    public isAuthenticated: boolean;
    public isAddPage: boolean;
    public currentItem?: CourseItem;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
        this.isAddPage = false;
    }

    ngDoCheck() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
    }

    toggleAddPage = (item: CourseItem) => {
        if (this.isAddPage) {
            this.currentItem = null;
        } else {
            this.currentItem = item || null;
        }
        this.isAddPage = !this.isAddPage;
    }
}
