import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LisempleadoComponent } from './lisempleado.component';

describe('LisempleadoComponent', () => {
  let component: LisempleadoComponent;
  let fixture: ComponentFixture<LisempleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LisempleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LisempleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
