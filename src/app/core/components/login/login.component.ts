import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
    public router: Router,
    private studentService:PlanService,
    private loginService:PlanService
  ) { }

  loginDate:FormGroup=new FormGroup({
    email:new FormControl(''),
    password:new FormControl('')
  })

  ngOnInit(): void {
      this.studentService.getStudentsinConsoleLog().subscribe((result:Student)=>{console.log(result)});

  }


  LoginForm(){
    this.loginService.login({email:this.loginDate.get('email')?.value,password:this.loginDate.get('password')?.value,isAdmin:true});{console.log(this.loginDate)};
  }
}
