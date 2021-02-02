import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideMemuComponent } from './slide-memu.component';

describe('SlideMemuComponent', () => {
  let component: SlideMemuComponent;
  let fixture: ComponentFixture<SlideMemuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideMemuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideMemuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
