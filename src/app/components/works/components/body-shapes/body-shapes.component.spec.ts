import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyShapesComponent } from './body-shapes.component';

describe('BodyShapesComponent', () => {
  let component: BodyShapesComponent;
  let fixture: ComponentFixture<BodyShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyShapesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
