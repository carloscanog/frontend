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
        return this.http.get<any[]>('/tatuajes/mios', { withCredentials: true });
    }
}
