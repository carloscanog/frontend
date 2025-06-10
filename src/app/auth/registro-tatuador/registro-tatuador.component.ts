import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EstadoRegistroService } from '../services/estado-registro.service';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-registro-tatuador',
  templateUrl: './registro-tatuador.component.html',
  styleUrls: ['./registro-tatuador.component.scss'],
  standalone: false
})
export class RegistroTatuadorComponent {
  biografia = '';
  ubicacion = '';
  estilos = '';
  instagram = '';
  tiktok = '';

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

    if (!this.ubicacion || !this.estilos) {
      alert('Por favor, completa los campos obligatorios.');
      return;
    }

    const estilosArray = this.estilos.split(',').map(e => e.trim());

    const datosFinales = {
      ...datosComunes,
      biografia: this.biografia,
      ubicacion: this.ubicacion,
      estilos: estilosArray,
      instagram: this.instagram,
      tiktok: this.tiktok
    };

    console.log('📦 Enviar al backend (tatuador):', datosFinales);

    this.authService.registrarTatuador(datosFinales).subscribe({
    next: () => {
        alert('Registro completado con éxito. Ya puedes iniciar sesión.');
        this.estadoRegistro.limpiar();
        this.router.navigate(['/auth/login']);
      },
      error: (err) => {
        console.error('Error en el registro de tatuador:', err);
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
