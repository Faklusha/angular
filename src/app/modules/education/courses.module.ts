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
        FooterComponent
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
