import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../services/models/studentModel';
import { PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public router: Router,private studentService:PlanService
  ) { }

  ngOnInit(): void {
      this.studentService.loginfunction().subscribe((result:Student)=>{console.log(result)})
  }


}
