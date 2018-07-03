import {async, TestBed} from '@angular/core/testing';
import {BreadcrumbsComponent} from '../general/breadcrumbs/breadcrumbs.component';
import {FooterComponent} from '../general/footer/footer.component';
import {MasterPageComponent} from './masterPage.component';
import {LogoComponent} from '../general/logo/logo.component';
import {CourseItemComponent} from '../pages/courses/courseItem/courseItem.component';
import {CoursesListComponent} from '../pages/courses/coursesList/coursesList.component';
import {HeaderComponent} from '../general/header/header.component';
import {AuthenticationService} from '../services/authentication.service';

describe('CoursesPage', () => {
    let sut: MasterPageComponent;
    let authenticationService: Partial<AuthenticationService>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MasterPageComponent,
                HeaderComponent,
                LogoComponent,
                BreadcrumbsComponent,
                CoursesListComponent,
                CourseItemComponent,
                FooterComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        authenticationService = {getUser: jasmine.createSpy('getUser')};
        sut = new MasterPageComponent(authenticationService as AuthenticationService);
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

    it('should get user', () => {
        expect(authenticationService.getUser).toHaveBeenCalled();

    });
});
