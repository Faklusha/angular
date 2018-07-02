import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BreadcrumbsComponent} from '../../common/breadcrumbs/breadcrumbs.component';
import {FooterComponent} from '../../common/footer/footer.component';
import {CoursesListComponent} from '../../courses/coursesList/coursesList.component';
import {CoursesContentComponent} from '../../courses/coursesContent/coursesContent.component';
import {CoursesPageComponent} from '../../pages/coursesPage/coursesPage.component';
import {LogoComponent} from '../../common/logo/logo.component';
import {CoursesSearchComponent} from '../../courses/coursesSearch/coursesSearch.component';
import {CourseItemComponent} from '../../courses/courseItem/courseItem.component';
import {HeaderComponent} from '../../common/header/header.component';
import {CoursesOptionsComponent} from '../../courses/coursesOptions/coursesOptions.component';
import {UserService} from '../../common/users/user.service';

describe('CoursesPage', () => {
    let sut: CoursesPageComponent;
    let userService: Partial<UserService>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                CoursesPageComponent,
                HeaderComponent,
                LogoComponent,
                BreadcrumbsComponent,
                CoursesOptionsComponent,
                CoursesSearchComponent,
                CoursesListComponent,
                CoursesContentComponent,
                CourseItemComponent,
                FooterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        userService = {getUser: jasmine.createSpy('getUser')};
        sut = new CoursesPageComponent(userService as UserService);
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('should get user', () => {
        expect(userService.getUser).toHaveBeenCalled();

    });
});
