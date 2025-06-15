import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../profile/services/profile.service';
import { PedidoService } from '../../../core/services/pedido.service';

@Component({
    selector: 'app-mis-pedidos',
    templateUrl: './mis-pedidos.component.html',
    styleUrls: ['./mis-pedidos.component.scss'],
    standalone: false
})
export class MisPedidosComponent implements OnInit {
    pedidos: any[] = [];

    constructor(private pedidoService: PedidoService, private profileService: ProfileService) {}

    ngOnInit(): void {
        this.pedidoService.obtenerMisPedidos().subscribe({
            next: (pedidos) => this.pedidos = pedidos,
            error: (err) => console.error('Error al cargar los pedidos:', err)
        });
    }
    
}
