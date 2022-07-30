import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import{MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material/core";
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService,ResizeService, DragAndDropService} from '@syncfusion/ej2-angular-schedule';
import { Component, ViewChild } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { extend } from '@syncfusion/ej2-base';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule ,
    MatFormFieldModule,MatInputModule,HttpClientModule
  ],
  providers: [DayService, ResizeService, DragAndDropService],
  bootstrap: [AppComponent],
})
export class AppModule { }
