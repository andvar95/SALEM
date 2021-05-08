import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardHistoriaComponent } from './card-historia.component';

describe('CardHistoriaComponent', () => {
  let component: CardHistoriaComponent;
  let fixture: ComponentFixture<CardHistoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardHistoriaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
