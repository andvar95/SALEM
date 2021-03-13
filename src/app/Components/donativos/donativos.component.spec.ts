import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonativosComponent } from './donativos.component';

describe('DonativosComponent', () => {
  let component: DonativosComponent;
  let fixture: ComponentFixture<DonativosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonativosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonativosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
