import { Component, OnInit } from '@angular/core';
import { TatuajeService } from '../../../core/services/tatuaje.service';
import { ProfileService } from '../../profile/services/profile.service';

@Component({
    selector: 'app-mis-tatuajes',
    templateUrl: './mis-tatuajes.component.html',
    styleUrls: ['./mis-tatuajes.component.scss'],
    standalone: false
})
export class MisTatuajesComponent implements OnInit {
    tatuajes: any[] = [];

    constructor(private tatuajeService: TatuajeService, private profileService: ProfileService) {}

    ngOnInit(): void {
    this.tatuajeService.obtenerMisTatuajes().subscribe({
        next: (tatuajes) => this.tatuajes = tatuajes,
        error: (err) => console.error('Error al cargar los tatuajes:', err)
    });
    }
}
