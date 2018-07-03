import { AuthenticationService } from './authentication.service';


describe('AuthenticationService', () => {
    let authenticationService;

    beforeEach(() => {
        authenticationService = new AuthenticationService();
    });

    it('should get user', () => {
        const user = authenticationService.getUser();
        expect(user.firstName).toBe('Ivan');
        expect(user.lastName).toBe('Ivanov');
    });
});

