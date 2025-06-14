import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TatuajeService } from '../../../core/services/tatuaje.service';

@Component({
  selector: 'app-detalle-tatuaje',
  templateUrl: './detalle-tatuaje.component.html',
  styleUrls: ['./detalle-tatuaje.component.scss'],
  standalone: false
})
export class DetalleTatuajeComponent implements OnInit {
    tatuaje: any;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private tatuajeService: TatuajeService
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
        this.tatuajeService.obtenerTatuajePorId(+id).subscribe({
            next: (data) => this.tatuaje = data,
            error: () => console.error('Tatuaje no encontrado')
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
