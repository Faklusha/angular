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
import {StyleByDateDirective} from './pages/courses/courseItem/style-by-date.directive';
import {HideDirective} from './pages/courses/coursesList/hide.directive';
import {DurationPipe} from './pages/courses/courseItem/duration.pipe';
import {CreationDateOrderPipe} from './pages/courses/coursesList/creation-date-order.pipe';
import {SearchCoursesPipe} from './pages/courses/coursesList/search-courses.pipe';

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
        SearchCoursesPipe
    ],
    exports: [
        AppComponent,
        MasterPageComponent,
        HeaderComponent,
        LogoComponent,
        BreadcrumbsComponent,
        CoursesListComponent,
        CourseItemComponent,
        FooterComponent
    ]
})
export class CoursesModule {
}
