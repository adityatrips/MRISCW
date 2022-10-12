import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterCloudQuizComponent } from './register-cloud-quiz.component';

describe('RegisterCloudQuizComponent', () => {
  let component: RegisterCloudQuizComponent;
  let fixture: ComponentFixture<RegisterCloudQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterCloudQuizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterCloudQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
