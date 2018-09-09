import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

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
import {ConfirmationDialogComponent} from './general/confirmationDialog/confirmationDialog.component';
import {LoginFormComponent} from './general/loginForm/loginForm.component';
import {AddCourseComponent} from './pages/courses/addCourse/addCourse.component';
import {NoFoundPageComponent} from './pages/noFoundPage/noFoundPage.component';
import {ROUTES} from './courses.routes';
import {CanActivateGuard} from './guards/canActivateGuard';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor} from './auth-interceptor';
import {LoadingBlockComponent} from './general/loading-block/loading-block.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import {AuthReducer} from './services/auth/reducers/AuthReducer';
import {CourseReducer} from './pages/courses/coursesList/reducers/CoursesReducer';
import { ReactiveFormsModule } from '@angular/forms';
import {AuthorsComponent} from './general/authors/authors.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(ROUTES, {useHash: true}),
        HttpClientModule,
        ReactiveFormsModule,
        StoreModule.forRoot({authState: AuthReducer, coursesState: CourseReducer}),
        StoreDevtoolsModule.instrument({
            name: 'NgRx DevTools',
        }),
    ],
    providers: [CanActivateGuard,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
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
        ConfirmationDialogComponent,
        LoginFormComponent,
        AddCourseComponent,
        NoFoundPageComponent,
        LoadingBlockComponent,
        AuthorsComponent
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
        AddCourseComponent,
        NoFoundPageComponent,
        LoadingBlockComponent,
        AuthorsComponent
    ]
})
export class CoursesModule {
}
