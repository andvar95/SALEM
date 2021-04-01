import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PESCAComponent } from './pesca.component';

describe('PESCAComponent', () => {
  let component: PESCAComponent;
  let fixture: ComponentFixture<PESCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PESCAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PESCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
