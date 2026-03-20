import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Setembro } from './setembro';

describe('Setembro', () => {
  let component: Setembro;
  let fixture: ComponentFixture<Setembro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Setembro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Setembro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
