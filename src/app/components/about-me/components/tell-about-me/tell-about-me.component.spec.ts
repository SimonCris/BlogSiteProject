import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellAboutMeComponent } from './tell-about-me.component';

describe('TellAboutMeComponent', () => {
  let component: TellAboutMeComponent;
  let fixture: ComponentFixture<TellAboutMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TellAboutMeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TellAboutMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
