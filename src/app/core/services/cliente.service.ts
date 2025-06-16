import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

    constructor(private http: HttpClient) {}

    actualizarPerfil(cliente: any): Observable<any> {
        return this.http.put(`/clientes/${cliente.id}`, cliente);
    }
}