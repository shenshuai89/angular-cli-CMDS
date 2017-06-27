import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MulPipe } from './shared/mul.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import {LoggerService} from "./shared/logger.service";

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    MulPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
