import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CropPictureModalComponent } from './crop-picture-modal.component';

describe('CropPictureModalComponent', () => {
  let component: CropPictureModalComponent;
  let fixture: ComponentFixture<CropPictureModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CropPictureModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CropPictureModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
