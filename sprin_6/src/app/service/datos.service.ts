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
  obtenerPresupuestoPorId(id: string): any{
    const todosDatos: any[] = this.obtenerDatos().flat();
    for (const datos of todosDatos) {
        if (datos.id === id) {
          return datos;
      }
    }
    return null; // Si no se encuentra el presupuesto con el ID proporcionado
  }
}

