import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoRegistroService } from '../services/estado-registro.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-elegir-rol',
  templateUrl: './elegir-rol.component.html',
  styleUrls: ['./elegir-rol.component.scss'],
  standalone: false
})
export class ElegirRolComponent {
  constructor(
    private router: Router,
    private estadoRegistro: EstadoRegistroService,
    private authService: AuthService
  ) {}

  elegirCliente(): void {
    this.router.navigate(['/registro/cliente']);
  }

  elegirTatuador(): void {
    this.router.navigate(['/registro/tatuador']);
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
