import { UserService } from './user.service';


describe('UserService', () => {
    let userService;

    beforeEach(() => {
        userService = new UserService();
    });

    it('should get user', () => {
        const user = userService.getUser();
        expect(user.firstName).toBe('Ivan');
        expect(user.lastName).toBe('Ivanov');
    });
});

