import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../../../core/services/profile.service';

@Component({
  selector: 'app-ver-otro-perfil',
  standalone: false,
  templateUrl: './ver-otro-perfil.component.html',
  styleUrls: ['./ver-otro-perfil.component.scss']
})
export class VerOtroPerfilComponent implements OnInit {
  perfil: any = null;
  rol: 'CLIENTE' | 'TATUADOR' | null = null;

  constructor(
    private profileService: ProfileService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.profileService.obtenerOtroPerfil(+id).subscribe({
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

}
