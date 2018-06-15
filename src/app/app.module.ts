import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule, CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
