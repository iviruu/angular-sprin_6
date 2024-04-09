import { Component, OnInit} from '@angular/core';
import { DatosService } from '../service/datos.service';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-lista-presupuesto',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './lista-presupuesto.component.html',
  styleUrl: './lista-presupuesto.component.css'
})
export class ListaPresupuestoComponent implements OnInit {
  
  listaAplanada:any []=[];  // lista quitado una capa
  busqueda: string = '';   // la palabra por cual hace busqueda
  ordenAscendente: boolean = true;  // variable cual hace que cambia orden 
  

  constructor( private datosService: DatosService){
  };

  ngOnInit(): void {
    this.actualizarLista();
    console.log("lista obtenida ahora", this.listaAplanada)
  };

  actualizarLista() {
    this.listaAplanada = this.datosService.obtenerDatos().flat();
  }

  ordenarFecha() {
    if(this.ordenAscendente){
      this.listaAplanada.sort((a, b) => {
      const dateA = new Date(a.data);
      const dateB = new Date(b.data);
      return dateA.getTime() - dateB.getTime();
    });
    } else {
      this.listaAplanada.sort((a, b) => {
        const dateA = new Date(a.data);
        const dateB = new Date(b.data);
        return dateB.getTime() - dateA.getTime();
      });
    }
    this.ordenAscendente = !this.ordenAscendente;
  }
  
  ordenarPrecio() {
    if (this.ordenAscendente) {
      this.listaAplanada.sort((a, b) => a.dinero - b.dinero); // Orden ascendente
    } else {
      this.listaAplanada.sort((a, b) => b.dinero - a.dinero); // Orden descendente
    }
    this.ordenAscendente = !this.ordenAscendente; // Cambiar el estado del orden
  }
  
  ordenarNombre(){
    if (this.ordenAscendente) {
      this.listaAplanada.sort((a, b) => {
        if (a.nombre < b.nombre) return -1;
        if (a.nombre > b.nombre) return 1;
        return 0;
          });
    } else {
      this.listaAplanada.sort((a, b) => {
        if (a.nombre > b.nombre) return -1;
        if (a.nombre < b.nombre) return 1;
        return 0;
          });
    }
    this.ordenAscendente = !this.ordenAscendente; 
    }
    buscarPorNombre() {
      if (this.busqueda.length === 0) {
        this.listaAplanada = this.datosService.obtenerDatos().flat();
      } else {
        if (this.listaAplanada) {
          this.listaAplanada = this.datosService.obtenerDatos().flat().filter(item =>
            item.nombre && item.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
          );
        }
      }
    }
    
}
