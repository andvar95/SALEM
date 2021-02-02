import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSalemComponent } from './footer-salem.component';

describe('FooterSalemComponent', () => {
  let component: FooterSalemComponent;
  let fixture: ComponentFixture<FooterSalemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterSalemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSalemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
