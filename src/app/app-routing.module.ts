import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'camera',
    pathMatch: 'full',
  }, {
    path: 'camera',
    loadChildren: () => import('./modules/web-capture/web-capture.module').then(m => m.WebCaptureModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
