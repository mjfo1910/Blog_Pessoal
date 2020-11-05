import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassadoComponent } from './passado.component';

describe('PassadoComponent', () => {
  let component: PassadoComponent;
  let fixture: ComponentFixture<PassadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PassadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
