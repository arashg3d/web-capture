import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExteriorComponent } from './exterior/exterior.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'exterior',
    pathMatch: 'full',
  },
  {
    path: 'exterior',
    component: ExteriorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebCaptureRoutingModule { }
