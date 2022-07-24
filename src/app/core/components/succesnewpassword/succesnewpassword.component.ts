import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-succesnewpassword',
  templateUrl: './succesnewpassword.component.html',
  styleUrls: ['./succesnewpassword.component.scss']
})
export class SuccesnewpasswordComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

}
