import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {BreadcrumbsComponent} from '../general/breadcrumbs/breadcrumbs.component';
import {FooterComponent} from '../general/footer/footer.component';
import {MasterPageComponent} from './masterPage.component';
import {LogoComponent} from '../general/logo/logo.component';
import {CourseItemComponent} from '../pages/courses/courseItem/courseItem.component';
import {CoursesListComponent} from '../pages/courses/coursesList/coursesList.component';
import {HeaderComponent} from '../general/header/header.component';
import {SearchCoursesPipe} from '../pipes/search-courses.pipe';
import {StyleByDateDirective} from '../directives/style-by-date.directive';
import {HideDirective} from '../directives/hide.directive';
import {CreationDateOrderPipe} from '../pipes/creation-date-order.pipe';
import {DurationPipe} from '../pipes/duration.pipe';
import {LoginFormComponent} from '../general/loginForm/loginForm.component';
import {ConfirmationDialogComponent} from '../general/confirmationDialog/confirmationDialog.component';

describe('CoursesPage', () => {
    let sut: MasterPageComponent;
    let fixture: ComponentFixture<MasterPageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                MasterPageComponent,
                HeaderComponent,
                LogoComponent,
                BreadcrumbsComponent,
                CoursesListComponent,
                CourseItemComponent,
                FooterComponent,
                HideDirective,
                SearchCoursesPipe,
                CreationDateOrderPipe,
                StyleByDateDirective,
                HideDirective,
                DurationPipe,
                LoginFormComponent,
                ConfirmationDialogComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(MasterPageComponent);
        sut = fixture.componentInstance;
    });

    it('should create', () => {
        expect(sut).toBeTruthy();
    });

});
