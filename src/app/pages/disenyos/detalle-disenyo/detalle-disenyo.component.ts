import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisenyoService } from '../../../core/services/disenyo.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-detalle-disenyo',
  templateUrl: './detalle-disenyo.component.html',
  styleUrls: ['./detalle-disenyo.component.scss'],
  standalone: false
})
export class DetalleDisenyoComponent implements OnInit {
    disenyo: any;
    esAutor: boolean = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private disenyoService: DisenyoService,
        private authService: AuthService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.disenyoService.obtenerDisenyoPorId(+id).subscribe({
                next: (data) => {
                    this.disenyo = data;

                    this.authService.obtenerUsuarioActual().subscribe({
                        next: (usuario) => {
                            this.esAutor = usuario.usuarioId === this.disenyo.autor.usuario.id;
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

    eliminarDisenyo(): void {
        const confirmed = confirm('¿Seguro que quieres eliminar este disenyo?');
        if (!confirmed) return;

        this.disenyoService.eliminarDisenyo(this.disenyo.id).subscribe(() => {
            this.router.navigate(['/mis-disenyos']);
        });
    }

}
