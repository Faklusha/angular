import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CoursesPageComponent} from './coursesPage.component';
import {UserService} from '../../common/users/user.service';

describe('CoursesPage', () => {
    let sut: CoursesPageComponent;
    let userService: Partial<UserService>;
    let fixture: ComponentFixture<CoursesPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CoursesPageComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        userService = {getUser: jasmine.createSpy('getUser')};
        sut = new CoursesPageComponent(userService as UserService);
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('should get user', () => {
        expect(userService.getUser).toHaveBeenCalled();
    });
});
