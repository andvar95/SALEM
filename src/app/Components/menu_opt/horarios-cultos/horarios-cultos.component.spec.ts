import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorariosCultosComponent } from './horarios-cultos.component';

describe('HorariosCultosComponent', () => {
  let component: HorariosCultosComponent;
  let fixture: ComponentFixture<HorariosCultosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorariosCultosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorariosCultosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
