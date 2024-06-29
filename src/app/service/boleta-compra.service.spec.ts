import { TestBed } from '@angular/core/testing';

import { BoletaCompraService } from './boleta-compra.service';

describe('BoletaCompraService', () => {
  let service: BoletaCompraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoletaCompraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
