import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinfoComponent } from './pinfo/pinfo.component';
import { SinfoComponent } from './sinfo/sinfo.component';

const routes: Routes = [
  {
    path:"pinfo",
    component:PinfoComponent
  },
  {
    path:"sinfo",
    component:SinfoComponent
  },
  {
    path:"pinfo/:id",
    component:PinfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
