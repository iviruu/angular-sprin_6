import { Component, OnInit} from '@angular/core';
import {ReactiveFormsModule,FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';
import { ServicioService } from '../service/servicio.service';
import { PopupComponent } from '../popup/popup.component';
import { DatosService } from '../service/datos.service';
import { ListaPresupuestoComponent } from '../lista-presupuesto/lista-presupuesto.component';


@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ReactiveFormsModule,PopupComponent, ListaPresupuestoComponent],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent implements OnInit {

  presupuestoTotal= 0;
  presupuesto = 0;    // es el presupuesto que sale de solo servicios
  servicio:any[] 
  paginas: number = 0;      //el numero de paginas que se pide en un servicio 
  lenguas:number = 0;      // el numero de lenguas que se pide 
  popup:boolean = false;   // el booleano para activar modal
  tipoPopup: 'paginas' | 'lenguas'= 'paginas';
  formulario: FormGroup;
  datosGuardados: { nombre: string,
      email: string,
      telefono: number,
      dinero: number,
      data: any,
      servicio:{ 
        nombre: string,
        paginas?: number,
        lenguas?: number
      }[]
    }[] = []; // array para pedir presupuesto

  constructor(private servicioServicio: ServicioService,
    private formBuilder: FormBuilder, 
    private datosServici: DatosService, 
    ) {
    this.servicio= this.servicioServicio.retornar();
    this.formulario = this.formBuilder.group({ // formulario de lista para presupuesto
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
    });
  }

  formularioPresupuesto = new FormGroup({  // formulario de check box
    servicio0: new FormControl(false),
    servicio1: new FormControl(false),
    servicio2: new FormControl(false)
  });

  calcularPresupuesto(){ //solo calcula los servicios 
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
calcularTotal(){ // calcula tambien las paginas y lenguas 
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
    const dinero = this.presupuestoTotal;
    const servicio= [];
    const data= new Date();
  if(this.formularioPresupuesto.value.servicio0 ){
    servicio.push({ nombre: 'SEO'});
  }
  if(this.formularioPresupuesto.value.servicio1){
    servicio.push({ nombre: 'Ads'});
  }
  if (this.formularioPresupuesto.value.servicio2) {
    servicio.push({ nombre: 'Web', paginas: this.paginas, lenguas: this.lenguas});
  }

    this.datosGuardados.push({ nombre, email, telefono, dinero, servicio, data});
    this.guardarDatos()
    console.log('Datos guardados:', this.datosGuardados);
    this.datosServici.obtenerDatos();
    this.formulario.reset();
    this.datosGuardados= [];
  }
  else {
    console.log('El formulario no es válido, por favor verifica los campos.');
  }
}
ngOnInit(): void {
  this.datosServici.obtenerDatos();
  console.log('esto son datos guardados' ,this.datosServici.obtenerDatos())
}
guardarDatos(){
  this.datosServici.guardarDatos(this.datosGuardados);
}
borrarDatos(){
  this.datosServici.borrarDatos();
}
}

