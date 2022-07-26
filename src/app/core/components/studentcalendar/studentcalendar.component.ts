import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { CoreModule } from '../../core.module';

@Component({
  selector: 'app-studentcalendar',
  templateUrl: './studentcalendar.component.html',
  styleUrls: ['./studentcalendar.component.scss']
})
export class StudentcalendarComponent implements OnInit {
  selected: Date | null | undefined;
  dateTime: Date| null | undefined;
  constructor(public router: Router) {
  }
  ngOnInit(): void {
    this.dateTime=new Date();
    timer(0,1000).subscribe(()=>{
      this.dateTime=new Date()
    })
  }

}
