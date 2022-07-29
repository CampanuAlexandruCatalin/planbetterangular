import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamModel } from './models/userdata';

@Injectable({
  providedIn: 'root'
})
export class PlanService {

  constructor(private httpClient: HttpClient) {}

  getdata(): Observable<ExamModel> {
    const url = 'https://localhost:65047';
    const options = {
      headers: new HttpHeaders({}),
    };
    return this.httpClient.get<ExamModel>(url, options);
  }
}
