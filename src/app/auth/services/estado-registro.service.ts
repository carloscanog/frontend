import { Injectable } from '@angular/core';

interface DatosComunesRegistro {
  usuarioId: number;
  nombre: string;
  apellidos: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class EstadoRegistroService {
  private datos: DatosComunesRegistro | null = null;

  establecer(datos: DatosComunesRegistro): void {
    this.datos = datos;
  }

  obtener(): DatosComunesRegistro | null {
    return this.datos;
  }

  limpiar(): void {
    this.datos = null;
  }
}
