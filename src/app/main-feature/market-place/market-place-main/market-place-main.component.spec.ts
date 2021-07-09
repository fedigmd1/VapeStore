import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketPlaceMainComponent } from './market-place-main.component';

describe('MarketPlaceMainComponent', () => {
  let component: MarketPlaceMainComponent;
  let fixture: ComponentFixture<MarketPlaceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketPlaceMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketPlaceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
