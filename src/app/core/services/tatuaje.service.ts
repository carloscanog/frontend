import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TatuajeService {

    constructor(private http: HttpClient) {}

    crearTatuaje(formData: FormData): Observable<any> {
        return this.http.post('/tatuajes/nuevo', formData);
    }

    obtenerMisTatuajes(): Observable<any[]> {
        return this.http.get<any[]>('/tatuajes/mios');
    }

    obtenerTatuajePorId(id: number): Observable<any> {
        return this.http.get<any>(`/tatuajes/${id}`);
    }

    eliminarTatuaje(id: number): Observable<any> {
        return this.http.delete(`/tatuajes/${id}`);
    }

    obtenerTodosTatuajes(): Observable<any[]> {
        return this.http.get<any[]>('/tatuajes/muro');
    }

    obtenerTatuajesTatuador(id: number): Observable<any[]> {
        return this.http.get<any[]>(`/tatuadores/${id}/tatuajes`);
    }

}
