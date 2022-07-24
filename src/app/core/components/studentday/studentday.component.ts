import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentday',
  templateUrl: './studentday.component.html',
  styleUrls: ['./studentday.component.scss']
})
export class StudentdayComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
