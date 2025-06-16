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
    filtroEtiqueta: string = '';

    constructor(private tatuajeService: TatuajeService) {}

    ngOnInit(): void {
        this.tatuajeService.obtenerTodosTatuajes().subscribe({
            next: (tatuajes) => this.tatuajes = tatuajes,
            error: (err) => console.error('Error al cargar los tatuajes:', err)
        });
    }

    tatuajesFiltrados(): any[] {
        if (!this.filtroEtiqueta.trim()) {
            return this.tatuajes;
        }

        const filtro = this.filtroEtiqueta.toLowerCase();

        return this.tatuajes.filter(t =>
            t.etiquetas?.some((e: string) => e.toLowerCase().includes(filtro)) ||
            t.titulo.toLowerCase().includes(filtro)
        );
    }
    
}
