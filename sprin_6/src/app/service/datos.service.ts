import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {


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
