import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExamModel } from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class UserService {


  constructor(private httpClient: HttpClient) {}

  getExams(): Observable<ExamModel> {
    const url = 'https://localhost:5001/api/Exam';
    const options = {
      headers: new HttpHeaders({

      }),
    };
    return this.httpClient.get<ExamModel>(url, options);

  }
}
