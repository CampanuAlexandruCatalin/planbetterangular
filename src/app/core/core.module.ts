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
import { UsermanualComponent } from "./components/usermanual/usermanual.component";
import { HttpClientModule } from '@angular/common/http';
import { MatSliderModule } from '@angular/material/slider';
import {Component} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import{MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { BrowserModule } from '@angular/platform-browser';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { ToastAllModule } from '@syncfusion/ej2-angular-notifications';

import { DropDownButtonAllModule } from '@syncfusion/ej2-angular-splitbuttons';

import { TreeViewModule } from '@syncfusion/ej2-angular-navigations';

import { DropDownListAllModule, MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

import { MaskedTextBoxModule, UploaderAllModule } from '@syncfusion/ej2-angular-inputs';

import { ToolbarAllModule, ContextMenuAllModule } from '@syncfusion/ej2-angular-navigations';

import { ButtonAllModule, CheckBoxAllModule, SwitchAllModule } from '@syncfusion/ej2-angular-buttons';

import { DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule } from '@syncfusion/ej2-angular-calendars';

import { NumericTextBoxAllModule, TextBoxAllModule } from '@syncfusion/ej2-angular-inputs';

import { ScheduleAllModule, RecurrenceEditorAllModule } from '@syncfusion/ej2-angular-schedule';

const components= [AdmincalendarComponent,UsermanualComponent,AdmindayComponent,CheckemailComponent,ForgotpasswordComponent,LoginComponent,PageNotFoundComponent,SetnewpasswordComponent,SignupComponent,StudentcalendarComponent,StudentdayComponent,StudenttimerComponent];

@NgModule({
  declarations: components,
  exports: components,
  imports: [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule, RouterModule,MatSliderModule,MatCardModule,MatDatepickerModule,MatNativeDateModule,MatFormFieldModule,MatInputModule,BrowserModule, ScheduleModule, ScheduleAllModule, RecurrenceEditorAllModule,   NumericTextBoxAllModule, TextBoxAllModule, DatePickerAllModule, TimePickerAllModule, DateTimePickerAllModule, CheckBoxAllModule,   ToolbarAllModule, DropDownListAllModule, ContextMenuAllModule, MaskedTextBoxModule, UploaderAllModule, MultiSelectAllModule,   TreeViewModule, ButtonAllModule, DropDownButtonAllModule, SwitchAllModule, BrowserModule, ToastAllModule]
})
export class CoreModule {}
