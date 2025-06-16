import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TatuajeService } from '../../../core/services/tatuaje.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-detalle-tatuaje',
  templateUrl: './detalle-tatuaje.component.html',
  styleUrls: ['./detalle-tatuaje.component.scss'],
  standalone: false
})
export class DetalleTatuajeComponent implements OnInit {
    tatuaje: any;
    esAutor: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tatuajeService: TatuajeService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.tatuajeService.obtenerTatuajePorId(+id).subscribe({
                next: (data) => {
                    this.tatuaje = data;

                    this.authService.obtenerUsuarioActual().subscribe({
                        next: (usuario) => {
                            this.esAutor = usuario.usuarioId === this.tatuaje.autor.usuario.id;
                        },
                        error: () => {
                            this.esAutor = false;
                        }
                    });
                },
                error: () => this.router.navigate(['/tatuajes/mios'])
            });
        }
    }

    eliminarTatuaje(): void {
        const confirmed = confirm('¿Seguro que quieres eliminar este tatuaje?');
        if (!confirmed) return;

        this.tatuajeService.eliminarTatuaje(this.tatuaje.id).subscribe(() => {
            this.router.navigate(['/mis-tatuajes']);
        });
    }

}
