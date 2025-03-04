import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CestaItem } from '../../model/CestaItem';


const BASE_URL = 'market.mauricioatm.click'; // Define la base del backend
const HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class ProcesarPedidoService {
  private productosUrl = `${BASE_URL}:8084`;
  private pedidosUrl = `${BASE_URL}:8002`;

  constructor(private http: HttpClient) {}

  categorias(): Observable<any> {
    return this.http.get(`${this.productosUrl}/categorias`, { headers: HEADERS });
  }

  productosCategorias(idCategoria: number): Observable<any> {
    const params = new HttpParams().set('idCategoria', idCategoria.toString());
    return this.http.get(`${this.productosUrl}/productos`, { headers: HEADERS, params });
  }

  enviarPedido(cesta: CestaItem[], usuario: string): Observable<any> {
    const body = { usuario, cesta };
    return this.http.post(`${this.pedidosUrl}/pedido`, body, { headers: HEADERS, withCredentials: true });
  }
}
