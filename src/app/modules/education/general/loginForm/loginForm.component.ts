import {Component, OnInit, Input} from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';

@Component({
    selector: 'app-login',
    templateUrl: './loginForm.component.html',
    styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
    constructor(private authenticationService: AuthenticationService) {
    }

    ngOnInit() {
    }

    onLogInClick = (name: string, password: string) => this.authenticationService.login(name, password);
}
