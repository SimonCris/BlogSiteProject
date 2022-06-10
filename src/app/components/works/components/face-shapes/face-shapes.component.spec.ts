import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceShapesComponent } from './face-shapes.component';

describe('FaceShapesComponent', () => {
  let component: FaceShapesComponent;
  let fixture: ComponentFixture<FaceShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceShapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
