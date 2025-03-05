import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const BASE_URL = 'https://market.mauricioatm.click:8002'; // Define la base del backend
const HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class ConsultarPedidosService {
  private pedidosUrl = `${BASE_URL}/pedidos`;

  constructor(private http: HttpClient) {}

  consultarPedidos(usuario: string): Observable<any> {
    const params = new HttpParams().set('usuario', usuario);
    return this.http.get(this.pedidosUrl, { headers: HEADERS, params });
  }
}
