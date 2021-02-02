import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransmiComponent } from './transmi.component';

describe('TransmiComponent', () => {
  let component: TransmiComponent;
  let fixture: ComponentFixture<TransmiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransmiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransmiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
