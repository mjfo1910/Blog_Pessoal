import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpectativasComponent } from './expectativas.component';

describe('ExpectativasComponent', () => {
  let component: ExpectativasComponent;
  let fixture: ComponentFixture<ExpectativasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpectativasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpectativasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
