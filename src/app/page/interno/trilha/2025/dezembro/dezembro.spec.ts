import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dezembro } from './dezembro';

describe('Dezembro', () => {
  let component: Dezembro;
  let fixture: ComponentFixture<Dezembro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dezembro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dezembro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
