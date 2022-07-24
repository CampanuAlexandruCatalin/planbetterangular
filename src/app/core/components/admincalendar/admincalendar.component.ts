import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admincalendar',
  templateUrl: './admincalendar.component.html',
  styleUrls: ['./admincalendar.component.scss']
})
export class AdmincalendarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  dataaleasa:any;
  fetchDateSelected(){
    console.log("data aleasa e:"+this.dataaleasa);
  }
}
