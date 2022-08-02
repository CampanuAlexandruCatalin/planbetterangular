import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../services/models/studentModel';
import { userModel } from '../../services/models/usermodel';
import { loginModel } from '../../services/models/loginmodel';
import { PlanService } from '../../services/plan.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  mesajeroare:string|undefined;

  constructor(
    public router: Router,
    private studentService: PlanService,
    private loginService: PlanService
  ) {}

  loginDate: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }
  admin:any=1;
  student:any=2;
  LoginForm() {
    const userdata = {
      email: this.loginDate.get('email')?.value,
      password: this.loginDate.get('password')?.value,
    };
    this.loginService.login(userdata).subscribe((result) => {
      console.log(result);
      console.log(result.isAdmin);

      if(result===this.admin)
      {
          this.router.navigate(["/admincalendar"]);
      }
      if(result===this.student)
      {
          this.router.navigate(["/studentcalendar"]);
      }
      if(!result)
      {
        this.mesajeroare="Bad email or password.";
    }

    });
  }
}
