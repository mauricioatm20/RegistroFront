import { ProcesarPedidoService } from './../../service/ProcesarPedido/procesar-pedido.service';
import { Component, OnInit } from '@angular/core';
import { Categoria } from '../../model/Categoria';
import { Producto } from '../../model/Producto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { CestaItem } from '../../model/CestaItem';
import { MenuComponent } from '../menu/menu.component';
import { AuthService } from '../../service/Auth/auth.service';

@Component({
  selector: 'app-procesar-pedido',
  imports: [
    FormsModule,
    CommonModule
  ],

  templateUrl: './procesar-pedido.component.html',
  styleUrl: './procesar-pedido.component.scss'
})
export class ProcesarPedidoComponent implements OnInit {

  categorias: Categoria[];
  productos: Producto[];
  idCategoriaSel: number;
  cesta: CestaItem[];
  usuario:string='';

  constructor(
    private procesarPedidoService: ProcesarPedidoService,
    private auth:AuthService
  ) {}

  ngOnInit(): void {
    this.procesarPedidoService.categorias().subscribe(c=>
      this.categorias = c);
      this.cesta = [];

       // Suscribirse a los cambios del usuario autenticado
    this.auth.clientes.subscribe(cliente => {
      if (cliente) {
        this.usuario = cliente.usuario;
      }
    });

  }

  productosCategoria(){
    this.procesarPedidoService.productosCategorias(this.idCategoriaSel).subscribe(p=>{
      this.productos = p;
      this.actualizarStock();
    });
  }

  actualizarStock(){
    this.productos.forEach(p=>{
      this.cesta.forEach(c=>{
        //para cada producto de la categoria seleccionada, recorremos la cesta de la compra,
        //y si encontramos el producto en la cesta, actualizamos el stock
        if(p.idProducto == c.producto.idProducto){
          p.stock = p.stock - c.unidades;
        }
      })
    })
  }

  agregarProductoCesta(producto: Producto){

    if(producto.unidades < producto.stock){
     let item = new CestaItem();
      item.producto = producto;
      item.unidades = producto.unidades;

      //actualizar stock
      producto.stock = producto.stock - producto.unidades
      this.cesta.push(item);
    }else{
      alert("No hay stock suficiente");
    }
  }

  eliminarProductoCesta(pos: number){
    let item = this.cesta[pos];
    this.cesta.splice(pos, 1);

    //localizamos el producto en la lista de productos y actualizamos el stock
    let producto = this.productos.find(p => p.idProducto == item.producto.idProducto);
    producto.stock = Number (producto.stock) + Number(item.unidades);

  }

  procesarPedido(){
    this.procesarPedidoService.enviarPedido(this.cesta, this.usuario)
      .subscribe({
        next: r=> alert("pedido procesado"),
        error: err => alert("El pedido no se ha procesado")
    });
  }
}
