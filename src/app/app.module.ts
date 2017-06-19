import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from '../app/child/child.component';
import { HighlightDirective } from '../app/highlight.directive'
import {LoggerService} from "./logger.service";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
