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
}
