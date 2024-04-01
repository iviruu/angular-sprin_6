import { Component} from '@angular/core';
import {ReactiveFormsModule,FormControl, FormGroup } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { PopupComponent } from '../popup/popup.component';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ReactiveFormsModule,PopupComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  presupuestoTotal= 0;
  presupuesto = 0;    // es el presupuesto que sale de solo servicios
  servicio:any[] = [];
  paginas: number = 0;      //el numero de paginas que se pide en un servicio 
  lenguas:number = 0;      // el numero de lenguas que se pide 
  popup:boolean = false;   // el booleano para activar modal
  tipoPopup: 'paginas' | 'lenguas'= 'paginas'


  constructor(private servicioServicio: ServicioService) {
    this.servicio= this.servicioServicio.retornar();

  }
  


  formularioPresupuesto = new FormGroup({
    servicio0: new FormControl(false),
    servicio1: new FormControl(false),
    servicio2: new FormControl(false)
  });


  calcularPresupuesto(){
    this.presupuesto = 0;
    this.servicio.forEach((serv,index) =>{
      const control = this.formularioPresupuesto.get(`servicio${index}`);
      if (control && control.value) {
        this.presupuesto += serv.precio;
      }
    });
  }
  desmarcar(){   //me sirve para quitar lo que a pedido en paginas y lenguas
    if(!this.formularioPresupuesto.value.servicio2){
      this.paginas= 0;
      this.lenguas = 0;
    }
  }
  incrementar() {
      this.paginas++;
  }
  decrementar(){
    if(this.paginas>0 ){
      this.paginas--;
    }
  }
  incrementar2() {
    this.lenguas++;
}
decrementar2(){
  if(this.lenguas>0 ){
    this.lenguas--;
  }
}
calcularTotal(){
  this.presupuestoTotal= this.presupuesto + 30*(this.paginas + this.lenguas)
}
openPopup(tipo : 'paginas' | 'lenguas'){
  this.popup = true;
  this.tipoPopup = tipo;
  
}

cerrarPopup(){
  this.popup= false;
}


}





