import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginInicioComponent } from './login-inicio.component';

describe('LoginInicioComponent', () => {
  let component: LoginInicioComponent;
  let fixture: ComponentFixture<LoginInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
