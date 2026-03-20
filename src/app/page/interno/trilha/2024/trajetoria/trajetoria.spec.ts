import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Trajetoria } from './trajetoria';

describe('Trajetoria', () => {
  let component: Trajetoria;
  let fixture: ComponentFixture<Trajetoria>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Trajetoria]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Trajetoria);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
