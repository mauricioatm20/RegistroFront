import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../../model/Cliente';

const BASE_URL = "https://market.mauricioatm.click"; // Define la base del backend
const HEADERS = new HttpHeaders({ 'Content-Type': 'application/json' });

@Injectable({
  providedIn: 'root'
})
export class RegistarService {

  private url = `${BASE_URL}:8080/registrar`;

  constructor(private http: HttpClient) {}

  registrar(cliente: Cliente): Observable<any> {
    return this.http.post(this.url, cliente, { headers: HEADERS, withCredentials: true });
  }
}
