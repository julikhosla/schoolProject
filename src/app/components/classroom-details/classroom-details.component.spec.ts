import { FormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomDetailsComponent } from './classroom-details.component';

describe('ClassroomDetailsComponent', () => {
  let component: ClassroomDetailsComponent;
  let fixture: ComponentFixture<ClassroomDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [ ClassroomDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassroomDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as table header title 'Classroom Details'`, () => {
    expect(component.headerTitle).toEqual('Classroom Details');
  });
});
