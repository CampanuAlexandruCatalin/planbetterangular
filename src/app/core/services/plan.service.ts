import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Student } from './models/studentModel';
import { userModel } from './models/usermodel';
import { loginModel } from './models/loginmodel';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private httpClient: HttpClient) {}

  getStudentsinConsoleLog(): Observable<Student> {
    const url = 'https://localhost:65047/api/Student';
    const options = {
      headers: new HttpHeaders({}),
    };
    return this.httpClient.get<Student>(url, options);
  }

  login(userdata:loginModel):Observable<number>{
    const url = `https://localhost:65047/api/User/email/${userdata.email},password/${userdata.password}`;
    const options = {
      headers: new HttpHeaders({}),
    };
    return this.httpClient.post<number>(url,userdata);
 }

}
