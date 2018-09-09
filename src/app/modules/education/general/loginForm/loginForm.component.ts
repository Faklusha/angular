import {Component, OnInit, Input} from '@angular/core';
import {AuthenticationService} from '../../services/auth/authentication.service';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {DurationValidator} from '../../directives/duration-validator.directive';
import {DateValidator} from '../../directives/date-validator.directive';

@Component({
    selector: 'app-login',
    templateUrl: './loginForm.component.html',
    styleUrls: ['./loginForm.component.css']
})
export class LoginFormComponent implements OnInit {
    public form;

    constructor(private authenticationService: AuthenticationService) {
    }


    ngOnInit() {
this.form = new FormGroup({
            name: new FormControl('', [
                Validators.required,
            ]),
            password: new FormControl('', [
                Validators.required,
            ]),
        });
    }

    onLogInClick = (name: string, password: string) => this.authenticationService.login(name, password);

    onSubmit = () => {
        this.authenticationService.login(this.form.value.name, this.form.value.password);
    };

    get name() { return this.form.get('name'); }
    get password() { return this.form.get('password'); }
}
