import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualificationHomeComponent } from './qualification-home.component';

describe('QualificationHomeComponent', () => {
  let component: QualificationHomeComponent;
  let fixture: ComponentFixture<QualificationHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QualificationHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QualificationHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
