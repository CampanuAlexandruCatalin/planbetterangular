import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Moment } from 'moment';
import { timer } from 'rxjs';


@Component({
  selector: 'app-studentcalendar',
  templateUrl: './studentcalendar.component.html',
  styleUrls: ['./studentcalendar.component.scss']

})
export class StudentcalendarComponent implements OnInit {
  selected: Date | null | undefined;
  now: string| undefined;
  constructor(public router: Router) { }

  ngOnInit(): void {
    timer(0,1000).subscribe(()=>
    {

    this.now=moment().format('d MMMM  YYYY, h:mm:ss a');
    })


  }

}
