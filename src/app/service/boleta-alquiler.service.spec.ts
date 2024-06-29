import { TestBed } from '@angular/core/testing';

import { BoletaAlquilerService } from './boleta-alquiler.service';

describe('BoletaAlquilerService', () => {
  let service: BoletaAlquilerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoletaAlquilerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
