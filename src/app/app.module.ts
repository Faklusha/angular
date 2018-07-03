import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesModule } from './modules/education/courses.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, CoursesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
