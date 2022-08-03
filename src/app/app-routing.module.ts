import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincalendarComponent } from './core/components/admincalendar/admincalendar.component';
import { AdmindayComponent } from './core/components/adminday/adminday.component';
import { CheckemailComponent } from './core/components/checkemail/checkemail.component';
import { ForgotpasswordComponent } from './core/components/forgotpassword/forgotpassword.component';
import { LoginComponent } from './core/components/login/login.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { SetnewpasswordComponent } from './core/components/setnewpassword/setnewpassword.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { StudentcalendarComponent } from './core/components/studentcalendar/studentcalendar.component';
import { StudentdayComponent } from './core/components/studentday/studentday.component';
import { StudenttimerComponent } from './core/components/studenttimer/studenttimer.component';
import { SuccesnewpasswordComponent } from './core/components/succesnewpassword/succesnewpassword.component';
import { AdminGuard } from './shared/admin.guard';
import { StudentGuard } from './shared/student.guard';
import { UsermanualComponent } from './core/components/usermanual/usermanual.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:LoginComponent
  },
  {
    path: 'login',
    pathMatch: 'full',
    component:LoginComponent
  },
  {
    path: 'signup',
    pathMatch: 'full',
    component:SignupComponent
  },
  {
    path: 'forgotpassword',
    pathMatch: 'full',
    component:ForgotpasswordComponent
  },
  {
    path: 'checkemail',
    pathMatch: 'full',
    component:CheckemailComponent
  },
  {
    path: 'setnewpassword',
    pathMatch: 'full',
    component:SetnewpasswordComponent
  },
  {
    path: 'succesnewpassword',
    pathMatch: 'full',
    component:SuccesnewpasswordComponent
  },
  {
    path: 'admincalendar',
    canActivate:[AdminGuard],
    pathMatch: 'full',
    component:AdmincalendarComponent
  },
  {
    path: 'adminday',
    canActivate:[AdminGuard],
    pathMatch: 'full',
    component:AdmindayComponent
  },
  {
    path: 'studentcalendar',
    canActivate:[StudentGuard],
    pathMatch: 'full',
    component:StudentcalendarComponent
  },
  {
    path: 'usermanual',
    pathMatch: 'full',
    component:UsermanualComponent
  },
  {
    path: 'studentday',
    canActivate:[StudentGuard],
    pathMatch: 'full',
    component:StudentdayComponent
  },
  {
    path: 'studenttimer',
    canActivate:[StudentGuard],
    pathMatch: 'full',
    component:StudenttimerComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
