
import { Cliente } from './../../model/Cliente';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private clienteSubject = new BehaviorSubject<Cliente | null>(null);
  clientes = this.clienteSubject.asObservable(); // Observable para escuchar cambios

  setCliente(cliente: Cliente) {
    this.clienteSubject.next(cliente); // Actualiza el estado del usuario autenticado
  }
}

