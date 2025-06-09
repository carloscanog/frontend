import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoRegistroService } from '../services/estado-registro.service';

@Component({
  selector: 'app-elegir-rol',
  templateUrl: './elegir-rol.component.html',
  styleUrls: ['./elegir-rol.component.scss'],
  standalone: false
})
export class ElegirRolComponent {
  constructor(
    private router: Router,
    private estadoRegistro: EstadoRegistroService
  ) {}

  elegirCliente(): void {
    this.router.navigate(['/registro/cliente']);
  }

  elegirTatuador(): void {
    this.router.navigate(['/registro/tatuador']);
  }

  cancelar(): void {
    this.estadoRegistro.limpiar(); // si usas limpieza de datos temporales
    this.router.navigate(['/']);
  }

}
