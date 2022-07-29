import { Component, OnInit } from '@angular/core';
import { UserService } from './core/services/user.service';
import { ExamModel } from './shared/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  exam: ExamModel | undefined;
  constructor(private userService:UserService){}
  title = 'planbetter';
  ngOnInit(): void {
    this.userService.getExams().subscribe((res:ExamModel)=>{
    this.exam=res;
    });
  }
}
