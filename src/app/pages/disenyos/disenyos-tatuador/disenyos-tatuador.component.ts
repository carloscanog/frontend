import { Component, OnInit } from '@angular/core';
import { DisenyoService } from '../../../core/services/disenyo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-disenyos-tatuador',
    templateUrl: './disenyos-tatuador.component.html',
    styleUrls: ['./disenyos-tatuador.component.scss'],
    standalone: false
})
export class DisenyosTatuadorComponent implements OnInit {
    disenyos: any[] = [];

    constructor(
        private disenyoService: DisenyoService,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
        if (id) {
            this.disenyoService.obtenerDisenyosTatuador(+id).subscribe({
                next: (disenyos) => this.disenyos = disenyos,
                error: (err) => console.error('Error al cargar los diseños:', err)
            });
        }
    }
    
}
