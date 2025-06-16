import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TatuadorService {

    constructor(private http: HttpClient) {}

    actualizarPerfil(tatuador: any): Observable<any> {
        return this.http.put(`/tatuadores/${tatuador.id}`, tatuador);
    }
}