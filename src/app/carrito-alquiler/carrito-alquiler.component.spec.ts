import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoAlquilerComponent } from './carrito-alquiler.component';

describe('CarritoAlquilerComponent', () => {
  let component: CarritoAlquilerComponent;
  let fixture: ComponentFixture<CarritoAlquilerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarritoAlquilerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoAlquilerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
