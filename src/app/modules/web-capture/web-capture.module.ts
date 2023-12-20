import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebCaptureRoutingModule } from './web-capture-routing.module';
import { ExteriorComponent } from './exterior/exterior.component';
import { WebcamModule } from 'ngx-webcam';
import { CameraComponent } from './camera/camera.component';


@NgModule({
  declarations: [
    ExteriorComponent,
    CameraComponent
  ],
  imports: [
    CommonModule,
    WebcamModule,
    WebCaptureRoutingModule
  ]
})
export class WebCaptureModule { }
