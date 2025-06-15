import { Component, OnInit } from '@angular/core';
import { TatuajeService } from '../../../core/services/tatuaje.service';

@Component({
    selector: 'app-mis-tatuajes',
    templateUrl: './mis-tatuajes.component.html',
    styleUrls: ['./mis-tatuajes.component.scss'],
    standalone: false
})
export class MisTatuajesComponent implements OnInit {
    tatuajes: any[] = [];

    constructor(private tatuajeService: TatuajeService) {}

    ngOnInit(): void {
        this.tatuajeService.obtenerMisTatuajes().subscribe({
            next: (tatuajes) => this.tatuajes = tatuajes,
            error: (err) => console.error('Error al cargar los tatuajes:', err)
        });
    }
    
}
