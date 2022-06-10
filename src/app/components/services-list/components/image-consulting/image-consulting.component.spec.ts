import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageConsultingComponent } from './image-consulting.component';

describe('ImageConsultingComponent', () => {
  let component: ImageConsultingComponent;
  let fixture: ComponentFixture<ImageConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageConsultingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
