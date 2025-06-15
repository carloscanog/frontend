import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProfileService {
    constructor(private http: HttpClient) {}

    obtenerPerfil(): Observable<{ rol: 'CLIENTE' | 'TATUADOR'; perfil: any }> {
        return this.http.get<{ rol: 'CLIENTE' | 'TATUADOR'; perfil: any }>('/profile/me');
    }

    actualizarFotoUsuario(formData: FormData) {
        return this.http.put<{ fotoPerfil: string }>(`/profile/foto`, formData);
    }
}
