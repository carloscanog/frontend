import { Component, OnInit } from '@angular/core';
import { TatuajeService } from '../../../core/services/tatuaje.service';

@Component({
    selector: 'app-muro-tatuajes',
    templateUrl: './muro-tatuajes.component.html',
    styleUrls: ['./muro-tatuajes.component.scss'],
    standalone: false
})
export class MuroTatuajesComponent implements OnInit {
    tatuajes: any[] = [];

    constructor(private tatuajeService: TatuajeService) {}

    ngOnInit(): void {
        this.tatuajeService.obtenerTodosTatuajes().subscribe({
            next: (tatuajes) => this.tatuajes = tatuajes,
            error: (err) => console.error('Error al cargar los tatuajes:', err)
        });
    }
    
}
