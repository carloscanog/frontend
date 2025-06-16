import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  // Obtener token de localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Guarda el token en localStorage
  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  // Login
  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.baseUrl}/auth/login`, credentials);
  }

  // Obtener usuario identificado
  obtenerUsuarioActual(): Observable<any> {
    return this.http.get(`${this.baseUrl}/profile/me`);
  }

  // Registro de usuario
  registrarUsuario(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/usuarios/registro`, data);
  }

  // Registro de cliente
  registrarCliente(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/clientes/registro`, data);
  }

  // Registro de tatuador
  registrarTatuador(data: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/tatuadores/registro`, data);
  }

  // Eliminar usuario
  eliminarUsuarioPorEmail(email: String): Observable<any> {
    return this.http.delete<void>(`${this.baseUrl}/usuarios/email/${email}`)
  }

}
