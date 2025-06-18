import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisenyoService } from '../../../core/services/disenyo.service';
import { AuthService } from '../../../core/services/auth.service';
import { StripeService } from '../../../core/services/stripe.service';

@Component({
  selector: 'app-detalle-disenyo',
  templateUrl: './detalle-disenyo.component.html',
  styleUrls: ['./detalle-disenyo.component.scss'],
  standalone: false
})
export class DetalleDisenyoComponent implements OnInit {
    disenyo: any;
    esAutor: boolean = false;
    id: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private disenyoService: DisenyoService,
        private authService: AuthService,
        private stripeService: StripeService
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id');
        if (this.id) {
            this.disenyoService.obtenerDisenyoPorId(+this.id).subscribe({
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

    comprar() {
        this.stripeService.createCheckoutSession(this.id).subscribe({
            next: (response) => {
                window.location.href = response.url;
            },
            error: (err) => {
                console.error('Error al crear la sesión de Stripe:', err);
                alert('No se pudo iniciar la compra. Inténtalo de nuevo más tarde.');
            },
        });
    }

}
