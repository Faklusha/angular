import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';

@Component({
    selector: 'app-master-page',
    templateUrl: './masterPage.component.html',
    styleUrls: ['./masterPage.component.css']
})
export class MasterPageComponent implements OnInit {
    public isAuthenticated;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
    }

    ngDoCheck(changes) {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
    }

}
