import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './controller/login/login.component';
import { MenuComponent } from './controller/menu/menu.component';
import { PortadaComponent } from './controller/portada/portada.component';
import { ProcesarPedidoComponent } from './controller/procesar-pedido/procesar-pedido.component';
import { ConsultarPedidosComponent } from './controller/consultar-pedidos/consultar-pedidos.component';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    RouterModule,
    LoginComponent,
    MenuComponent,
    PortadaComponent,
    ProcesarPedidoComponent,
    ConsultarPedidosComponent

  ],
  providers: [provideClientHydration(withEventReplay())],
})
export class AppModule { }
