import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';

@Component({
  selector: 'app-studentday',
  templateUrl: './studentday.component.html',
  styleUrls: ['./studentday.component.scss']
})
export class StudentdayComponent implements OnInit {
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
