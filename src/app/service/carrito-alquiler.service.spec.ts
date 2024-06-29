import { TestBed } from '@angular/core/testing';

import { CarritoAlquilerService } from './carrito-alquiler.service';

describe('CarritoAlquilerService', () => {
  let service: CarritoAlquilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarritoAlquilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
