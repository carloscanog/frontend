import { Component, OnInit } from '@angular/core';
import { DisenyoService } from '../../../core/services/disenyo.service';

@Component({
    selector: 'app-muro-disenyos',
    templateUrl: './muro-disenyos.component.html',
    styleUrls: ['./muro-disenyos.component.scss'],
    standalone: false
})
export class MuroDisenyosComponent implements OnInit {
    disenyos: any[] = [];

    constructor(private disenyoService: DisenyoService) {}

    ngOnInit(): void {
        this.disenyoService.obtenerTodosDisenyos().subscribe({
            next: (disenyos) => this.disenyos = disenyos,
            error: (err) => console.error('Error al cargar los diseños:', err)
        });
    }
    
}
