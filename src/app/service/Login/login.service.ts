import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
   private http: HttpClient
  ) { }
  login(usuario:string, password:string ): Observable<any>{

    let url= 'http://34.242.19.232:8080/autenticar';
    let params = new HttpParams();

    params = params.append('usuario', usuario);
    params = params.append('password', password);
    return this.http.get(url, {params: params});
  }
}
