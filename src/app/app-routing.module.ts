import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PinfoComponent } from './pinfo/pinfo.component';
import { SinfoComponent } from './sinfo/sinfo.component';
import { LoginComponent } from './login/login.component';
import { Ser01Service } from './services/ser01.service';

const routes: Routes = [
  {
    path: "",
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: "pinfo",
    component: PinfoComponent
  },
  {
    path: "sinfo",
    component: SinfoComponent
  },
  {
    path: "pinfo/:id",
    component: PinfoComponent
  },
  {
    path: "login",
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
