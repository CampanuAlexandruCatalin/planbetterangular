import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../../services/models/studentModel';
import { userModel } from '../../services/models/usermodel';
import { loginModel } from '../../services/models/loginmodel';
import { PlanService } from '../../services/plan.service';
import { AdminGuard } from 'src/app/shared/admin.guard';
import { StudentGuard } from 'src/app/shared/student.guard';


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
    private loginService: PlanService,
    private adminGuard:AdminGuard,
    private studentGuard:StudentGuard
  ) {}

  loginDate: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }


  //adminGuard:AdminGuard=new AdminGuard();
  LoginForm() {
    const userdata = {
      email: this.loginDate.get('email')?.value,
      password: this.loginDate.get('password')?.value,
    };
    this.loginService.login(userdata).subscribe((result) => {

      if(result===1)
      {
          this.adminGuard.setisAdmin(true);
          this.router.navigate(["/admincalendar"]);
      }
      if(result===2)
      {
          this.studentGuard.setisAdmin(true);
          this.router.navigate(["/studentcalendar"]);
      }
      if(result===0)
      {
        this.mesajeroare="Bad email or password.";
    }
    });
  }
}
