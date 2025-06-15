import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DisenyoService } from '../../../core/services/disenyo.service';

@Component({
  selector: 'app-detalle-disenyo',
  templateUrl: './detalle-disenyo.component.html',
  styleUrls: ['./detalle-disenyo.component.scss'],
  standalone: false
})
export class DetalleDisenyoComponent implements OnInit {
    disenyo: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private disenyoService: DisenyoService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
        this.disenyoService.obtenerDisenyoPorId(+id).subscribe({
            next: (data) => this.disenyo = data,
            error: () => console.error('Disenyo no encontrado')
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
