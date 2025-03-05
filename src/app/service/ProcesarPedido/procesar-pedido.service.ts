import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
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
    let url = 'https://market.mauricioatm.click/categorias';
    return this.http.get(url);
  }

  productosCategorias(idCategoria:number):Observable<any> {
    let url = 'https://market.mauricioatm.click/productos';
    let params = new HttpParams();
    params = params.append('idCategoria', idCategoria);
    return this.http.get(url,{"params":params});
  }

  enviarPedido(cesta: CestaItem[], usuario:string):Observable<any>{
    let url = 'https://market.mauricioatm.click/pedido';
    let params= new HttpParams();
    params=params.append("usuario", usuario)
    return this.http.post(url,cesta,{"params":params})

  }
}

