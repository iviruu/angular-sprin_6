import { TestBed } from '@angular/core/testing';

import { ServicioService } from './servicio.service'; 

describe('ServicioService', () => {
  let service: ServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('que no tenga error en retornar servicios', () => {
    const servicios = service.retornar();
    expect(servicios).toBeTruthy();
    expect(servicios.length).toBeGreaterThan(0);
    expect(servicios[0].nombre).toBeTruthy();
    expect(servicios[0].descripcion).toBeTruthy();
    expect(servicios[0].precio).toBeGreaterThan(0);
  });
});
