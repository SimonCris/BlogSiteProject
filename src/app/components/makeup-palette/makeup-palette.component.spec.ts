import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeupPaletteComponent } from './makeup-palette.component';

describe('MakeupPaletteComponent', () => {
  let component: MakeupPaletteComponent;
  let fixture: ComponentFixture<MakeupPaletteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeupPaletteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeupPaletteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
