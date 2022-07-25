import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-studentcalendar',
  templateUrl: './studentcalendar.component.html',
  styleUrls: ['./studentcalendar.component.scss']

})
export class StudentcalendarComponent implements OnInit {
  selected: Date | null | undefined;
  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
