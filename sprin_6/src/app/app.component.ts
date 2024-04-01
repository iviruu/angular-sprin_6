import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ServiciosComponent } from './servicios/servicios.component';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ServiciosComponent,PopupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
