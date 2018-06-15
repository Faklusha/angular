import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AppComponent } from '../app.component';
import { FooterComponent } from './footer/footer.component';
import { ListComponent } from './list/list.component';
import { PageComponent } from './page/page.component';
import { LogoComponent } from './logo/logo.component';
import { SearchComponent } from './search/search.component';
import { ItemComponent } from './item/item.component';
import { UsersComponent } from './users/users.component';
import { HeaderComponent } from './header/header.component';
import { OptionsComponent } from './options/options.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    OptionsComponent,
    SearchComponent,
    ListComponent,
    ItemComponent,
    FooterComponent,
    UsersComponent
  ],
  exports: [
    AppComponent,
    PageComponent,
    HeaderComponent,
    LogoComponent,
    BreadcrumbsComponent,
    OptionsComponent,
    SearchComponent,
    ListComponent,
    ItemComponent,
    FooterComponent,
    UsersComponent
    ]
})
export class CoreModule { }
