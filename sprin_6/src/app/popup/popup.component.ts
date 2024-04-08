import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {

@Input() tipo: 'paginas' | 'lenguas' = 'paginas';
  
  titulo='Numero de paginas';
  descripcion='Añadir las paginas que va tener tu proyecto. El precio de cada pagina es de 30€';

  
  titulo2='Numero de lenguas';
  descripcion2='Añadir las lenguas que va tener tu proyecto. El precio de cada lengua es de 30€';

}
