import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoRegistroService } from '../services/estado-registro.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-registro-paso1',
  templateUrl: './registro-paso1.component.html',
  styleUrls: ['./registro-paso1.component.scss'],
  standalone: false
})
export class RegistroPaso1Component {
  nombre = '';
  apellidos = '';
  email = '';
  password = '';
  mensajeError: string | null = null;

  constructor(
    private router: Router,
    private estadoRegistro: EstadoRegistroService,
    private authService: AuthService
  ) {}

  onConfirmar(): void {
    this.authService.registrarUsuario({
    nombre: this.nombre,
    apellidos: this.apellidos,
    email: this.email,
    password: this.password
  }).subscribe({
    next: (usuarioCreado) => {
      this.estadoRegistro.establecer({
        usuarioId: usuarioCreado.id,
        nombre: this.nombre,
        apellidos: this.apellidos,
        email: this.email,
        password: this.password
      });
      this.router.navigate(['/registro/elegir-rol']);
    },
    error: (err) => {
      console.error('Error al registrar usuario:', err);

      if (err.status === 409 && err.error?.message?.includes('email')) {
        this.mensajeError = err.error.message;
      } else {
        this.mensajeError = 'Ha ocurrido un error. Intenta más tarde.';
      }
    }
  });
  }
}
