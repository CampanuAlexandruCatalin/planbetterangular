import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminday',
  templateUrl: './adminday.component.html',
  styleUrls: ['./adminday.component.scss']
})
export class AdmindayComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
