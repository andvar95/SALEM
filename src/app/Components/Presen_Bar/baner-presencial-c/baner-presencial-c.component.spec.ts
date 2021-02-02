import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BanerPresencialCComponent } from './baner-presencial-c.component';

describe('BanerPresencialCComponent', () => {
  let component: BanerPresencialCComponent;
  let fixture: ComponentFixture<BanerPresencialCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BanerPresencialCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BanerPresencialCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
