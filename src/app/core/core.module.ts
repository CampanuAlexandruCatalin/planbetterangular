import { CommonModule, DatePipe, DATE_PIPE_DEFAULT_TIMEZONE } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdmincalendarComponent } from "./components/admincalendar/admincalendar.component";
import { AdmindayComponent } from "./components/adminday/adminday.component";
import { CheckemailComponent } from "./components/checkemail/checkemail.component";
import { ForgotpasswordComponent } from "./components/forgotpassword/forgotpassword.component";
import { LoginComponent } from "./components/login/login.component";
import { PageNotFoundComponent } from "./components/page-not-found/page-not-found.component";
import { SetnewpasswordComponent } from "./components/setnewpassword/setnewpassword.component";
import { SignupComponent } from "./components/signup/signup.component";
import { StudentcalendarComponent } from "./components/studentcalendar/studentcalendar.component";
import { StudentdayComponent } from "./components/studentday/studentday.component";
import { StudenttimerComponent } from "./components/studenttimer/studenttimer.component";
import { HttpClientModule } from '@angular/common/http';

const components= [AdmincalendarComponent,AdmindayComponent,CheckemailComponent,ForgotpasswordComponent,LoginComponent,PageNotFoundComponent,SetnewpasswordComponent,SignupComponent,StudentcalendarComponent,StudentdayComponent,StudenttimerComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RouterModule],
})
export class CoreModule {}
