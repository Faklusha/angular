import {Component, OnInit, Input} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    public isAuthenticated;
    public userInfo;

    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
        if (this.isAuthenticated) {
            this.userInfo = this.authenticationService.getUserInfo();
        }
    }

    ngDoCheck() {
        this.isAuthenticated = this.authenticationService.isAuthenticated();
        this.userInfo = this.isAuthenticated ? this.authenticationService.getUserInfo() : null;
    }


    onLogOutClick = () => this.authenticationService.logout();
}
