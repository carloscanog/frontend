import { Component, OnInit } from '@angular/core';
import { ProfileService } from './services/profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  perfil: any = null;
  rol: 'CLIENTE' | 'TATUADOR' | null = null;
  selectedFile: File | null = null;
  subiendoFoto: boolean = false;
  mensajeFoto: string | null = null;

  constructor(
    private profileService: ProfileService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.profileService.obtenerPerfil().subscribe({
      next: (res) => {
        console.log('Respuesta del perfil:', res);
        this.rol = res.rol;
        this.perfil = res.perfil;
      },
      error: (err) => {
        console.error('Error cargando perfil:', err);
      }
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  subirFoto(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('archivo', this.selectedFile);

    this.subiendoFoto = true;
    this.mensajeFoto = null;

    this.profileService.actualizarFotoUsuario(formData).subscribe({
      next: (res) => {
        this.perfil.fotoPerfil = res.fotoPerfil;
        this.mensajeFoto = 'Foto actualizada correctamente.';
        this.subiendoFoto = false;
      },
      error: (err) => {
        console.error('Error al subir la imagen:', err);
        this.mensajeFoto = 'Error al subir la imagen.';
        this.subiendoFoto = false;
      }
    });
  }
}
