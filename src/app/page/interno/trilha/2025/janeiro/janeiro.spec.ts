import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Janeiro } from './janeiro';

describe('Janeiro', () => {
  let component: Janeiro;
  let fixture: ComponentFixture<Janeiro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Janeiro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Janeiro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
