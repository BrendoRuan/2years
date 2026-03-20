import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Fevereiro } from './fevereiro';

describe('Fevereiro', () => {
  let component: Fevereiro;
  let fixture: ComponentFixture<Fevereiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Fevereiro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Fevereiro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
