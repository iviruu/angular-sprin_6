import { Component} from '@angular/core';
import {ReactiveFormsModule,FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
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
  servicio:any[] 
  paginas: number = 0;      //el numero de paginas que se pide en un servicio 
  lenguas:number = 0;      // el numero de lenguas que se pide 
  popup:boolean = false;   // el booleano para activar modal
  tipoPopup: 'paginas' | 'lenguas'= 'paginas';
  formulario: FormGroup;
  datosGuardados: { nombre: string, email: string, telefono: string }[] = [];

  constructor(private servicioServicio: ServicioService, private formBuilder: FormBuilder) {
    this.servicio= this.servicioServicio.retornar();
    this.formulario = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });
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

submit() {
  if (this.formulario.valid) {
    const nombre = this.formulario.value.nombre;
    const email = this.formulario.value.email;
    const telefono = this.formulario.value.telefono;

    this.datosGuardados.push({ nombre, email, telefono });

    console.log('Datos guardados:', this.datosGuardados);

    this.formulario.reset();
  }
  else {
    // Si el formulario no es válido, muestra un mensaje de error o realiza alguna acción adicional
    console.log('El formulario no es válido, por favor verifica los campos.');
  }
}

}

