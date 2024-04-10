import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../service/datos.service';


@Component({
  selector: 'app-presupuesto',
  standalone: true,
  imports: [],
  templateUrl: './presupuesto.component.html',
  styleUrl: './presupuesto.component.css'
})
export class PresupuestoComponent implements OnInit {
    presupuestoId: string = '';
    presupuesto: any = null;

    constructor(
      private route: ActivatedRoute,
      private datosService: DatosService,
    ) {
      this.presupuestoId
    }

    ngOnInit(): void {
      this.presupuestoId = this.route.snapshot.paramMap.get('id') || '';
      this.cargarPresupuesto();
    }
  cargarPresupuesto(){
    this.presupuesto = this.datosService.obtenerPresupuestoPorId(this.presupuestoId);
  }
}
