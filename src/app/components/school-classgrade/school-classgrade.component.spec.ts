import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SchoolClassGradeComponent } from './school-classgrade.component';
import { ClassroomDetailsComponent } from '../classroom-details/classroom-details.component';
import { gradeList, schoolList } from './../../models/util';


describe('SchoolClassGradeComponent', () => {
  let component: SchoolClassGradeComponent;
  let fixture: ComponentFixture<SchoolClassGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule],
      declarations: [ SchoolClassGradeComponent, ClassroomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolClassGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have default school label School'`, () => {
    expect(component.schoolName).toEqual('School');
  });
  it(`should have default grade label Class`, () => {
    expect(component.gradeName).toEqual('Class');
  });
  it(`should have expected schoolList'`, () => {
    expect(component.schoolList).toEqual(schoolList);
  });
  it(`should have expected gradeList`, () => {
    expect(component.classList).toEqual(gradeList);
  });
});
