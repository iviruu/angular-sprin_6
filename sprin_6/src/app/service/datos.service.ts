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
}
