import { Component, OnInit } from '@angular/core';
import { DisenyoService } from '../../../core/services/disenyo.service';
import { ActivatedRoute } from '@angular/router';
import { TatuajeService } from '../../../core/services/tatuaje.service';

@Component({
    selector: 'app-tatuajes-tatuador',
    templateUrl: './tatuajes-tatuador.component.html',
    styleUrls: ['./tatuajes-tatuador.component.scss'],
    standalone: false
})
export class TatuajesTatuadorComponent implements OnInit {
    tatuajes: any[] = [];

    constructor(
        private tatuajeService: TatuajeService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.tatuajeService.obtenerTatuajesTatuador(+id).subscribe({
                next: (tatuajes) => this.tatuajes = tatuajes,
                error: (err) => console.error('Error al cargar los tatuajes:', err)
            });
        }
    }
    
}
