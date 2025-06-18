import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoRegistroService } from '../services/estado-registro.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-registro-cliente',
  templateUrl: './registro-cliente.component.html',
  styleUrls: ['./registro-cliente.component.scss'],
  standalone: false
})
export class RegistroClienteComponent {
  ciudad = '';
  intereses = '';

  constructor(
    public router: Router,
    private estadoRegistro: EstadoRegistroService,
    private authService: AuthService
  ) {}

  onSubmit(): void {
    const datosComunes = this.estadoRegistro.obtener();

    if (!datosComunes) {
      alert('Datos incompletos. Vuelve al paso anterior.');
      this.router.navigate(['/registro/paso1']);
      return;
    }

    if (!this.ciudad || !this.intereses) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const interesesArray = this.intereses.split(',').map(i => i.trim());

    const datosFinales = {
      ...datosComunes,
      ciudad: this.ciudad,
      intereses: interesesArray
    };

    this.authService.registrarCliente(datosFinales).subscribe({
      next: () => {
        alert('Registro completado con éxito. Ya puedes iniciar sesión.');
        this.estadoRegistro.limpiar();
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error('Error en el registro de cliente:', err);
        alert('Error al registrar. Intenta más tarde.');
      }
    });
  }
  
  cancelar(): void {
    const email = this.estadoRegistro.obtener()?.email;
    if (email) {
      this.authService.eliminarUsuarioPorEmail(email).subscribe({
        next: () => {
          this.estadoRegistro.limpiar();
          this.router.navigate(['/']);
        },
        error: (err) => {
          console.error('Error al eliminar usuario:', err);
          this.router.navigate(['/']);
        }
      });
    } else {
      this.router.navigate(['/']);
    }
  }

}
