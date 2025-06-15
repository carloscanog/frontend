import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

    constructor(private http: HttpClient) {}

    crearPedido(formData: FormData): Observable<any> {
        return this.http.post('/pedidos/nuevo', formData);
    }

    obtenerMisPedidos(): Observable<any[]> {
        return this.http.get<any[]>('/pedidos/mios');
    }

    obtenerPedidoPorId(id: number): Observable<any> {
        return this.http.get<any>(`/pedidos/${id}`);
    }

}
