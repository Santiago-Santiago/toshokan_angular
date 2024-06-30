import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEmpleadoComponent } from './navbar-empleado.component';

describe('NavbarEmpleadoComponent', () => {
  let component: NavbarEmpleadoComponent;
  let fixture: ComponentFixture<NavbarEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarEmpleadoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
