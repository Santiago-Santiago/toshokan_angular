import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarempleadoComponent } from './guardarempleado.component';

describe('GuardarempleadoComponent', () => {
  let component: GuardarempleadoComponent;
  let fixture: ComponentFixture<GuardarempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardarempleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
