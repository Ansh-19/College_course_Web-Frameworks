import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormControl, FormsModule } from '@angular/forms';
import { ChangeTextDirective } from './change-text.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
