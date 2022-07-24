import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studenttimer',
  templateUrl: './studenttimer.component.html',
  styleUrls: ['./studenttimer.component.scss']
})
export class StudenttimerComponent implements OnInit {

  constructor(public router: Router) {

   }

  ngOnInit(): void {

  }

}
