import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarautorComponent } from './guardarautor.component';

describe('GuardarautorComponent', () => {
  let component: GuardarautorComponent;
  let fixture: ComponentFixture<GuardarautorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardarautorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarautorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
