import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './models/studentModel';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private httpClient: HttpClient) {}

  loginfunction(): Observable<Student> {
    const url = 'https://localhost:65047/api/Student';
    const options = {
      headers: new HttpHeaders({}),
    };
    return this.httpClient.get<Student>(url, options);
  }
}
