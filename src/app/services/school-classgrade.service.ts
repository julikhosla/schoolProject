import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { schoolList, gradeList } from '../models/util';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  classData = gradeList;
  baseUrl = 'http://localhost:8080/api/students';
  schoolList = schoolList;
  constructor(private http: HttpClient) { }

  getSchool() {
    return this.schoolList;
  }
  getClass() {
    return this.classData;
  }
  getAll(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
