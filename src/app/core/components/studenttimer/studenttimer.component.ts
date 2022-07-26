import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-studenttimer',
  templateUrl: './studenttimer.component.html',
  styleUrls: ['./studenttimer.component.scss']
})
export class StudenttimerComponent implements OnInit {
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
