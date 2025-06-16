import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../../core/services/pedido.service';
import { ProfileService } from '../../../core/services/profile.service';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-mis-pedidos',
    templateUrl: './mis-pedidos.component.html',
    styleUrls: ['./mis-pedidos.component.scss'],
    standalone: false
})
export class MisPedidosComponent implements OnInit {
    pedidos: any[] = [];
    rol: 'CLIENTE' | 'TATUADOR' | null = null;

    constructor(
        private pedidoService: PedidoService,
        private profileService: ProfileService,
        private http: HttpClient
    ) {}

    ngOnInit(): void {
        this.profileService.obtenerPerfil().subscribe({
            next: (res) => {
                this.rol = res.rol;
            },
            error: (err) => {
                console.error('Error al cargar el rol de usuario', err);
            }
        });
        this.pedidoService.obtenerMisPedidos().subscribe({
            next: (pedidos) => this.pedidos = pedidos,
            error: (err) => console.error('Error al cargar los pedidos:', err)
        });
    }

    descargarImagen(rutaImagen: string): void {
        const url = `http://localhost:8080${rutaImagen}`;
        const nombreArchivo = rutaImagen.split('/').pop() || 'imagen.jpg';

        this.http.get(url, { responseType: 'blob' }).subscribe(blob => {
            const enlace = document.createElement('a');
            const urlBlob = window.URL.createObjectURL(blob);
            enlace.href = urlBlob;
            enlace.download = nombreArchivo;
            enlace.click();
            window.URL.revokeObjectURL(urlBlob);
        });
    }
    
}
