import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkemail',
  templateUrl: './checkemail.component.html',
  styleUrls: ['./checkemail.component.scss']
})
export class CheckemailComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
