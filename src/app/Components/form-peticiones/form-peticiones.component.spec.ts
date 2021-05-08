import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPeticionesComponent } from './form-peticiones.component';

describe('FormPeticionesComponent', () => {
  let component: FormPeticionesComponent;
  let fixture: ComponentFixture<FormPeticionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormPeticionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPeticionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
