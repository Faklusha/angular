import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from '../common/breadcrumbs/breadcrumbs.component';
import { AppComponent } from '../app.component';
import { FooterComponent } from '../common/footer/footer.component';
import { CoursesListComponent } from './coursesList/coursesList.component';
import { CoursesContentComponent } from './coursesContent/coursesContent.component';
import { CoursesPageComponent } from '../pages/coursesPage/coursesPage.component';
import { LogoComponent } from '../common/logo/logo.component';
import { CoursesSearchComponent } from './coursesSearch/coursesSearch.component';
import { CourseItemComponent } from './courseItem/courseItem.component';
import { UsersComponent } from '../common/users/users.component';
import { HeaderComponent } from '../common/header/header.component';
import { CoursesOptionsComponent } from './coursesOptions/coursesOptions.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppComponent,
    CoursesPageComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    CoursesOptionsComponent,
    CoursesSearchComponent,
    CoursesListComponent,
    CoursesContentComponent,
    CourseItemComponent,
    FooterComponent,
    UsersComponent
  ],
  exports: [
    AppComponent,
    CoursesPageComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    CoursesOptionsComponent,
    CoursesSearchComponent,
    CoursesListComponent,
    CoursesContentComponent,
    CourseItemComponent,
    FooterComponent,
    UsersComponent
    ]
})
export class CoursesModule { }
