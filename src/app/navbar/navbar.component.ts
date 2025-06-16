import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../core/services/profile.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: false
})
export class NavbarComponent implements OnInit {
  fotoPerfil: string | null = null;
  rol: 'CLIENTE' | 'TATUADOR' | null = null;

  constructor(public router: Router, private profileService: ProfileService) {}

  irA(ruta: string): void {
    this.router.navigate([ruta]);
  }

  ngOnInit(): void {
    this.profileService.obtenerPerfil().subscribe({
      next: (res) => {
        this.fotoPerfil = res.perfil.fotoPerfil
          ? 'http://localhost:8080' + res.perfil.fotoPerfil
          : 'assets/icons/default-avatar.svg';
        this.rol = res.rol;
      },
      error: (err) => {
        console.error('Error al cargar la foto de perfil:', err);
        this.fotoPerfil = 'assets/icons/default-avatar.svg';
      }
    });
  }

  irAlPerfil(): void {
    this.router.navigate(['/profile']);
  }
}
