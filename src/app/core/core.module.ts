import { CommonModule } from "@angular/common";
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
import { MatSliderModule } from '@angular/material/slider';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import{MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const components= [AdmincalendarComponent,AdmindayComponent,CheckemailComponent,ForgotpasswordComponent,LoginComponent,PageNotFoundComponent,SetnewpasswordComponent,SignupComponent,StudentcalendarComponent,StudentdayComponent,StudenttimerComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RouterModule,MatSliderModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule]
})
export class CoreModule {}
