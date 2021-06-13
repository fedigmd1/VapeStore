import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishListMainComponent } from './wish-list-main.component';

describe('WishListMainComponent', () => {
  let component: WishListMainComponent;
  let fixture: ComponentFixture<WishListMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WishListMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WishListMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
