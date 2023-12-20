import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebCaptureModule } from './modules/web-capture/web-capture.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebCaptureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
