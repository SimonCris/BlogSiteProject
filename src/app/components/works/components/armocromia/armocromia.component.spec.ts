import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmocromiaComponent } from './armocromia.component';

describe('ArmocromiaComponent', () => {
  let component: ArmocromiaComponent;
  let fixture: ComponentFixture<ArmocromiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArmocromiaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmocromiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
