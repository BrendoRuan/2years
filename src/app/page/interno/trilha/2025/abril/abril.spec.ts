import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Abril } from './abril';

describe('Abril', () => {
  let component: Abril;
  let fixture: ComponentFixture<Abril>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Abril]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Abril);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
