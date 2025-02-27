import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://34.244.212.188'; // Usa HTTP temporalmente

  constructor(private http: HttpClient) {} // Inyecta HttpClient correctamente

  login(usuario: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/clientes/autenticar`;
    const params = new HttpParams()
      .set('usuario', usuario)
      .set('password', password);

    return this.http.get(url, { params }); // Acceso correcto a this.http
  }
}
