import {AuthenticationService} from './authentication.service';

describe('AuthenticationService', () => {
    let authenticationService;
    const tokenKey = 'app_token';
    let navigateSpy;

    beforeEach(() => {
        authenticationService = new AuthenticationService();
        navigateSpy = jasmine.createSpy('navigate');
        authenticationService.router = {};
        authenticationService.router.navigate = navigateSpy;
    });

    it('should store token on login and set user', () => {
        authenticationService.login();
        const token = localStorage.getItem(tokenKey);
        expect(token).toBe('1_Ivan_Ivanov');
        const user = authenticationService.user;
        expect(user.firstName).toBe('Ivan');
        expect(user.lastName).toBe('Ivanov');
    });


    it('should remove token on logout and remove user', () => {
        authenticationService.logout();
        const token = localStorage.getItem(tokenKey);
        expect(token).toBeNull();
        const user = authenticationService.user;
        expect(user).toBeNull();
    });

    it('should return true as user exist', () => {
        authenticationService.login();
        expect(authenticationService.isAuthenticated).toBeTruthy();
    });

    it('should return false as user does not exist', () => {
        authenticationService.logout();
        expect(authenticationService.isAuthenticated()).toBeFalsy();
    });

    it('should return user info when user does not exist', () => {
        authenticationService.login();
        expect(authenticationService.getUserInfo()).toBe('Ivan');
    });

    it('should not return user info as user does not exist', () => {
        authenticationService.logout();
        expect(authenticationService.getUserInfo()).toBeFalsy();
    });

});

