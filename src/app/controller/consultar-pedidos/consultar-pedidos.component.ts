import { FormsModule } from '@angular/forms';
import { Pedido } from '../../model/Pedido';
import { ConsultarPedidosService } from './../../service/ConsultarPedidos/consultar-pedidos.service';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../../service/Auth/auth.service';

@Component({
  selector: 'app-consultar-pedidos',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './consultar-pedidos.component.html',
  styleUrl: './consultar-pedidos.component.scss'
})
export class ConsultarPedidosComponent implements OnInit{

  pedidos:Pedido[];
  usuario:string;

  constructor(
    private consultarPedidosService:ConsultarPedidosService,
    private auth:AuthService
  ){}

  ngOnInit(): void {
    this.auth.clientes.subscribe(cliente => {
      if (cliente) {
        this.usuario = cliente.usuario;
        this.consultarPedidosService.consultarPedidos(this.usuario)
          .subscribe(pedidos => this.pedidos = pedidos);
      }
    });
  }
}
