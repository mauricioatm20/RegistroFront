import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class RegistarService {

  constructor(
    private http: HttpClient
  ) { }

  registrar(cliente: Cliente): Observable<any>{
    let url = 'http://34.242.19.232:8080/registrar';
    return this.http.post(url, cliente)
  }
}
