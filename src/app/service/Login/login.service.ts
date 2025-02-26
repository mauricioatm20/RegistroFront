import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url= 'https://63.33.204.79:8080/autenticar';

  constructor(
   private http: HttpClient
  ) { }
 login(usuario: string, password: string): Observable<any> {
    const body = { usuario, password };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(this.url, body, { headers, withCredentials: true });
  }
}
