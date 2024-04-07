import { Component, OnInit} from '@angular/core';
import { DatosService } from '../service/datos.service';


@Component({
  selector: 'app-lista-presupuesto',
  standalone: true,
  imports: [],
  templateUrl: './lista-presupuesto.component.html',
  styleUrl: './lista-presupuesto.component.css'
})
export class ListaPresupuestoComponent implements OnInit {
  
  listaPresupuesto: any []=[];
  listaAplanada:any []=[];

  constructor( private datosService: DatosService){
  };

  ngOnInit(): void {
    this.listaPresupuesto = this.datosService.obtenerDatos();
    this.listaAplanada = this.listaPresupuesto.flat();
    console.log("lista obtenida ahora", this.listaAplanada)
  };

  ordenarFecha() {
    this.listaAplanada.sort((a, b) => {
      const dateA = new Date(a.data);
      const dateB = new Date(b.data);
      return dateA.getTime() - dateB.getTime();
    });
  }
  
  ordenarPrecio() {
    this.listaAplanada.sort((a, b) => a.dinero - b.dinero);
  }
}
