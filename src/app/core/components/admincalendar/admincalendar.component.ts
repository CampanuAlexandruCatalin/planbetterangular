import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { Router } from '@angular/router';
import { CoreModule } from '../../core.module';

@Component({
  selector: 'app-admincalendar',
  templateUrl: './admincalendar.component.html',
  styleUrls: ['./admincalendar.component.scss'],

})
export class AdmincalendarComponent implements OnInit {

  selected: Date | null | undefined;

  constructor(public router: Router) {
  }

  ngOnInit(): void {
  }
}
