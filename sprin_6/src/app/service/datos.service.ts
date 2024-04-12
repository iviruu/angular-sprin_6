import { Injectable,EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  datosActualizados: EventEmitter<void>= new EventEmitter<void>();
  
  constructor() { };

  guardarDatos(datos : any []){
    let todosDatos: any[] = this.obtenerDatos();
    todosDatos.push(datos)
    localStorage.setItem('misDatos', JSON.stringify(todosDatos))
  }
  obtenerDatos(): any [] {
    const misDatos = localStorage.getItem('misDatos');
    return misDatos? JSON.parse(misDatos) : [];
  }
  borrarDatos(){
    localStorage.removeItem('misDatos');
  }
  borrarElemento(index: number) {
    let todosDatos: any[] = this.obtenerDatos();
    todosDatos.splice(index, 1); // Elimina el elemento en el índice especificado
    localStorage.setItem('misDatos', JSON.stringify(todosDatos));
    this.datosActualizados.emit(); // Emitir evento para notificar que los datos han sido actualizados
  }
  generarUrlPresupuesto(presupuesto: any): string {
    const presupuestoCodificado = encodeURIComponent(JSON.stringify(presupuesto));
    return `http://localhost:4200/crear-presupuesto?data=${presupuestoCodificado}`;
  }
}

