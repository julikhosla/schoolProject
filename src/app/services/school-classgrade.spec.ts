import { HttpClientModule } from '@angular/common/http';
import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable } from 'rxjs';
import { gradeList, schoolList } from './../models/util';
import { StudentService } from './school-classgrade.service';

describe('StudentService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let studentService: StudentService;
  beforeEach(() => TestBed.configureTestingModule({imports: [HttpClientModule]}));
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    studentService = new StudentService(httpClientSpy as any);
  });
  it('should be created', () => {
    expect(studentService).toBeTruthy();
  });
  it('should fetch list of schools', () => {
    expect(studentService.getSchool()).toEqual(schoolList);
  });
  it('should fetch list of classes', () => {
    expect(studentService.getClass()).toEqual(gradeList);
  });
});
