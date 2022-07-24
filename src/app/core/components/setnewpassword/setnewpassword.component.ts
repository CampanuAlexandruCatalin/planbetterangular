import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setnewpassword',
  templateUrl: './setnewpassword.component.html',
  styleUrls: ['./setnewpassword.component.scss']
})
export class SetnewpasswordComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
