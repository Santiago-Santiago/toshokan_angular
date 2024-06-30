import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarusuarioComponent } from './guardarusuario.component';

describe('GuardarusuarioComponent', () => {
  let component: GuardarusuarioComponent;
  let fixture: ComponentFixture<GuardarusuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardarusuarioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
