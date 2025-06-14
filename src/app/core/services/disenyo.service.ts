import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisenyoService {

    constructor(private http: HttpClient) {}

    crearDisenyo(formData: FormData): Observable<any> {
        return this.http.post('/disenyos/nuevo', formData);
    }

    obtenerMisDisenyos(): Observable<any[]> {
        return this.http.get<any[]>('/disenyos/mios');
    }

    obtenerDisenyoPorId(id: number): Observable<any> {
        return this.http.get<any>(`/disenyos/${id}`);
    }

    eliminarDisenyo(id: number): Observable<any> {
        return this.http.delete(`/disenyos/${id}`);
    }

}
