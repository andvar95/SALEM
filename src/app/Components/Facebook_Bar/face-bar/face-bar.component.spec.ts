import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceBarComponent } from './face-bar.component';

describe('FaceBarComponent', () => {
  let component: FaceBarComponent;
  let fixture: ComponentFixture<FaceBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FaceBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
