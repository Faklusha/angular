import {Routes} from '@angular/router';
import {NoFoundPageComponent} from './pages/noFoundPage/noFoundPage.component';
import {CoursesListComponent} from './pages/courses/coursesList/coursesList.component';
import {LoginFormComponent} from './general/loginForm/loginForm.component';
import {AddCourseComponent} from './pages/courses/addCourse/addCourse.component';
import {CanActivateGuard} from './guards/canActivateGuard';

export const ROUTES: Routes = [
    {path: '', redirectTo: 'courses', pathMatch: 'full'},

    /// Redirect to
    {path: 'courses', component: CoursesListComponent, canActivate: [CanActivateGuard]},
    {path: 'redirect', redirectTo: 'courses', pathMatch: 'full'},

    /// Edit course
    {path: 'courses/:id', component: AddCourseComponent, canActivate: [CanActivateGuard]},

    /// Add course
    {path: 'courses/new', component: AddCourseComponent, canActivate: [CanActivateGuard]},

    /// Login
    {path: 'login', component: LoginFormComponent},

    /// 404
    {path: '**', component: NoFoundPageComponent}
];
