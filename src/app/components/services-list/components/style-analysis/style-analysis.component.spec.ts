import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleAnalysisComponent } from './style-analysis.component';

describe('StyleAnalysisComponent', () => {
  let component: StyleAnalysisComponent;
  let fixture: ComponentFixture<StyleAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StyleAnalysisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
