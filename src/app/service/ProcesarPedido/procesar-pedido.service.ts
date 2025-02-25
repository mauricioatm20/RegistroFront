import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CestaItem } from '../../model/CestaItem';

@Injectable({
  providedIn: 'root'
})
export class ProcesarPedidoService {

  constructor(
    private http: HttpClient
  ) { }

  categorias():Observable<any> {
    let url = 'http://54.74.123.213:8084/categorias';
    return this.http.get(url);
  }

  productosCategorias(idCategoria:number):Observable<any> {
    let url = 'http://54.74.123.213:8084/productos';
    let params = new HttpParams();
    params = params.append('idCategoria', idCategoria);
    return this.http.get(url,{"params":params});
  }

  enviarPedido(cesta: CestaItem[], usuario:string):Observable<any>{
    let url = 'http://54.74.123.213:8002/pedido';
    let params= new HttpParams();
    params=params.append("usuario", usuario)
    return this.http.post(url,cesta,{"params":params})

  }
}
