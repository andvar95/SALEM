import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalemKidsBannerComponent } from './salem-kids-banner.component';

describe('SalemKidsBannerComponent', () => {
  let component: SalemKidsBannerComponent;
  let fixture: ComponentFixture<SalemKidsBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalemKidsBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalemKidsBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
