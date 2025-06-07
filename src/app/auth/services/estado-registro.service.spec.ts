import { TestBed } from '@angular/core/testing';

import { EstadoRegistroService } from './estado-registro.service';

describe('EstadoRegistroService', () => {
  let service: EstadoRegistroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstadoRegistroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
