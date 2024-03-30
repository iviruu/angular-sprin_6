import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }
  retornar (){
    return[
      {
        nombre: "SEO",
        descripcion: "Programacio d'una web responsive completa",
        precio: 300
      },
      {
        nombre: "Ads",
        descripcion: "Programacio d'una web responsive completa",
        precio: 400
      },
      {
        nombre: "Web",
        descripcion: "Programacio d'una web responsive completa",
        precio: 500
      }
    ]
  }
}
