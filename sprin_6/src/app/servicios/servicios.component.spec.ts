import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormGroup } from '@angular/forms';
import { ServiciosComponent } from './servicios.component';
import { By } from '@angular/platform-browser';

describe('ServiciosComponent', () => {
  let component: ServiciosComponent;
  let fixture: ComponentFixture<ServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('comprobar los componentes', () => {
    expect(component.presupuestoTotal).toEqual(0);
    expect(component.presupuesto).toEqual(0);
    expect(component.paginas).toEqual(0);
    expect(component.lenguas).toEqual(0);
    expect(component.popup).toEqual(false);
    expect(component.tipoPopup).toEqual('paginas');
    expect(component.formularioPresupuesto instanceof FormGroup).toBeTruthy();
  });

    it('reset paginas y lenguas ',()=> {
      component.formularioPresupuesto.setValue({
        servicio0: false,
        servicio1: false,
        servicio2: false,
      });
      component.paginas = 5;
      component.lenguas = 3;

      component.desmarcar();

      expect(component.paginas).toBe(0);
      expect(component.lenguas).toBe(0);
    });

    



});
