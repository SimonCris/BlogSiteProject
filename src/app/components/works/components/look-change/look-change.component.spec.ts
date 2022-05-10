import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookChangeComponent } from './look-change.component';

describe('LookChangeComponent', () => {
  let component: LookChangeComponent;
  let fixture: ComponentFixture<LookChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
