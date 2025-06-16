import { Component, OnInit } from '@angular/core';
import { DisenyoService } from '../../../core/services/disenyo.service';

@Component({
    selector: 'app-mis-disenyos',
    templateUrl: './mis-disenyos.component.html',
    styleUrls: ['./mis-disenyos.component.scss'],
    standalone: false
})
export class MisDisenyosComponent implements OnInit {
    disenyos: any[] = [];

    constructor(private disenyoService: DisenyoService) {}

    ngOnInit(): void {
        this.disenyoService.obtenerMisDisenyos().subscribe({
            next: (disenyos) => this.disenyos = disenyos,
            error: (err) => console.error('Error al cargar los diseños:', err)
        });
    }
    
}
