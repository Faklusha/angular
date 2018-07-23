import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BreadcrumbsComponent} from './general/breadcrumbs/breadcrumbs.component';
import {AppComponent} from '../../app.component';
import {FooterComponent} from './general/footer/footer.component';
import {MasterPageComponent} from './masterPage/masterPage.component';
import {LogoComponent} from './general/logo/logo.component';
import {CourseItemComponent} from './pages/courses/courseItem/courseItem.component';
import {HeaderComponent} from './general/header/header.component';
import {CoursesListComponent} from './pages/courses/coursesList/coursesList.component';
import {StyleByDateDirective} from './directives/style-by-date.directive';
import {HideDirective} from './directives/hide.directive';
import {DurationPipe} from './pipes/duration.pipe';
import {CreationDateOrderPipe} from './pipes/creation-date-order.pipe';
import {SearchCoursesPipe} from './pipes/search-courses.pipe';
import {ConfirmationDialogComponent} from './general/confirmationDialog/confirmationDialog.component';
import {LoginFormComponent} from './general/loginForm/loginForm.component';
import {AddCourseComponent} from './pages/courses/addCourse/addCourse.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        AppComponent,
        MasterPageComponent,
        HeaderComponent,
        LogoComponent,
        BreadcrumbsComponent,
        CoursesListComponent,
        CourseItemComponent,
        FooterComponent,
        StyleByDateDirective,
        HideDirective,
        DurationPipe,
        CreationDateOrderPipe,
        SearchCoursesPipe,
        ConfirmationDialogComponent,
        LoginFormComponent,
        AddCourseComponent
    ],
    exports: [
        AppComponent,
        MasterPageComponent,
        HeaderComponent,
        LogoComponent,
        BreadcrumbsComponent,
        CoursesListComponent,
        CourseItemComponent,
        FooterComponent,
        ConfirmationDialogComponent,
        AddCourseComponent
    ]
})
export class CoursesModule {
}
